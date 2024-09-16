const deliveriesData = require("../../data/deliveries.json");
const matchesData = require("../../data/matches.json");

function economicalBowler() {
  //Ids of season 2015
  let season2015MatchIds = new Set(
    matchesData
      .filter((match) => {
        return match.season == "2015";
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

      if (season2015MatchIds.has(id)) {
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
  let top10EconomicalBowlers = bowlerWithEconomyRate
    .sort((a, b) => a.economyRate - b.economyRate)
    .slice(0, 10);
  return top10EconomicalBowlers;
}
console.log(economicalBowler());
