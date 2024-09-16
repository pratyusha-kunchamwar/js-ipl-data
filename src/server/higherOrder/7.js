const deliveriesData = require("../../data/deliveries.json");
const matchesData = require("../../data/matches.json");

// Find the strike rate of a batsman for each season
function strikeRateOfBatsman() {
  let matchIdAndSeasons = new Map(
    matchesData.map((match) => {
      return [match.id, match.season];
    })
  );
  //batsmanInfo
  let batsmanInfo = deliveriesData.reduce((batsmanStats, delivery) => {
    let {
      match_id: deliveryId,
      batsman: batsman,
      batsman_runs: batsmanRuns,
      wide_runs: wideRuns,
      noball_runs: noBallRuns,
    } = delivery;
    let season = matchIdAndSeasons.get(deliveryId);
    if (!batsmanStats.hasOwnProperty(season)) {
      batsmanStats[season] = {};
    }
    if (!batsmanStats[season].hasOwnProperty(batsman)) {
      batsmanStats[season][batsman] = {
        totalRuns: 0,
        ballsFaced: 0,
      };
    }
    batsmanStats[season][batsman].totalRuns += Number(batsmanRuns);
    if (wideRuns === "0" && noBallRuns === "0") {
      batsmanStats[season][batsman].ballsFaced += 1;
    }
    return batsmanStats;
  }, {});
  // console.log(batsmanInfo);

  //strikeRate
  // let strikeRate = Object.keys(batsmanInfo).map((season) => {
  //   Object.keys(season).forEach((player) => {
  //     let overs = batsmanInfo[season][player].totalRuns / 6;
  //     if (overs > 0) {
      
        
      
  //   }
  // });

  console.log(batsmanInfo);
}

strikeRateOfBatsman();
