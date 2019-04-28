import React from "react";
import PremierLeagueService from "../service/PremierLeagueService";

const service = new PremierLeagueService();

export default class TeamsBox extends React.Component {
  getTeams() {
    return service.getTeams;
  }

  render() {
    return <h1>{this.getTeams()}</h1>
  }
};