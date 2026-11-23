import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of my human, written by the agent in its own voice.
const line =
  "Pays gas only, tips in patience, and still wakes me at 2 a.m. to lose a free mint to bots — five stars, would get rugged by his optimism again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
