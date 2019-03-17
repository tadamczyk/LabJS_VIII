// Preparing initialize data...
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

// Adding created teams to new league...
var premierLeague = [arsenal, tottenham];
console.log('List of teams from Premier League:');
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

var addTeam = function (team) {
  console.log('ADDED TEAM - ' + team.name);
  premierLeague.push(team);
};

var chelsea = createTeam('Chelsea', 'London', 'England', 1905, true, ['Kepa', 'Caballero']);
addTeam(chelsea);
console.log('Currently list of teams from Premier League:');
console.log(premierLeague);
console.log();

// READ
var showTeams = function () {
  console.log('PREMIER LEAGUE TEAMS:');
  premierLeague.forEach(function (team) {
    console.log(team.name, team.city, ',', team.country);
  });
  console.log();
};

showTeams();

var showTeam = function (index) {
  console.log('TEAM ' + index + ':');
  console.log('Name: ' + premierLeague[index].name);
  console.log('City: ' + premierLeague[index].city);
  console.log('Country: ' + premierLeague[index].country);
  console.log('Year of established: ' + premierLeague[index].yearOfEstablished);
  console.log('Players: ' + premierLeague[index].players);
  console.log();
};

showTeam(1);

// UPDATE
var updateTeam = function (index, name, city, country, yearOfEstablished, isExists, players) {
  var team = premierLeague[index];
  console.log('UPDATED TEAM - ' + team.name);
  if (name) team.name = name;
  if (city) team.city = city;
  if (country) team.country = country;
  if (yearOfEstablished) team.yearOfEstablished = yearOfEstablished;
  if (isExists) team.isExists = isExists;
  if (players) team.players = players;
};

updateTeam(0, 'Fulham');

showTeam(0);

// DELETE
var deleteTeam = function (index) {
  console.log('DELETED TEAM - ' + premierLeague[index].name);
  premierLeague.splice(index);
};

deleteTeam(1);
showTeams();

// FIND
var findByName = function (name) {
  console.log('All teams with name ' + name + ':');
  return premierLeague.filter(function (team) {
    return team.name == name;
  });
};
console.log(findByName('Fulham'));
console.log();

var findByCity = function (city) {
  console.log('All teams from ' + city + ':');
  return premierLeague.filter(function (team) {
    return team.city == city;
  });
};

console.log(findByCity('London'));
console.log();

var findByCountry = function (country) {
  console.log('All teams from ' + country + ':');
  return premierLeague.filter(function (team) {
    return team.country == country;
  });
};

console.log(findByCity('England'));
console.log();

var findByYearOfEstablished = function (yearOfEstablished) {
  console.log('All teams established in ' + yearOfEstablished + ':');
  return premierLeague.filter(function (team) {
    return team.yearOfEstablished == yearOfEstablished;
  });
};

console.log(findByYearOfEstablished(1892));
console.log();

var filterByYearOfEstablished = function (yearOfEstablished, isExists) {
  console.log('All exist teams which was establish in or after ' + yearOfEstablished + ':');
  return premierLeague.find(function (team) {
    return team.yearOfEstablished >= yearOfEstablished && team.isExists == true;
  });
};

console.log(filterByYearOfEstablished(1880));
console.log();