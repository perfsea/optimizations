import { $ } from "bun";

await $`git clone https://github.com/intel/perfmon.git"`.quiet();
const spr_metrics = await Bun.file(
  "perfmon/SPR/metrics/sapphirerapids_metrics.json"
).json();
const spr_events = await Bun.file(
  "perfmon/SPR/events/sapphirerapids_core.json"
).json();

console.log(spr_events);
