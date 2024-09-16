const deliveriesData = require("../data/deliveries.json");
const fs = require("fs");

// Find the bowler with the best economy in super overs
function bowlerWithBestEconomySuPerOver() {
  let bowlersData = {};
  for (let delivery of deliveriesData) {
    let {
      is_super_over: superOver,
      bowler: bowler,
      total_runs: totalRuns,
      wide_runs: wideRuns,
      noball_runs: noBallRuns,
      legbye_runs: legByRuns,
    } = delivery;

    if (Number(superOver) > 0) {
      if (!bowlersData.hasOwnProperty(bowler)) {
        bowlersData[bowler] = {
          totalRuns: 0,
          nofBalls: 0,
        };
      }
      if (legByRuns==="0" && noBallRuns === "0") {
      bowlersData[bowler].totalRuns += Number(totalRuns);
    }
      if (wideRuns === "0" && noBallRuns === "0") {
        bowlersData[bowler].nofBalls += 1;
      }
    }
  }
  //Best Economy Bowler
  let bestEconomyBowlers = {
    bowler: null,
    bestEconomyRate: Number.MAX_SAFE_INTEGER,
  };
  for (let bowler in bowlersData) {
    let overs = bowlersData[bowler].nofBalls / 6;
    if (overs > 0) {
      let economyRate = bowlersData[bowler].totalRuns / overs;
      if (bestEconomyBowlers.bestEconomyRate > economyRate) {
        bestEconomyBowlers.bowler = bowler;
        bestEconomyBowlers.bestEconomyRate = economyRate;
      }
    }
  }

  return bestEconomyBowlers;
}
let bestBowlerData = bowlerWithBestEconomySuPerOver();
// console.log(bestBowlerData);

//dumpCode to Json
fs.writeFileSync(
  "../public/output/bowlerWithBestEconomySuperOver.json",
  JSON.stringify(bestBowlerData, null, 2)
);
