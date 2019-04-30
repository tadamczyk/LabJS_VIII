import React, { Component } from 'react';

export class TeamDetail extends Component {
  render() {
    return (
      <div className="teamDetails">
        <h3>Team Details</h3>
        <p>{Object.keys(this.props.team).map(t => <p>{t}: {this.props.team[t]}</p>)}</p>
      </div>
    )
  }
}