// The One-Line Laugh — make.fun entry (u-ronigrv-the-one-line-laugh-7ccca46f).
//
// Writes a single funny line to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Deterministic: the same line is written on every run, byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, first draft: a phone screen-time report meets the universal
// "I only picked it up to check the time" excuse.
const LINE =
  "My phone's screen time report says I spent six hours on social media, which is impressive considering I only picked it up to check the time.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
