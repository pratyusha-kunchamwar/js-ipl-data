const matchesData = require("../../data/matches.json");
function getMatchesPerTeam() {
  let matchesPerYear = matchesData.reduce((nofMatches, match) => {
    let season = match.season;
    if (!nofMatches.hasOwnProperty(season)) {
      nofMatches[season] = 0;
    }
    nofMatches[season] += 1;
    return nofMatches;
  }, {});
  return matchesPerYear;
}
let matchesPerYear = getMatchesPerTeam();
console.log(matchesPerYear);
