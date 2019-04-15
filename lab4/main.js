// Preparing initialize data...
var arsenal = {
  name: 'Arsenal',
  city: 'London',
  country: 'England',
  yearOfEstablished: 1892,
  inCurrentSeason: true,
  players: ['Cech', 'Leno']
};

var tottenham = {
  name: 'Tottenham',
  city: 'London',
  country: 'England',
  yearOfEstablished: 1882,
  inCurrentSeason: true,
  players: ['Lloris', 'Vorm']
};

// Module pattern...
var premierLeague = (function () {
  var teams = [arsenal];

  var addTeam = function (team) {
    teams.push(team);
    return 'ADDED TEAM - ' + team.name;
  };

  var showTeams = function () {
    return 'PREMIER LEAGUE TEAMS:\n' +
      teams.map(function (team) {
        return team.name + ' ' + team.city + ', ' + team.country + '\n';
      }).join('');
  };

  var showTeam = function (name) {
    var teamToDisplay = teams.find(function (team) {
      return team.name == name;
    });
    return 'TEAM - ' + teamToDisplay.name + ' ' + teamToDisplay.city + ', ' + teamToDisplay.country + '\n' + teamToDisplay.yearOfEstablished;
  };

  var updateTeam = function (oldTeamName, newTeam) {
    var oldTeam = teams.find(function (team) {
      return team.name == oldTeamName;
    });
    var id = teams.indexOf(oldTeam);
    teams[id] = newTeam;
    return 'UPDATED TEAM - ' + oldTeamName;
  };

  var deleteTeam = function (name) {
    var teamToDelete = teams.find(function (team) {
      return team.name == name;
    });
    var id = teams.indexOf(teamToDelete);
    teams.splice(id);
    return 'DELETED TEAM - ' + name;
  };

  return {
    addTeam: addTeam,
    showTeams: showTeams,
    showTeam: showTeam,
    updateTeam: updateTeam,
    deleteTeam: deleteTeam,
    squadSize: function (teamName) {
      var team = teams.find(function (team) {
        return team.name == teamName;
      });
      return 'SQUAD SIZE IN ' + teamName + ': ' + team.players.length;
    }
  };

})();

// Inheritance...
function Team(name, city, country, yearOfEstablished, inCurrentSeason, players) {
  this.name = name;
  this.city = city;
  this.country = country;
  this.yearOfEstablished = yearOfEstablished;
  this.inCurrentSeason = inCurrentSeason;
  this.players = players;
};

function YouthTeam(name, city, country, yearOfEstablished, inCurrentSeason, players, ageCategory) {
  Team.call(this, name, city, country, yearOfEstablished, inCurrentSeason, players);

  this.ageCategory = ageCategory;
};

// Prototype and constructor...

Team.prototype = {
  getFullName: function () {
    return this.name + ' ' + this.city;
  },
  getCountry: function () {
    return this.country;
  }
};

Team.prototype.getPlayers = function () {
  return 'All players in team ' + this.name + ':\n' + this.players;
};

Team.prototype.setInCurrentSeason = function (inCurrentSeason) {
  this.inCurrentSeason = inCurrentSeason;
};

YouthTeam.prototype = Object.create(Team.prototype);
YouthTeam.prototype.constructor = YouthTeam;

YouthTeam.prototype.getAgeCategory = function () {
  return this.ageCategory;
};

YouthTeam.prototype.setAgeCategory = function (ageCategory) {
  this.ageCategory = ageCategory;
};

var arsenalYouthTeam = new YouthTeam(
  'Arsenal',
  'London',
  'England',
  2000,
  false,
  ["Bielik", "Nelson"],
  "U21"
);

// Tests...
console.log(premierLeague.addTeam(tottenham));
console.log(premierLeague.showTeams());
console.log(premierLeague.showTeam('Arsenal'));
console.log(premierLeague.squadSize('Arsenal'));
console.log(premierLeague.updateTeam('Arsenal', { name: 'Chelsea', city: 'London', country: 'England', yearOfEstablished: '1895', inCurrentSeason: true }));
console.log(premierLeague.deleteTeam('Tottenham'));
console.log(premierLeague.showTeams());

console.log('Display info about new youth team:');
console.log(arsenalYouthTeam.getFullName());
console.log(arsenalYouthTeam.getCountry());
arsenalYouthTeam.getPlayers();
console.log(arsenalYouthTeam.getAgeCategory());