const matchesData = require("../data/matches.json");
const fs = require("fs");

//Number of matches played per year for all the years in IPL.
function getMatchesPerYear() {
  let matches = {};
  for (let match of matchesData) {
    let season = match.season;
    //if property not exist create property
    if (!matches.hasOwnProperty(season)) {
      matches[season] = 0;
    }
    matches[season] += 1;
  }
  return matches;
}
let matchesPerYear = getMatchesPerYear();
console.log(matchesPerYear);

// dump to json file
fs.writeFileSync("../public/output/1.matchesPerYear.json",JSON.stringify(matchesPerYear, null, 2));
