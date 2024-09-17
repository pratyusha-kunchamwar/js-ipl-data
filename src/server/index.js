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
const outputDir = "../public/output/";
writeToJson(`${outputDir}1.matchesPerYear.json`, matchesInfo);
writeToJson(`${outputDir}2.matchesWonPerTeamPerYear.json`, matchesWonPerTeam);
writeToJson(`${outputDir}3.extraRunsPerTeam.json`, extraRuns);
writeToJson(`${outputDir}4.economicalBowler.json`, economicalBowlerData);
writeToJson(`${outputDir}5.teamWOnTossWonMatch.json`, teamWOnTossWonMatchData);
writeToJson(`${outputDir}6.highestNofPlayerOfMatches.json`, highestNofPlayerOfMatchData);
writeToJson(`${outputDir}7.strikeRateOfBatsMan.json`, batsmanStrikeRateData);
writeToJson(`${outputDir}8.highestNofTimesOnePlayerDismissAnother.json`, playerDismissAnotherData);
writeToJson(`${outputDir}9.bowlerWithBestEconomySuperOver.json`,bowlerSuperOverEconomyData);