import fs from "node:fs";
import { parse } from "csv-parse";;

const tasksPath = new URL("../../tasks.csv", import.meta.url);

const stream = fs.createReadStream(tasksPath);

const csvParse = parse({
  fromLine: 2, // skip the header line
  delimiter: ",",
  skipEmptyLines: true,
});

async function readAndPipeCSV() {
  const linesParse = stream.pipe(csvParse);

  for await (const line of linesParse) {
    const [title, description] = line;

    await fetch("http://localhost:3333/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
  }
}

readAndPipeCSV();
