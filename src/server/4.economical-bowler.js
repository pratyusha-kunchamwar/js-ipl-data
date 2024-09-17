// Top 10 economical bowlers in the year 2015
function economicalBowlers(matchesData, deliveriesData, targetSeason) {
  //Ids of season 2015
  let seasonMatchIds = new Set(
    matchesData
      .filter((match) => {
        return Number(match.season) === targetSeason;
      })
      .map((match) => {
        return match.id;
      })
  );

  //BowlersData totalRuns And nofBalls
 let bowlersTotalRunsAndBalls = deliveriesData.reduce(
    (bowlerData, delivery) => {
      const {
        match_id: id,
        bowler: bowler,
        total_runs: totalRuns,
        wide_runs: wideRuns,
        noball_runs: noBallRuns,
        legbye_runs: legByRuns,
      } = delivery;

      if (seasonMatchIds.has(id)) {
        if (!bowlerData.hasOwnProperty(bowler)) {
          bowlerData[bowler] = {
            totalRuns: 0,
            nofBalls: 0,
          };
        }
        if (noBallRuns === "0" && legByRuns === "0") {
          bowlerData[bowler].totalRuns += Number(totalRuns);
        }
        if (noBallRuns === "0" && wideRuns === "0") {
          bowlerData[bowler].nofBalls += 1;
        }
      }
      return bowlerData;
    },
    {}
  );
  // console.log(bowlersTotalRunsAndBalls);

  //Bowlers economyRate
  let bowlerWithEconomyRate = Object.keys(bowlersTotalRunsAndBalls).map(
    (bowler) => {
      let totalBalls = bowlersTotalRunsAndBalls[bowler].nofBalls;
      let totalRuns = bowlersTotalRunsAndBalls[bowler].totalRuns;

      let over = totalBalls / 6;
      let economyRate = Infinity;
      if (over > 0) {
        economyRate = (totalRuns / over).toFixed(2);
      }
      return { bowler, economyRate };
    }
  );
  //By doing sort slice we are extracting top 10 economical bowlers data
  let top10EconomicalBowlers = bowlerWithEconomyRate
    .sort((a, b) => a.economyRate - b.economyRate)
    .slice(0, 10);
  return top10EconomicalBowlers;
}
module.exports = economicalBowlers;
