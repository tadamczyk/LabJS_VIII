import React, { Component } from 'react';
import Team from '../domain/Team.jsx';
import TeamsBox from './TeamsBox.jsx';
import TeamDetailsBox from './TeamDetailsBox.jsx';
import PremierLeagueService from '../service/PremierLeagueService.jsx';

export default class PremierLeague extends Component {
  constructor(props) {
    super(props);

    this.premierLeagueService = new PremierLeagueService();
    this.premierLeagueService.insert(new Team('Arsenal', 'London', 'England', 1892, true, ['Cech', 'Leno']));
    this.premierLeagueService.insert(new Team('Tottenham', 'London', 'England', 1882, true, ['Lloris', 'Vorm']));
    this.premierLeagueService.insert(new Team('Chelsea', 'London', 'England', 1905, true, ['Kepa', 'Caballero']));

    this.state = {
      teams: this.premierLeagueService.teams,
      currentTeam: 0
    };
  };

  tick() {
    this.setState({
      currentTeam: (this.state.currentTeam + 1) % this.state.teams.length
    });
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 3000);
  };

  componentWillUnmount() {
    clearInterval(this.timerId);
  };

  render() {
    return (
      <div className="premierLeague">
        <TeamsBox teams={this.state.teams} />
        <TeamDetailsBox team={this.state.teams[this.state.currentTeam]} />
      </div>
    );
  };
}