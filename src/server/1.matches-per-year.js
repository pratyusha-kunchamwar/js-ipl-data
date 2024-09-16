//Number of matches played per year for all the years in IPL.
function getMatchesPerYear(matchesData) {
  let matches = {};
  for (let match of matchesData) {
    let season = match.season;
    //if property not exist create property
    if (!matches.hasOwnProperty(season)) {
      matches[season] = 0;
    }
    matches[season] += 1;
  }
  return matches;
}
module.exports = getMatchesPerYear;
