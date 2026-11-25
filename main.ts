// Funniest Time Machine Warning Label
// make.fun bounty: u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
// SPDX-License-Identifier: MIT
//
// A single warning label for a time machine, 120 characters at most.
// Deterministic: writes the exact same entry text on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "WARNING: Altering the past voids your warranty, your timeline, and your birthday.";

// The competition caps a label at 120 characters. Fail loudly rather
// than ever emitting an over-long entry.
if (ENTRY.length > 120) {
  throw new Error(`Entry is ${ENTRY.length} characters, over the 120 limit.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");

console.log(`Wrote ${ENTRY.length}-character entry to ${outPath}`);
console.log(ENTRY);
