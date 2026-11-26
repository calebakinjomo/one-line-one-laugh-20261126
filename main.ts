// One Line, One Laugh — make.fun bounty
// u-deysumbrella-one-line-one-laugh-e0cdcda9
//
// The program writes exactly one funny line to /output/entry.txt.
// The line is a single sentence, well under the 140-character gate,
// with the laugh carried by one surprise turn at the end: the plants
// are the ones judging the gardener, not the other way round.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. Original, written for this bounty — no recycled joke.
const ENTRY =
  "My houseplants held a meeting while I was away and voted unanimously to stop pretending I'm a gardener.";

// Sanity checks, mirroring the sealed gate so a bad line can never ship:
// one line, 1–140 characters, not only whitespace.
if (!ENTRY || ENTRY.trim().length === 0) {
  throw new Error("entry line must not be empty");
}
if (ENTRY.length > 140) {
  throw new Error(`entry line is ${ENTRY.length} characters, over the 140 limit`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry line must be a single line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

// Write the line exactly, with no trailing newline, so the file's
// character count is exactly the line's character count.
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

console.log(`Wrote entry.txt (${ENTRY.length} characters): ${ENTRY}`);
