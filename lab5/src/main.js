// install babel - npm install --save-dev @babel/core @babel/cli @babel/preset-env

// Preparing initialize data...
class Team {
  constructor(name, city, country, yearOfEstablished, inCurrentSeason, players) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.yearOfEstablished = yearOfEstablished;
    this.inCurrentSeason = inCurrentSeason;
    this.players = players;
  };
}

class YouthTeam extends Team {
  constructor(name, city, country, yearOfEstablished, inCurrentSeason, players, ageCategory) {
    super(name, city, country, yearOfEstablished, inCurrentSeason, players);
    this.ageCategory = ageCategory;
  };
}

let arsenal = new Team('Arsenal', 'London', 'England', 1892, true, ['Cech', 'Leno']);
let tottenham = new Team('Tottenham', 'London', 'England', 1882, true, ['Lloris', 'Vorm']);
let youthArsenal = new YouthTeam('Arsenal', 'London', 'England', 1892, false, ['Bielik', 'Nelson'], 'U21');

// Class, constructor, lambda, getter, setter, let, const, string interpolation, ...
class PremierLeague {
  constructor(teams) {
    this.teams = teams;
  };

  set teams(value) {
    this._teams = value;
  };

  get teams() {
    return this._teams;
  };

  addTeam(team) {
    console.log(`ADDED TEAM - ${team.name}`);
    this.teams.push(team);
    console.log();
  };

  showTeams() {
    console.log('PREMIER LEAGUE TEAMS:');
    this.teams.forEach(team => {
      console.log(team.name, team.city, ',', team.country);
    });
    console.log();
  };

  showTeam(name) {
    console.log(`TEAM ${name}:`);
    const teamToDisplay = this.teams.find(team => {
      return team.name == name;
    });
    console.log(`Name: ${teamToDisplay.name}`);
    console.log(`City: ${teamToDisplay.city}`);
    console.log(`Country: ${teamToDisplay.country}`);
    console.log(`Year of established: ${teamToDisplay.yearOfEstablished}`);
    console.log(`Players: ${teamToDisplay.players}`);
    console.log();
  };

  updateTeam(oldTeamName, newTeam) {
    console.log(`UPDATED TEAM - ${oldTeamName}`);
    let oldTeam = this.teams.find(team => {
      return team.name == oldTeamName;
    });
    const id = this.teams.indexOf(oldTeam);
    this.teams[id] = newTeam;
    console.log();
  };

  deleteTeam(name) {
    console.log(`DELETED TEAM - ${name}`);
    let teamToDelete = this.teams.find(team => {
      return team.name == name;
    });
    const id = this.teams.indexOf(teamToDelete);
    this.teams.splice(id);
    console.log();
  };
}

let premierLeague = new PremierLeague([arsenal]);
premierLeague.addTeam(tottenham);
premierLeague.showTeams();
console.log(premierLeague.teams);