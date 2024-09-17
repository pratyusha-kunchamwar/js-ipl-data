const fs = require("fs");
const path = require("path");

function writeJSONToFile(filePath, data) {
  const fullPath = path.join(__dirname, filePath);
  try {
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
    console.log("successfully written ");
  } catch (error) {
    console.error("error In writing");
  }
}

module.exports = writeJSONToFile;
