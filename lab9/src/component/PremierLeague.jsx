import React, { Component } from "react";
import TeamsBox from "./TeamsBox";
import TeamDetailsBox from "./TeamDetailsBox";
import PremierLeagueService from "../service/PremierLeagueService";
import { fakeTeams } from "../fake/FakePremierLeague";

export default class PremierLeague extends Component {
  constructor(props) {
    super(props);

    this.premierLeagueService = new PremierLeagueService();

    this.state = {
      teams: fakeTeams,
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