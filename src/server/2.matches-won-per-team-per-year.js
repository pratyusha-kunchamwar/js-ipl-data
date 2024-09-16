//Number of matches won per team per year in IPL.
function matchesWonPerTeamPerYear(matchesData) {
  let winnersPerTeam = {};
  for (let match of matchesData) {
    let winner = match.winner;
    let season = match.season;
    if (winner === undefined || winner.trim() === "" || winner === null) {
      continue;
    }
    if (!winnersPerTeam.hasOwnProperty(winner)) {
      winnersPerTeam[winner] = {};
    }
    if (!winnersPerTeam[winner].hasOwnProperty(season)) {
      winnersPerTeam[winner][season] = 0;
    }
    winnersPerTeam[winner][season] += 1;
  }
  return winnersPerTeam;
}
module.exports = matchesWonPerTeamPerYear;
