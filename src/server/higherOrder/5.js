const matchesData = require("../../data/matches.json");

// Find the number of times each team won the toss and also won the match
function getTeamWonTossWonMatch() {
  let teamWOnTossWonMatch = matchesData.reduce((teamsWon, match) => {
    let { winner: winner, toss_winner: tossWinner } = match;
    if (winner === tossWinner) {
      if (!teamsWon.hasOwnProperty(winner)) {
        teamsWon[winner] = 0;
      }
      teamsWon[winner] += 1;
    }
    return teamsWon;
  }, {});
  return teamWOnTossWonMatch;
}
console.log(getTeamWonTossWonMatch());
