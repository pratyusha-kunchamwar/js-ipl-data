const deliveriesData = require("../data/deliveries.json");
const matchesData = require("../data/matches.json");
const fs = require("fs");

function top10EconomicalBowlers() {
  let bowlersData = {};
  let season2015MatchIds = new Set();
  //all matches ids in 2015
  for (let match of matchesData) {
    if (match.season == 2015) {
      season2015MatchIds.add(match.id);
    }
  }
  //we get the dataOf bowler with nofBalls,nofRuns
  for (let delivery of deliveriesData) {
    const {
      match_id: matchId,
      bowler:bowler,
      total_runs: totalRuns,
      wide_runs: wideRuns,
      noball_runs: noBallRuns,
      legbye_runs: legByRuns,
    } = delivery;

    if (season2015MatchIds.has(matchId)) {
      if (!bowlersData.hasOwnProperty(bowler)) {
       bowlersData[bowler] = {};
       bowlersData[bowler].runs = 0;
       bowlersData[bowler].nofBalls = 0;
      }
      if (noBallRuns === "0" && legByRuns=== "0") {
        bowlersData[bowler].runs += Number(totalRuns);
      }
      if (wideRuns === "0" && noBallRuns === "0") {
       bowlersData[bowler].nofBalls += 1;
      }
    }
  }
//for each one creating economy rate
  let economicalBowlers = [];
  for (let bowler in bowlersData) {
    let overs = bowlersData[bowler].nofBalls / 6;
    let economyRate = Infinity;

    if (overs > 0) {
       economyRate = (bowlersData[bowler].runs / overs).toFixed(2);
    }
   economicalBowlers.push({ bowler, economyRate });
  }
//top10 bowlers Data
 economicalBowlers.sort((a, b) => a.economyRate - b.economyRate);
  let top10Bowlers = economicalBowlers.slice(0, 10);
  return top10Bowlers;
}
let top10BowlersData= top10EconomicalBowlers();


//for dumping file
fs.writeFileSync("../public/output/top10EconomicalBowlers.json",JSON.stringify(top10BowlersData, null, 2));
