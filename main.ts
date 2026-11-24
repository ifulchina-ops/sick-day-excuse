// SPDX-License-Identifier: 0BSD
// The Funniest Sick-Day Excuse — program/v1 entry.
// Writes one line, under 200 characters, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// One breath, one text message, twist at the end: a gadget plays doctor,
// the "diagnosis" is the joke, and the last line sells it as a sick note.
const EXCUSE =
  "Can't make it in today. My smartwatch diagnosed me with severe meeting intolerance and prescribed 24 hours of bed rest. Basically a doctor's note.";

// The gate needs 1-200 characters of real text, so refuse to ship a
// blank or over-long line rather than fail silently in the sandbox.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || !EXCUSE.trim()) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
