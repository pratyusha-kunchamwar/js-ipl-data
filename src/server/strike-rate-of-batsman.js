const deliveriesData = require("../data/deliveries.json");
const matchesData = require("../data/matches.json");
const fs = require("fs");

// Find the strike rate of a batsman for each season
function strikeRateOfBatsman() {
  let batsmanInfo = {};
  let matchIdAndSeason = new Map();
  for (let match of matchesData) {
    matchIdAndSeason.set(match.id, match.season);
  }
  for (let delivery of deliveriesData) {
    let {
      match_id: deliveryId,
      batsman: batsman,
      batsman_runs: batsmanRuns,
      wide_runs: wideRuns,
      noball_runs: noBallRuns,
    } = delivery;

    let season = matchIdAndSeason.get(deliveryId);
    if (!batsmanInfo.hasOwnProperty(season)) {
      batsmanInfo[season] = {};
    }
    if (!batsmanInfo[season].hasOwnProperty(batsman)) {
      batsmanInfo[season][batsman] = {
        totalRuns: 0,
        ballsFaced: 0,
      };
    }
    batsmanInfo[season][batsman].totalRuns += Number(batsmanRuns);
    if (wideRuns === "0" && noBallRuns === "0") {
      batsmanInfo[season][batsman].ballsFaced += 1;
    }
  }
  //for StrickRate of each bats man
  let batsmanStrikeRate = {};
  for (let season in batsmanInfo) {
    batsmanStrikeRate[season] = {};
    for (let batsman in batsmanInfo[season]) {
      let runs = batsmanInfo[season][batsman].totalRuns;
      let ballsFaced = batsmanInfo[season][batsman].ballsFaced;

      if (ballsFaced > 0) {
        let strikeRate = (runs / ballsFaced) * 100;
        batsmanStrikeRate[season][batsman] = strikeRate.toFixed(2);
      }
    }
  }

  return batsmanStrikeRate;
}

let strikeRateOfBatsmanData = strikeRateOfBatsman();
// console.log(strikeRateOfBatsmanData);

//dumping code to json.
fs.writeFileSync(
  "../public/output/strikeRateOfBatsMan.json",
  JSON.stringify(strikeRateOfBatsmanData, null, 2)
);
