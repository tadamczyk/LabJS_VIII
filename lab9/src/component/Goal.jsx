import React, { Component } from "react";

export default class Goal extends Component {
  render() {
    return (
      <div className="goal">
        <h4>Scored goals:</h4>
        <form className="form-inline">
          <div className="form-group">
            <label>Goals:</label>
            <input name="goals" value={this.props.goals} onChange={this.props.onInput} />
          </div>
        </form>
      </div>
    );
  };
}