import React, { Component } from "react";

export class PremierLeagueTeams extends Component {
  render() {
    return (
      <div className="premierLeagueTeams">
        <h3>Premier League Teams</h3>
        <ol>
          {this.props.teams.map(team => <li key={team.toString()}>{team.name} {team.city}, {team.country}</li>)}
        </ol>
      </div>
    )
  }
};