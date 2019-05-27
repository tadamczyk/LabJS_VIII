import React, { Component } from "react";

export default class AddTeamBox extends Component {
  render() {
    return (
      <div className="addTeam">
        <h3>Add Team to Premier League</h3>
        <form onSubmit={this.props.onSubmit} onChange={this.props.onInput}>
          <label>Id:</label>
          <input name="id" value={this.props.id} />
          <br />
          <label>Name:</label>
          <input name="name" value={this.props.name} />
          <br />
          <label>City:</label>
          <input name="city" value={this.props.city} />
          <br />
          <label>Country:</label>
          <input name="country" value={this.props.country} />
          <br />
          <label>Year of established:</label>
          <input name="yearOfEstablished" value={this.props.yearOfEstablished} />
          <br />
          <label>In current season?:</label>
          <input name="inCurrentSeason" value={this.props.inCurrentSeason} />
          <br />
          <label>Players:</label>
          <input name="players" value={this.props.players} />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  };
}