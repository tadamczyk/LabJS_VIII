import Team from "../domain/Team.jsx";

export default class PremierLeagueService {
  constructor(teams) {
    this.teams = teams;
    this.addTeam(new Team('Arsenal', 'London', 'England', 1892, true, ['Cech', 'Leno']));
  };

  set teams(value) {
    this._teams = value;
  };

  get teams() {
    return this._teams;
  };

  showTeam = (name) => {
    return this.teams.find(team => {
      return team.name === name;
    });
  };

  addTeam = (team) => {
    this.teams.push(team);
  }
}