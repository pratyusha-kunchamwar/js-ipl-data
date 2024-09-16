const matchesData = require("../data/matches.json");
const fs = require("fs");

//Number of matches won per team per year in IPL.
function matchesWonPerTeamPerYear() {
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
let matchesWonEachTeamPerYear = matchesWonPerTeamPerYear();

//dump code to json
fs.writeFileSync(
  "../public/output/2.matchesWonPerTeamPerYear.json",
  JSON.stringify(matchesWonEachTeamPerYear, null, 2)
);
