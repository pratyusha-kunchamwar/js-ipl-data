const deliveriesData = require("../data/deliveries.json");
const matchesData = require("../data/matches.json");
const fs = require("fs");

// Extra runs conceded per team in the year 2016
function extraRunsPerTeamIn2016() {
  let teamsWithExtraRuns = {};
  let season2016MatchIds = new Set();
  //all matches ids in season 2016
  for (let match of matchesData) {
    if (match.season === "2016") {
      season2016MatchIds.add(match.id);
    }
  }
//  calculating each team extra Runs for 2016
  for (let delivery of deliveriesData) {
    let {
      match_id: matchId,
      bowling_team: bowlingTeam,
      extra_runs:extraRuns
      }=delivery

    if (season2016MatchIds.has(matchId)) {
      if (!teamsWithExtraRuns.hasOwnProperty(bowlingTeam)) {
        teamsWithExtraRuns[bowlingTeam] = 0;
      }
      teamsWithExtraRuns[bowlingTeam] += Number(extraRuns);
      }
  }
  return teamsWithExtraRuns;
}
let extraRunsPerTeam = extraRunsPerTeamIn2016();


//for dumping file to json
fs.writeFileSync("../public/output/extraRunsPerTeamIn2016.json",JSON.stringify(extraRunsPerTeam, null, 2));
