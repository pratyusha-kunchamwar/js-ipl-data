// Find a player who has won the highest number of Player of the Match awards for each season
function playerWithHighestNofPlayersOfMatch(matchesData) {
  let playersEachSeasonPlayerOfMatch = matchesData.reduce(
    (playerData, match) => {
      let { season: season, player_of_match: playerOfMatch } = match;
      if (!playerData.hasOwnProperty(season)) {
        playerData[season] = {};
      }
      if (!playerData[season].hasOwnProperty(playerOfMatch)) {
        playerData[season][playerOfMatch] = 0;
      }
      playerData[season][playerOfMatch] += 1;
      return playerData;
    },
    {}
  );
  //for Each Season highestNof PlayerOf Match
  let playersSeasonInfo = playersEachSeasonPlayerOfMatch;
  let playerWithHighestAwards = Object.keys(playersSeasonInfo).map((season) => {
    let players = playersSeasonInfo[season];
    //Maximum Awards player in season
    let highestPlayer = Object.keys(players).reduce(
      (maxPlayer, currentPlayer) => {
        if (players[currentPlayer] > players[maxPlayer]) {
          maxPlayer = currentPlayer;
        }
        return maxPlayer;
      }
    );

    return {
      [season]: {
        [highestPlayer]: players[highestPlayer],
      },
    };
  });
  return playerWithHighestAwards;
}
module.exports = playerWithHighestNofPlayersOfMatch;
