// Find the strike rate of a batsman for each season
function strikeRateOfBatsman(matchesData, deliveriesData) {
  //taking match ids ,season in Map
  let matchIdAndSeasons = new Map(
    matchesData.map((match) => {
      return [match.id, match.season];
    })
  );
  //calculate batsmanInfo totalRuns and balls
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

  //strikeRate Updating into the object
  Object.keys(batsmanInfo).forEach((season) => {
    //to iterate each season
    let batsmanSeason = batsmanInfo[season];
    Object.keys(batsmanSeason).forEach((player) => {
      let runs = batsmanSeason[player].totalRuns;
      let ballsFaced = batsmanSeason[player].ballsFaced;
      let strickRate = Infinity;
      if (ballsFaced > 0) {
        strickRate = (runs / ballsFaced) * 100;
      }
      batsmanSeason[player].strickRate = strickRate;
    });
  });
  return batsmanInfo;
}
module.exports = strikeRateOfBatsman;
