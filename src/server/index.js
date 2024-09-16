const matchesData = require("../data/matches.json");
const deliveriesData = require("../data/deliveries.json");
const writeToJson = require("./output");
let matchesPerYear = require('./1.matches-per-year');
let matchesWonPerTeamPerYear = require('./2.matches-won-per-team-per-year');
let extraRunsPerTeam = require('./3.extra-runs-per-team')
let economicalBowler = require('./4.economical-bowler');
let teamWOnTossWonMatch = require('./5.team-won-toss-won-match');
let highestNofPlayerOfMatch = require('./6.highest-nof-player-of-match');
let batsmanStrikeRate = require('./7.strike-rate-of-batsman');
let playerDismissAnother = require('./8.highest-nof-times-oneplayer-dismiss-Another');
let bowlerSuperOverEconomy=require('./9.bowler-with-best-economy-superover')

//calling functions
let matchesInfo = matchesPerYear(matchesData);
let matchesWonPerTeam = matchesWonPerTeamPerYear(matchesData);
let extraRuns = extraRunsPerTeam(matchesData, deliveriesData, 2016);
let economicalBowlerData = economicalBowler(matchesData, deliveriesData, 2015);
let teamWOnTossWonMatchData = teamWOnTossWonMatch(matchesData);
let highestNofPlayerOfMatchData = highestNofPlayerOfMatch(matchesData);
let batsmanStrikeRateData = batsmanStrikeRate(matchesData, deliveriesData);
let playerDismissAnotherData = playerDismissAnother(deliveriesData);
let bowlerSuperOverEconomyData = bowlerSuperOverEconomy(deliveriesData);

//dumping data to json 
writeToJson("../public/output/1.matchesPerYear.json", matchesInfo);
writeToJson("../public/output/2.matchesWonPerTeamPerYear.json", matchesWonPerTeam);
writeToJson("../public/output/3.extraRunsPerTeam.json", extraRuns);
writeToJson("../public/output/4.economicalBowler.json", economicalBowlerData);
writeToJson("../public/output/5.teamWOnTossWonMatch.json", teamWOnTossWonMatchData);
writeToJson("../public/output/6.highestNofPlayerOfMatches.json", highestNofPlayerOfMatchData);
writeToJson("../public/output/7strikeRateOfBatsMan.json", batsmanStrikeRateData);
writeToJson("../public/output/8.highestNofTimesOnePlayerDismissAnother.json", playerDismissAnotherData);
writeToJson("../public/output/9.bowlerWithBestEconomySuperOver.json",batsmanStrikeRateData);

