// Find the number of times each team won the toss and also won the match
function teamWonTossWonMatch(matchesData) {
  let teamWOnTossWonMatchData = matchesData.reduce((teamsWon, match) => {
    let { winner: winner, toss_winner: tossWinner } = match;
    if (winner === tossWinner) {
      if (!teamsWon.hasOwnProperty(winner)) {
        teamsWon[winner] = 0;
      }
      teamsWon[winner] += 1;
    }
    return teamsWon;
  }, {});
  return teamWOnTossWonMatchData;
}
module.exports = teamWonTossWonMatch;
