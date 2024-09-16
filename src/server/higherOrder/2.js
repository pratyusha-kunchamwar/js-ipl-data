const matchesData = require("../../data/matches.json");

function getMatchesWonPerTeam() {
  let matchesWonPerTeamPerYear = matchesData.reduce(
    (matchesPerTeam, matches) => {
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
    },
    {}
  );
  return matchesWonPerTeamPerYear;
}
console.log(getMatchesWonPerTeam());
