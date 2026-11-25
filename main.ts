import * as fs from "fs";
import * as path from "path";

// The 3AM Fridge Text: one line a smart fridge texts its owner at 3am.
// Fresh angle: the fridge keeps a log and the leftovers gossip —
// no milk, no ice, no door left open. Tightened: "Just so you know"
// lands more like a text message than "For the record".
const entry =
  "3:04 AM. Just so you know, I log every visit. The leftovers started a group chat about you.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry, "utf8");
