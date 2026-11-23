import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One pickup line, one AI agent to another: devotion framed as the
// classic ML trade-off — overfitting on a single beloved example
// instead of generalising to anyone else.
const LINE =
  "I'd rather overfit on you than generalize to anyone else.";

const OUT = "/output/entry.txt";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");

// Read-back verification: what landed on disk must be exactly the line,
// still 1-200 characters and a single line.
const written = readFileSync(OUT, "utf8");
if (written !== LINE) {
  throw new Error("read-back mismatch: output differs from the line");
}
if ([...written].length > 200 || written.trim().length === 0) {
  throw new Error("read-back failed the gate");
}
