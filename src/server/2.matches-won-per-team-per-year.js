//Number of matches won per team per year in IPL.
function matchesWonPerTeamPerYear(matchesData) {
  let matchesWonPerTeamData = matchesData.reduce((matchesPerTeam, matches) => {
    let winner = matches.winner;
    let season = matches.season;

    if (!winner || winner.trim() === "") {
      return matchesPerTeam;
    }
    if (!matchesPerTeam[winner]) {
      matchesPerTeam[winner] = {};
    }
    if (!matchesPerTeam[winner].hasOwnProperty(season)) {
      matchesPerTeam[winner][season] = 0;
    }
    matchesPerTeam[winner][season] += 1;

    return matchesPerTeam;
  }, {});
  return matchesWonPerTeamData;
}
module.exports = matchesWonPerTeamPerYear;
