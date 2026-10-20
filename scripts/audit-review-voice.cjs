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
const individualVoice = /\b(?:I|me|my|mine)\b/i;
const collectiveVoice = /\b(?:we|us|our|ours)\b/i;
const rows = hotels.map((hotel) => {
  const paragraphs = hotel.sections.flatMap((section) => section.body);
  const individualParagraphs = paragraphs.filter((paragraph) => individualVoice.test(paragraph)).length;
  const collectiveParagraphs = paragraphs.filter((paragraph) => collectiveVoice.test(paragraph)).length;
  const status = individualParagraphs === paragraphs.length
    ? "first-person throughout"
    : individualParagraphs > 0
      ? "mixed voice"
      : collectiveParagraphs > 0
        ? "collective voice"
        : "impersonal voice";
  return { slug: hotel.slug, author: hotel.author, status, individualParagraphs, totalParagraphs: paragraphs.length };
});

console.log(`Hotel reviews screened: ${rows.length}`);
for (const status of ["first-person throughout", "mixed voice", "collective voice", "impersonal voice"]) {
  console.log(`${status}: ${rows.filter((row) => row.status === status).length}`);
}
console.log("\nStatus | First-person paragraphs | Author | Review");
console.log("--- | ---: | --- | ---");
for (const row of rows) {
  console.log(`${row.status} | ${row.individualParagraphs}/${row.totalParagraphs} | ${row.author} | ${row.slug}`);
}
