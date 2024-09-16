// Top 10 economical bowlers in the year 2015
function economicalBowlers(matchesData, deliveriesData, targetSeason) {
  let bowlersData = {};
  let seasonMatchIds = new Set();
  //all matches ids in 2015
  for (let match of matchesData) {
    let season = Number(match.season);
    if (season === targetSeason) {
      seasonMatchIds.add(match.id);
    }
  }
  //we get the dataOf bowler with nofBalls,nofRuns
  for (let delivery of deliveriesData) {
    const {
      match_id: matchId,
      bowler: bowler,
      total_runs: totalRuns,
      wide_runs: wideRuns,
      noball_runs: noBallRuns,
      legbye_runs: legByRuns,
    } = delivery;

    if (seasonMatchIds.has(matchId)) {
      if (!bowlersData.hasOwnProperty(bowler)) {
        bowlersData[bowler] = {};
        bowlersData[bowler].runs = 0;
        bowlersData[bowler].nofBalls = 0;
      }
      if (noBallRuns === "0" && legByRuns === "0") {
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
module.exports = economicalBowlers;
