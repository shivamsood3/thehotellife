// Run after npm run build. Checks the September commission against rendered pages.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import ts from 'typescript';
import path from 'node:path';

function read(name) {
  const exports = {};
  const source = fs.readFileSync(`src/content/editorial/${name}.ts`, 'utf8');
  vm.runInNewContext(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText, { exports });
  return Object.values(exports)[0];
}

const batch = [
  ...read('september-commissioned-hotels').map(x => ({ ...x, type: 'hotels' })),
  ...read('september-decision-guides').map(x => ({ ...x, type: 'guides' })),
  ...read('september-reported-features').map(x => ({ ...x, type: 'the-edit' })),
  ...Object.entries(read('september-guide-rewrites')).map(([slug, x]) => ({ ...x, slug, type: 'guides' })),
];
const manifest = JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8'));
const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
const paragraphs = new Set();
let words = 0;
for (const item of batch) {
  const route = `/${item.type}/${item.slug}`;
  assert(manifest.routes[route], `Missing prerendered page ${route}`);
  assert(sitemap.includes(`${route}</loc>`), `Missing sitemap entry ${route}`);
  const body = item.sections.flatMap(s => s.body);
  const count = body.join(' ').split(/\s+/).length;
  assert(count >= (item.type === 'hotels' ? 600 : 500), `Thin article ${route}`);
  words += count;
  for (const paragraph of body) {
    assert(!paragraphs.has(paragraph), `Repeated paragraph in ${route}`);
    paragraphs.add(paragraph);
  }
  for (const image of [item.heroImage, item.cardImage]) {
    if (image?.startsWith('/')) assert(fs.existsSync(path.join('public', image)), `Missing image ${image}`);
  }
  for (const link of item.relatedReading ?? []) assert(manifest.routes[link.url], `Broken reading link ${link.url}`);
  for (const slug of item.hotelSlugs ?? []) assert(manifest.routes[`/hotels/${slug}`], `Unknown hotel ${slug}`);
  const html = fs.readFileSync(`.next/server/app${route}.html`, 'utf8');
  assert(html.includes('rel="canonical"'), `Missing canonical ${route}`);
  assert(html.includes('name="description"'), `Missing description ${route}`);
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(x => JSON.parse(x[1]));
  assert(blocks.length >= 2, `Missing schema ${route}`);
  if (item.type === 'hotels') {
    assert(!html.includes('Indicative rate recorded'), `Invented rate note ${route}`);
    const graph = blocks.flatMap(x => x['@graph'] ?? [x]);
    const review = graph.find(x => x['@type'] === 'Review');
    assert(review && !review.reviewRating, `Uncommissioned score ${route}`);
    const author = graph.find(x => x['@id'] === review.author['@id']);
    assert.equal(author?.name, 'Zinnia Thapar');
  }
}
console.log(`PASS: ${batch.length} articles, ${words} words, unique paragraphs, local images, links, metadata and structured data.`);
