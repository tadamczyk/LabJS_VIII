import React, { Component } from "react";

export default class TeamDetailsBox extends Component {
  render() {
    return (
      <div className="teamDetails">
        <h3>Team Details</h3>
        {this.props.team
          ? <div>{Object.keys(this.props.team).map(field => <p key={field}>{field}: {this.props.team[field]}</p>)}</div>
          : <div />}
      </div>
    );
  };
}