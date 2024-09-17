// Extra runs conceded per team in the year 2016
function extraRunsPerTeam(matchesData, deliveriesData, targetSeason) {
  //getting the season ids
  let seasonMatchIds = new Set(
    matchesData
      .filter((match) => {
        return Number(match.season) === targetSeason;
      })
      .map((match) => {
        return match.id;
      })
  );

  //calculating the bowling team extra runs
  let bowlingTeamWithExtraRuns = deliveriesData.reduce(
    (teamWithExtraRuns, delivery) => {
      let {
        match_id: matchId,
        bowling_team: bowlingTeam,
        extra_runs: extraRuns,
      } = delivery;

      if (seasonMatchIds.has(matchId)) {
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

module.exports = extraRunsPerTeam;
