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
    this.teams.push(team);
    return `ADDED TEAM - ${team.name}`;
  };

  showTeams() {
    return 'PREMIER LEAGUE TEAMS:\n' +
      this.teams.map(team => {
        return `${team.name} ${team.city}, ${team.country}\n`;
      }).join('');
  };

  showTeam(name) {
    const teamToDisplay = this.teams.find(team => {
      return team.name == name;
    });
    return `TEAM ${name}:` +
      `City: ${teamToDisplay.city}` +
      `Country: ${teamToDisplay.country}` +
      `Year of established: ${teamToDisplay.yearOfEstablished}` +
      `Players: ${teamToDisplay.players}`;
  };

  updateTeam(oldTeamName, newTeam) {
    let oldTeam = this.teams.find(team => {
      return team.name == oldTeamName;
    });
    const id = this.teams.indexOf(oldTeam);
    this.teams[id] = newTeam;
    return `UPDATED TEAM - ${oldTeamName}`;
  };

  deleteTeam(name) {
    let teamToDelete = this.teams.find(team => {
      return team.name == name;
    });
    const id = this.teams.indexOf(teamToDelete);
    this.teams.splice(id);
    return `DELETED TEAM - ${name}`;
  };
}

let premierLeague = new PremierLeague([arsenal]);
console.log(premierLeague.addTeam(tottenham));
console.log(premierLeague.showTeams());
console.log(premierLeague.teams);