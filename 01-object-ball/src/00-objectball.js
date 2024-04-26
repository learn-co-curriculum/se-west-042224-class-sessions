let game = gameObject();
let players = playersObject()
console.log("🚀 ~ players:", players)
const teams = Object.values(game)
console.log("🚀 ~ teams:", teams)

function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assits: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assits: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assits: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assits: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assits: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assits: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assits: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assits: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assits: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assits: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function playersObject(){
    return {...game.home.players, ...game.away.players}
}

function playerStats(playerName){
    return players[playerName]
}

function numPointsScored(playerName) {
//   for (let gameKey in game) {
//     console.log("🚀 ~ numPointsScored ~ gameKey:", gameKey);
//     let teamObj = game[gameKey];
//     let playersObj = teamObj.players;
//     for (let player in playersObj) {
//       if (player === playerName) {
//         return playersObj[player].points;
//       }
//     }
//   }
    return playerStats(playerName).points
}

function shoeSize(playerName){
    return playerStats(playerName).shoe
}

function findByTeamName(teamName){
    return teams.find(team => team.teamName == teamName)
}

function teamColor(teamName){
    return findByTeamName(teamName).colors
}

function teamNames() {
    return teams.map(teamObj => teamObj.teamName)
}

function playerNumbers(teamName){
    const playersObj = findByTeamName(teamName).players
    console.log("🚀 ~ playerNumbers ~ playersObj:", playersObj)
    const statsArr = Object.values(playersObj)
    console.log("🚀 ~ playerNumbers ~ statsArr:", statsArr)
    return statsArr.map(statsObj => statsObj.number)
}

function bigShoeRebounds(){
    let sortedPlayers = Object.values(players)
    sortedPlayers.sort((a, b) => {
        debugger
        if (a.shoe < b.shoe) return -1;
        if (a.shoe > b.shoe) return 1;
        return 0
    })
    return sortedPlayers[0].rebounds
}

console.log(numPointsScored("Brendan Hayword"));
console.log(shoeSize("Brendan Hayword"));
console.log(shoeSize("DeSagna Diop"));
console.log(teamColor("Charlotte Hornets"))
console.log(teamNames())
console.log(playerNumbers("Charlotte Hornets"))
console.log(bigShoeRebounds())
