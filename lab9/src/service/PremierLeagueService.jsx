export default class PremierLeagueService {
  constructor() {
    this.teams = [];
  };

  set teams(value) {
    this._teams = value;
  };

  get teams() {
    return this._teams;
  };

  getById(id) {
    return this._teams.find(team => team.id === id);
  };

  getByName(name) {
    return this._teams.find(team => team.name === name);
  };

  insert(team) {
    this._teams.push(team);
  };

  update(id, team) {
    let teamId = this._teams.findIndex(team => team.id === id);
    this._teams[teamId] = team;
  };

  delete(id) {
    let teamId = this._teams.findIndex(team => team.id === id);
    this._teams.splice(teamId, 1);
  };
}