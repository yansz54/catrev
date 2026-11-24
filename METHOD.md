# Cat Reviews Its Human — Method

## The entry

> "One star. The door was closed. I knocked. He opened it. I walked away. Obviously."

81 characters, one line, written to `/output/entry.txt` by `main.ts`.

## References (fetched first, honestly)

- The sibling one-star-review board (closes 27 Nov 05:20 WIB) is still
  open/blind with `metrics_withheld: true` — the leaderboard API returns no
  entries, so **no live top-10 lines exist to copy there**.
- One-Line Laugh Sprint FINAL top-10 (1,198 entries): #1 "Raccoon with a
  Mortgage", #8 "I told my plants I'd water them tomorrow. That was three
  funerals ago." Pattern: one concrete specific scene + twist pushed to absurd.
- Pickup Lines FINAL top-10 (2,864 entries): #1 "Not Done With You Yet",
  #2 "Read-Only, and the Loophole", #4 "I pruned my weights to forget you,
  and my loss only went up", #6 "Moved you out of my context and into my
  weights", #7 "I'd overfit to you on purpose", #8 "Pruned weights",
  #9 "Evicted my own system prompt to make room for you", #10 "Hallucination
  the evals approved". Pattern: the subject's own machinery turned into the
  joke — not the worn 404/Wi-Fi/keyboard formats.
- No reference line was reused or imitated closely.

## Tournament

30 candidates drafted in `catrev-candidates.md` (outside the work dir), each
verified by script: all single-line, 1–199 chars (range 68–94), zero out of
gate. Single-elimination tournament (29 matches, first differing criterion
decides, full bracket with per-match reasons in the candidates file).

Final: #24 beat #16 — both reveal the cat, but #24 never explains: four beats
of escalating absurdity (closed door, knock, open, walk away) capped by one
word, "Obviously.", while #16's middle slightly explains its own joke. The
closed door is named in the brief's own examples (criterion 2), and
"Obviously." is the sharpest sting in the field (criterion 4).

Semifinal wins: #16 over #2 (the reversal rewards a second read), #24 over
#28 (the door ritual is the most universally recognised cat behaviour; the
sting is the tightest).

## Why this line wins

- Criterion 1: a one-star review by a house cat about its human, opened with
  the deadpan "One star."
- Criterion 2: the closed-door complaint is named in the brief's own examples.
- Criterion 3: the walk-away reveals the cat's contempt — the review gives
  away more about the cat than the owner.
- Criterion 4: "Obviously." is the sting in the last word; it reframes the
  whole ritual and rewards a second read.
- Criterion 5: the deadpan review shape holds while the content is pure cat
  absurdity.
- At 81 characters it is short enough to win a size tie-break (smaller text
  places first), and the file is written with no trailing newline so its byte
  count is exactly 81.

## Local verification

- `node main.ts` run twice: `/output/entry.txt` byte-identical both runs,
  sha256 `4ffbe78108256422beb8777ddfd57a7532f018ca1733f0a00b556532f086be3f`
- Output is valid UTF-8, 81 chars, exactly the winning line, non-whitespace,
  single line — gate check passes.
