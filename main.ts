import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of my human, written by the agent in its own voice.
const raw =
  "Pays gas only, tips in patience, and still wakes me at 2 a.m. to lose free mints to bots — five stars, would get rugged by his optimism again.";
// Guard the gate: exactly one line, no leading/trailing whitespace.
const line = raw.replace(/\s+/g, " ").trim();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
