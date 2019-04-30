import React, { Component } from 'react';
import { PremierLeagueTeams } from './PremierLeagueTeams.jsx';
import { TeamDetail } from './TeamDetail.jsx';
import { PremierLeagueService } from '../service/PremierLeagueService.jsx';

export default class PremierLeague extends Component {
  constructor(props) {
    super(props);

    this.premierLeagueService = new PremierLeagueService();
    this.state = {
      teams: this.premierLeagueService.teams,
      activeTeam: 0
    }
  }


  tick() {
    this.setState({
      activeTeam: (this.state.activeTeam + 1) % this.state.teams.length
    })
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="premierLeague">
        <h2>{this.title}</h2>
        <PremierLeagueTeams teams={this.state.teams} />
        <TeamDetail team={this.state.teams[this.state.activeTeam]} />
      </div>
    )
  }
}