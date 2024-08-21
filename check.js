import { readdir } from "fs/promises";

const file = Bun.file("data/flamegraph.json");
const contents = await file.json();
let links = new Set();

// check that every link has a report
for (const elem in contents) {
  if (contents[elem].link) {
    links.add(contents[elem].link + ".md");
    if (!(await Bun.file(`data/reports/${contents[elem].link}.md`).exists())) {
      console.log("missing linked report: " + contents[elem].link + ".md");
    }
  }
}

// check that every report is linked to
const fileNames = await readdir("data/reports");
for (const r of fileNames) {
  if (!links.has(r)) {
    console.log("report not used: " + r);
  }
}
