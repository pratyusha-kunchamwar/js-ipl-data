//Find the highest number of times one player has been dismissed by another player
function highestNofTimesOnePlayerDismissAnother(deliveriesData) {
  //finding the player with dismiss count
  let playerDismissedData = deliveriesData.reduce((player, delivery) => {
    let {
      batsman: batsman,
      bowler: bowler,
      dismissal_kind: dismissed,
    } = delivery;

    if (dismissed !== "") {
      let key = `${bowler} dismissed ${batsman}`;
      if (!player.hasOwnProperty(key)) {
        player[key] = {
          count: 0,
        };
      }
      player[key].count += 1;
    }
    return player;
  }, {});
  //finding highest dismiss player
  let player = "";
  let maxCount = 0;
  Object.keys(playerDismissedData).forEach((key) => {
    let count = playerDismissedData[key].count;
    if (count > maxCount) {
      player = key;
      maxCount = count;
    }
  });
  return { [player]: maxCount };
}
module.exports = highestNofTimesOnePlayerDismissAnother;
