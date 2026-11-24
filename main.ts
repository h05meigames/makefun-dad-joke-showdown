import { mkdirSync, writeFileSync } from "node:fs";

// One original dad joke, written for this entry: a guitar that frets,
// and a father who claims fretting as his own job at the dinner table.
const joke =
  "My daughter asked why the guitar never gets invited to dinner. I said, 'Because it always frets, and at this table, fretting is Dad's job.'";

// The bounty requires a 1–200 character joke. Count Unicode code points
// (not UTF-16 units or bytes) so multi-byte characters count once, and
// fail loudly instead of writing an out-of-range entry.
const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`joke must be 1–200 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
