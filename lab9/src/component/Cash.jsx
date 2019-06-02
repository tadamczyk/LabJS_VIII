import React, { Component } from "react";

export default class Cash extends Component {
  render() {
    return (
      <div className="cash">
        <h4>Needed cash:</h4>
        <form className="form-inline">
          <div className="form-group">
            <label>$$$:</label>
            <input name="cash" value={this.props.cash} onChange={this.props.onInput} />
          </div>
        </form>
      </div>
    );
  };
}