import React, { Component } from "react";

export default class TeamsBox extends Component {
  render() {
    return (
      <div className="teams">
        <h3>Premier League Teams</h3>
        <ol>
          {this.props.teams.map(team => <li key={team.id}>{team.name} {team.city}, {team.country}</li>)}
        </ol>
      </div>
    );
  };
}