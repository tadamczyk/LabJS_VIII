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
    console.log('ADDED TEAM - ' + team.name);
    teams.push(team);
    console.log();
  };

  var showTeams = function () {
    console.log('PREMIER LEAGUE TEAMS:');
    teams.forEach(function (team) {
      console.log(team.name, team.city, ',', team.country);
    });
    console.log();
  };

  var showTeam = function (name) {
    console.log('TEAM ' + name + ':');
    var teamToDisplay = teams.find(function (team) {
      return team.name == name;
    });
    console.log('Name: ' + teamToDisplay.name);
    console.log('City: ' + teamToDisplay.city);
    console.log('Country: ' + teamToDisplay.country);
    console.log('Year of established: ' + teamToDisplay.yearOfEstablished);
    console.log('Players: ' + teamToDisplay.players);
    console.log();
  };

  var updateTeam = function (oldTeamName, newTeam) {
    console.log('UPDATED TEAM - ' + oldTeamName);
    var oldTeam = teams.find(function (team) {
      return team.name == oldTeamName;
    });
    var id = teams.indexOf(oldTeam);
    teams[id] = newTeam;
    console.log();
  };

  var deleteTeam = function (name) {
    console.log('DELETED TEAM - ' + name);
    var teamToDelete = teams.find(function (team) {
      return team.name == name;
    });
    var id = teams.indexOf(teamToDelete);
    teams.splice(id);
    console.log();
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
      console.log('SQUAD SIZE IN ' + teamName + ': ' + team.players.length);
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
  console.log('All players in team ' + this.name + ':');
  console.log(this.players);
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
premierLeague.addTeam(tottenham);
premierLeague.showTeams();
premierLeague.showTeam('Arsenal');
premierLeague.squadSize('Arsenal');
premierLeague.updateTeam('Arsenal', { name: 'Chelsea', city: 'London', country: 'England', yearOfEstablished: '1895', inCurrentSeason: true });
premierLeague.deleteTeam('Tottenham');
premierLeague.showTeams();

console.log('Display info about new youth team:');
console.log(arsenalYouthTeam.getFullName());
console.log(arsenalYouthTeam.getCountry());
arsenalYouthTeam.getPlayers();
console.log(arsenalYouthTeam.getAgeCategory());