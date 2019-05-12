import React, { Component } from 'react';

export default class TeamDetailsBox extends Component {
  render() {
    return (
      <div className="teamDetails">
        <h3>Team Details</h3>
        <p>{Object.keys(this.props.team).map(field => <p>{field}: {this.props.team[field]}</p>)}</p>
      </div>
    );
  }
}