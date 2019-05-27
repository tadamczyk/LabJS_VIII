import React, { Component } from "react";
import Axios from "axios";
import AddTeamBox from "./AddTeamBox";
import Team from "../domain/Team";
import TeamsBox from "./TeamsBox";
import TeamDetailsBox from "./TeamDetailsBox";

export default class PremierLeague extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      currentTeam: 0,
      id: 0,
      name: "",
      city: "",
      country: "",
      yearOfEstablished: 0,
      inCurrentSeason: true,
      players: []
    };
  };

  tick() {
    this.setState({ currentTeam: (this.state.currentTeam + 1) % this.state.teams.length });
  };

  async fetchTeams() {
    const values = await Axios.get("http://localhost:3001/api/team")
      .then(response => response.data);

    this.setState({ teams: values });
  }

  async handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const team = new Team(this.state.id, this.state.name, this.state.city, this.state.country, this.state.yearOfEstablished, this.state.inCurrentSeason, this.state.players);
    await Axios.post("http://localhost:3001/api/team", team)
      .then(response => response.data);
    this.fetchTeams();
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 3000);

    this.fetchTeams();
  };

  componentWillUnmount() {
    clearInterval(this.timerId);
  };

  render() {
    return (
      <div className="premierLeague">
        <TeamsBox teams={this.state.teams} />
        <TeamDetailsBox team={this.state.teams[this.state.currentTeam]} />
        <AddTeamBox id={this.state.id}
          name={this.state.name}
          city={this.state.city}
          country={this.state.country}
          yearOfEstablished={this.state.yearOfEstablished}
          inCurrentSeason={this.state.inCurrentSeason}
          players={this.state.players}
          onInput={this.handleInput.bind(this)}
          onSubmit={this.handleSubmit.bind(this)}
        />
      </div>
    );
  };
}