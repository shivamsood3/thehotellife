/* A screening aid, not a substitute for reading and verifying each review. */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  const result = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });
  module._compile(result.outputText, filename);
};

const { hotels } = require(path.join(__dirname, "../src/content/hotels.ts"));
if (process.argv.includes("--headings")) {
  for (const hotel of hotels) {
    console.log(`${hotel.slug} | ${hotel.author} | ${hotel.sections.map((section) => section.heading || "Opening").join(" / ")}`);
  }
  process.exit(0);
}
if (process.argv.includes("--sample")) {
  const slug = process.argv[process.argv.indexOf("--sample") + 1];
  const hotel = hotels.find((entry) => entry.slug === slug);
  if (!hotel) throw new Error(`Unknown review: ${slug}`);
  for (const section of hotel.sections) {
    console.log(`\n${section.heading || hotel.name}\n${section.body.join("\n\n")}`);
  }
  process.exit(0);
}
if (process.argv.includes("--plural")) {
  for (const hotel of hotels) {
    for (const section of hotel.sections) {
      for (const paragraph of section.body) {
        const match = /\b(?:we|us|our|ours)\b/i.exec(paragraph);
        if (match) console.log(`${hotel.slug} | ${section.heading || "Opening"} | ${paragraph.slice(Math.max(0, match.index - 55), match.index + 100)}`);
      }
    }
  }
  process.exit(0);
}
const individualVoice = /\b(?:I|me|my|mine)\b/i;
const collectiveVoice = /\b(?:we|us|our|ours)\b/i;
const rows = hotels.map((hotel) => {
  const paragraphs = hotel.sections.flatMap((section) => section.body);
  const individualParagraphs = paragraphs.filter((paragraph) => individualVoice.test(paragraph)).length;
  const individualSections = hotel.sections.filter((section) => section.body.some((paragraph) => individualVoice.test(paragraph))).length;
  const collectiveParagraphs = paragraphs.filter((paragraph) => collectiveVoice.test(paragraph)).length;
  const status = individualParagraphs === paragraphs.length
    ? "first-person throughout"
    : individualSections === hotel.sections.length
      ? "first-person across sections"
      : individualParagraphs > 0
        ? "mixed voice"
      : collectiveParagraphs > 0
        ? "collective voice"
        : "impersonal voice";
  return { slug: hotel.slug, author: hotel.author, status, individualSections, totalSections: hotel.sections.length, individualParagraphs, totalParagraphs: paragraphs.length, collectiveParagraphs };
});

console.log(`Hotel reviews screened: ${rows.length}`);
for (const status of ["first-person throughout", "first-person across sections", "mixed voice", "collective voice", "impersonal voice"]) {
  console.log(`${status}: ${rows.filter((row) => row.status === status).length}`);
}
console.log(`collective-voice paragraphs: ${rows.reduce((sum, row) => sum + row.collectiveParagraphs, 0)}`);
console.log("\nStatus | First-person sections | First-person paragraphs | Author | Review");
console.log("--- | ---: | ---: | --- | ---");
for (const row of rows) {
  console.log(`${row.status} | ${row.individualSections}/${row.totalSections} | ${row.individualParagraphs}/${row.totalParagraphs} | ${row.author} | ${row.slug}`);
}
if (rows.some((row) => row.status === "mixed voice" || row.status === "collective voice" || row.status === "impersonal voice" || row.collectiveParagraphs > 0)) {
  process.exitCode = 1;
}
