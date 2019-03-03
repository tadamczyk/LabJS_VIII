// Prepare init data
var arsenal = {
  name: 'Arsenal',
  city: 'London',
  country: 'England',
  yearOfEstablished: 1892,
  isExists: true,
  players: ['Cech', 'Leno']
};

var tottenham = {
  name: 'Tottenham',
  city: 'London',
  country: 'England',
  yearOfEstablished: 1882,
  isExists: true,
  players: ['Lloris', 'Vorm']
};

// Add created teams to league
var premierLeague = [arsenal, tottenham];
console.log('Init list of teams from Premier League:');
console.log(premierLeague);
console.log();

// CREATE
var createTeam = function (name, city, country, yearOfEstablished, isExists, players) {
  console.log('CREATED TEAM - ' + name);
  return {
    name: name,
    city: city,
    country: country,
    yearOfEstablished: yearOfEstablished,
    isExists: isExists,
    players: players
  };
};

var addTeam = function (item) {
  console.log('ADDED TEAM - ' + item.name);
  premierLeague.push(item);
};

var chelsea = createTeam('Chelsea', 'London', 'England', 1905, true, ['Kepa', 'Caballero']);
addTeam(chelsea);
console.log('Currently list of teams from Premier League:');
console.log(premierLeague);
console.log();

// READ
var showTeams = function () {
  console.log('PREMIER LEAGUE TEAMS:');
  premierLeague.forEach(function (item) {
    console.log(item.name, item.city, ',', item.country);
  });
  console.log();
};

showTeams();

var showTeam = function (id) {
  console.log('TEAM ' + id + ':');
  console.log('Name: ' + premierLeague[id].name);
  console.log('City: ' + premierLeague[id].city);
  console.log('Country: ' + premierLeague[id].country);
  console.log('Year of established: ' + premierLeague[id].yearOfEstablished);
  console.log('Players: ' + premierLeague[id].players);
  console.log();
};

showTeam(1);

// UPDATE
var updateTeam = function (id, name, city, country, yearOfEstablished, isExists, players) {
  var team = premierLeague[id];
  if (typeof (name) !== "undefined") team.name = name;
  if (typeof (city) !== "undefined") team.city = city;
  if (typeof (country) !== "undefined") team.country = country;
  if (typeof (yearOfEstablished) !== "undefined") team.yearOfEstablished = yearOfEstablished;
  if (typeof (isExists) !== "undefined") team.isExists = isExists;
  if (typeof (players) !== "undefined") team.players = players;
};

updateTeam(0, 'Fulham');

showTeam(0);

// DELETE
var deleteTeam = function (id) {
  premierLeague.splice(id, 1);
};

deleteTeam(1);
showTeams();

// FIND
var findByName = function (name) {
  console.log('All teams with name ' + name + ':');
  return premierLeague.filter(team => team.name == name);
};

console.log(findByName('Chelsea'));
console.log();

var findByCity = function (city) {
  console.log('All teams from ' + city + ':');
  return premierLeague.filter(team => team.city == city);
};

console.log(findByCity('London'));
console.log(findByCity('Madrid'));
console.log();