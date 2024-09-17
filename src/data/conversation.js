const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const results = [];
const csvFilePath = path.join(__dirname, "./inputFileName.csv");  
const jsonFilePath = path.join(__dirname, "./outputFileName.json");

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (row) => {
    results.push(row);
  })
  .on("end", () => {
    console.log("CSV file successfully processed.");

    fs.writeFile(jsonFilePath, JSON.stringify(results, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Data successfully written to data.json");
      }
    });
  });
