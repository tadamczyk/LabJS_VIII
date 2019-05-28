import React, { Component } from "react";

export default class AddTeamBox extends Component {
  render() {
    return (
      <div className="addTeam">
        <h3>Add Team to Premier League</h3>
        <form className="form-inline" onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input name="name" value={this.props.name} onChange={this.props.onInput} />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input name="city" value={this.props.city} onChange={this.props.onInput} />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input name="country" value={this.props.country} onChange={this.props.onInput} />
          </div>
          <div className="form-group">
            <label>Year of established:</label>
            <input name="yearOfEstablished" value={this.props.yearOfEstablished} onChange={this.props.onInput} />
          </div>
          <div className="form-group">
            <label>In current season?:</label>
            <input name="inCurrentSeason" type="checkbox" defaultChecked={true} value={this.props.inCurrentSeason} onChange={this.props.onInput} />
          </div>
          <div className="form-group">
            <label>Players:</label>
            <input name="players" value={this.props.players} onChange={this.props.onInput} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  };
}