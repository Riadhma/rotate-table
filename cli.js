const { getFinalTable } = require("./rotate-table")
const csvInput = require("csv-stream");
const fs = require("fs"); 
const process = require("process");
const csvOutput = require("fast-csv");

const inputFileName = process.argv[2];
const stream = csvInput.createStream({ enclosedChar: '"' });
const streamOut = csvOutput.format({ headers: true });

const inputFileExt = inputFileName ? inputFileName.split('.')[1] : null;
if (!inputFileName || inputFileExt != "csv") {
  console.error("Please enter a csv file");
  process.exit();
}
streamOut.pipe(process.stdout).on("end", () => process.exit());

fs.createReadStream(inputFileName)
  .pipe(stream)
  .on("data", (data) => {
    if (!data.id || !data.json) {
      console.error("Missing data");
      process.exit();
    }

    const tableArray = JSON.parse(data.json);
    const outputResult = getFinalTable(tableArray);
      // console.log(outputResult)
    const dataToOutput = {
      id: data.id,
      json: JSON.stringify(outputResult),
      is_valid: !!outputResult.length,
    };

    streamOut.write(dataToOutput);
  })
  .on("end", () => {
    streamOut.end();
  });
