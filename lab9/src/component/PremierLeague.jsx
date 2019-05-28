import React, { Component } from "react";
import Axios from "axios";
import AddTeamBox from "./AddTeamBox";
import Team from "../domain/Team";
import TeamsBox from "./TeamsBox";
import TeamDetailsBox from "./TeamDetailsBox";
import "../index.css";

export default class PremierLeague extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      currentTeam: 0,
      name: "",
      city: "",
      country: "",
      yearOfEstablished: null,
      inCurrentSeason: true,
      players: []
    };
  };

  tick() {
    this.setState({ currentTeam: (this.state.currentTeam + 1) % this.state.teams.length });
  };

  getNextId() {
    return Math.max(...this.state.teams.map(team => team.id)) + 1;
  }

  async fetchTeams() {
    const values = await Axios.get("http://localhost:3001/api/team")
      .then(response => response.data);

    this.setState({ teams: values });
  }

  async handleInput(event) {
    event.target.name !== "inCurrentSeason"
      ? await this.setState({ [event.target.name]: event.target.value })
      : await this.setState({ inCurrentSeason: !this.state.inCurrentSeason });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const team = new Team(this.getNextId(), this.state.name, this.state.city, this.state.country, this.state.yearOfEstablished, this.state.inCurrentSeason, this.state.players);
    await Axios.post("http://localhost:3001/api/team", team)
      .then(response => response.data);
    this.fetchTeams();
    this.clearForm();
  }

  async clearForm() {
    this.setState({
      name: "",
      city: "",
      country: "",
      yearOfEstablished: null,
      inCurrentSeason: true,
      players: []
    })
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
        <AddTeamBox name={this.state.name}
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