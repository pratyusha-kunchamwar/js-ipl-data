// Extra runs conceded per team in the year 2016
function extraRunsPerTeam(matchesData, deliveriesData, targetSeason) {
  let teamsWithExtraRuns = {};
  let seasonMatchIds = new Set();
  //all matches ids in season 2016
  for (let match of matchesData) {
    let season = Number(match.season);
    if (season === targetSeason) {
      seasonMatchIds.add(match.id);
    }
  }
  //  calculating each team extra Runs for 2016
  for (let delivery of deliveriesData) {
    let {
      match_id: matchId,
      bowling_team: bowlingTeam,
      extra_runs: extraRuns,
    } = delivery;

    if (seasonMatchIds.has(matchId)) {
      if (!teamsWithExtraRuns.hasOwnProperty(bowlingTeam)) {
        teamsWithExtraRuns[bowlingTeam] = 0;
      }
      teamsWithExtraRuns[bowlingTeam] += Number(extraRuns);
    }
  }
  return teamsWithExtraRuns;
}
module.exports = extraRunsPerTeam;
