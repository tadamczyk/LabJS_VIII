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
    deleteTeam: deleteTeam
  };

})();

// Tests...
premierLeague.addTeam(tottenham);
premierLeague.showTeams();
premierLeague.showTeam('Arsenal');
premierLeague.updateTeam('Arsenal', { name: 'Chelsea', city: 'London', country: 'England', yearOfEstablished: '1895', inCurrentSeason: true });
premierLeague.deleteTeam('Tottenham');
premierLeague.showTeams();