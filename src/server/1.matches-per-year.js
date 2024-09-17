//Number of matches played per year for all the years in IPL.
function getMatchesPerYear(matchesData) {
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
module.exports = getMatchesPerYear;
