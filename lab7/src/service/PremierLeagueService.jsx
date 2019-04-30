import Team from "../domain/Team.jsx";

export class PremierLeagueService {
  constructor() {
    this.teams = [];
    this.addTeam(new Team('Arsenal', 'London', 'England', 1892, true, ['Cech', 'Leno']));
    this.addTeam(new Team('Chelsea', 'London', 'England', 1905, true, ['Kepa', 'Caballero']));
    this.addTeam(new Team('Tottenham', 'London', 'England', 1882, true, ['Lloris', 'Vorm']));
  };

  set teams(value) {
    this._teams = value;
  };

  get teams() {
    return this._teams;
  };

  showTeam = (name) => {
    return this._teams.find(team => {
      return team.name === name;
    });
  };

  addTeam = (team) => {
    this._teams.push(team);
  }
}