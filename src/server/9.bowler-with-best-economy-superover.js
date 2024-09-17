// Find the bowler with the best economy in super overs
function bowlerWithBestEconomySuPerOver(deliveriesData) {
  let bowlerSuperOverEconomy = deliveriesData.reduce((bowlerData, delivery) => {
    let {
      is_super_over: superOver,
      noball_runs: noBallRuns,
      wide_runs: wideRuns,
      legbye_runs: legByRuns,
      total_runs: totalRuns,
      bowler: bowler,
    } = delivery;
    if (Number(superOver) > 0) {
      if (!bowlerData.hasOwnProperty(bowler)) {
        bowlerData[bowler] = {
          runs: 0,
          totalBalls: 0,
        };
      }
      if (legByRuns === "0" && noBallRuns === "0") {
        bowlerData[bowler].runs += Number(totalRuns);
      }
      if (wideRuns === "0" && noBallRuns === "0") {
        bowlerData[bowler].totalBalls += 1;
      }
    }
    return bowlerData;
  }, {});

  //calculate EconomyRate
  let bowlerData = bowlerSuperOverEconomy;
  let bestSuperOverBowler = Object.keys(bowlerData).reduce(
    (bestBowler, bowler) => {
      let economyRate = Infinity;
      let overs = bowlerData[bowler].totalBalls / 6;
      let totalRuns = bowlerData[bowler].runs;

      if (overs > 0) {
        economyRate = totalRuns / overs;
        if (bestBowler.bestEconomy > economyRate) {
          bestBowler.bowler = bowler;
          bestBowler.bestEconomy = economyRate;
        }
      }
      return bestBowler;
    },
    { bowler: null, bestEconomy: Number.MAX_SAFE_INTEGER }
  );
  return bestSuperOverBowler;
}
module.exports = bowlerWithBestEconomySuPerOver;
