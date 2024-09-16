const deliveriesData = require("../../data/deliveries.json");
const matchesData = require("../../data/matches.json");
function getBowlingTeamWithExtraRuns() {
  let season2016MatchIds = new Set(
    matchesData
      .filter((match) => {
        return match.season == "2016";
      })
      .map((match) => {
        return match.id;
      })
  );
  let bowlingTeamWithExtraRuns = deliveriesData.reduce(
    (teamWithExtraRuns, delivery) => {
      let {
        match_id: matchId,
        bowling_team: bowlingTeam,
        extra_runs: extraRuns,
      } = delivery;
      if (season2016MatchIds.has(matchId)) {
        if (!teamWithExtraRuns.hasOwnProperty(bowlingTeam)) {
          teamWithExtraRuns[bowlingTeam] = 0;
        }
        teamWithExtraRuns[bowlingTeam] += Number(extraRuns);
      }
      return teamWithExtraRuns;
    },
    {}
  );
  return bowlingTeamWithExtraRuns;
}
console.log(getBowlingTeamWithExtraRuns());
