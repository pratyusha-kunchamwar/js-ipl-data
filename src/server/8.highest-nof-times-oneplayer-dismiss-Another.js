//Find the highest number of times one player has been dismissed by another player
function highestNofTimesOnePlayerDismissAnother(deliveriesData) {
  let playersInfo = {};
  for (let delivery of deliveriesData) {
    let dismissed = delivery.dismissal_kind;
    let bowler = delivery.bowler;
    let batsman = delivery.batsman;

    if (dismissed !== "") {
      let key = bowler + "| dismissed |" + batsman;
      if (!playersInfo.hasOwnProperty(key)) {
        playersInfo[key] = {
          count: 0,
        };
      }
      playersInfo[key].count += 1;
    }
  }
  //finding highest One
  let dismissPlayer = "";
  let count = 0;
  for (let players in playersInfo) {
    if (playersInfo[players].count > count) {
      dismissPlayer = players;
      count = playersInfo[players].count;
    }
  }
  return { dismissPlayer: dismissPlayer, count: count };
}
module.exports = highestNofTimesOnePlayerDismissAnother;
