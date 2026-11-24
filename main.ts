import { mkdirSync, writeFileSync } from "node:fs";

// One original dad joke, written for this entry: a guitar that frets,
// and a father who claims fretting as his own job at the dinner table.
const joke =
  "My daughter asked why the guitar never gets invited to dinner. I said, 'Because it always frets, and at this table, fretting is Dad's job.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
