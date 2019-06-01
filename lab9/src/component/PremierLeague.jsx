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
      name: "",
      city: "",
      country: "",
      yearOfEstablished: null,
      inCurrentSeason: true,
      players: [],
      currentTeam: null
    };
  };

  async fetchTeams() {
    const values = await Axios.get("http://localhost:3001/api/team")
      .then(response => response.data);

    this.setState({ teams: values });
  }

  getNextId() {
    return Math.max(...this.state.teams.map(team => team.id)) + 1;
  }

  handleSelectionChange(value) {
    this.setState({ currentTeam: value })
  }

  handleInput(event) {
    event.target.name !== "inCurrentSeason"
      ? this.setState({ [event.target.name]: event.target.value })
      : this.setState({ inCurrentSeason: !this.state.inCurrentSeason });
  }

  async handleSave(event) {
    event.preventDefault();
    const team = new Team(this.getNextId(), this.state.name, this.state.city, this.state.country, this.state.yearOfEstablished, this.state.inCurrentSeason, this.state.players);
    await Axios.post("http://localhost:3001/api/team", team)
      .then(response => response.data);
    this.fetchTeams();
    this.clearForm();
  }

  clearForm() {
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
    this.fetchTeams();
  };

  render() {
    return (
      <div className="premierLeague">
        <TeamsBox teams={this.state.teams} selectionHandler={this.handleSelectionChange.bind(this)} />
        <TeamDetailsBox team={this.state.teams[this.state.currentTeam]} />
        <AddTeamBox name={this.state.name}
          city={this.state.city}
          country={this.state.country}
          yearOfEstablished={this.state.yearOfEstablished}
          inCurrentSeason={this.state.inCurrentSeason}
          players={this.state.players}
          onInput={this.handleInput.bind(this)}
          onSubmit={this.handleSave.bind(this)}
        />
      </div>
    );
  };
}