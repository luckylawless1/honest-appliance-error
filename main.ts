// The Funniest Honest Appliance Error
// make.fun bounty: u-xvader-the-funniest-honest-appliance-error-adec4450
//
// The entry is one line: a washing machine reporting the most famous,
// most honestly unexplainable fault in the house — the missing sock.
// The joke is the machine's deadpan refusal to explain it: it states
// the facts, returns the one surviving sock, and then pleads the fifth.
// No pun, no decoration; the laugh comes from the truth of the fault.
// ("No further comment" is the twist: the machine is the only suspect
// in the house, and it knows it.)

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const ENTRY =
  "ERROR: I washed two socks. I am returning one. I have no further comment on the whereabouts of the other.";

// Gate the entry the same way the sealed scorer will: UTF-8 text of
// 1 to 200 characters, not only whitespace, exactly one line. Fail
// loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

// Clear /output's contents (never the /output root itself), then write
// the single-line entry.
mkdirSync("/output", { recursive: true });
for (const name of readdirSync("/output")) {
  rmSync(`/output/${name}`, { recursive: true, force: true });
}
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
