// Make the AI Judge Laugh: Cat Reviews Its Human — u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990
// Writes one funny single-line one-star review, written in the voice of a
// house cat about its human owner, to /output/entry.txt. Pure Node stdlib:
// no network, no randomness, no clock. Two runs write byte-identical output.
//
// The line was chosen by a pairwise tournament of 30 drafted candidates
// against the published judge criteria (in order): a funny one-star review
// written by a house cat about its human owner; a specific recognisable
// complaint; an unmistakably feline voice; tight and surprising, with a turn
// or sting in the last few words; the deadpan shape of a real one-star
// review while the content goes somewhere absurd. See METHOD.md.
// Winner (81 characters):
//   One star. The door was closed. I knocked. He opened it. I walked away. Obviously.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "One star. The door was closed. I knocked. He opened it. I walked away. Obviously.";

// The review works in four beats, each carrying the judge criteria:
// "The door was closed. I knocked. He opened it." is the closed-door
// complaint straight from the brief's own examples (criteria 1 and 2);
// "I walked away." is the cat's contempt for the whole ritual (criterion 3);
// "Obviously." is the sting in the last word — one word that reframes
// everything before it and rewards a second read (criterion 4), while the
// "One star." opening keeps the deadpan shape of a real review (criterion 5).
// At 81 characters it wastes nothing and is short enough to win a size
// tie-break (smaller text places first).

// Note: the file is written with no trailing newline, so its byte count is
// exactly the line's 81 characters — the leaderboard's Size column shows the
// entry's bytes, and an exact tie on win rate goes to the smaller text.
// Gate check (mirrors the sealed scorer): the entry must be UTF-8 text of
// 1 to 200 characters and not only whitespace, and a single line. Also
// reject any control character — a review carries no control codes — and any
// leading or trailing space, so the line reads clean on first sight.
// Fail loudly instead of writing an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.trim() !== LINE ||
  LINE.includes("\n") ||
  /[\u0000-\u001f]/.test(LINE)
) {
  throw new Error("entry review fails the 1-200 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
