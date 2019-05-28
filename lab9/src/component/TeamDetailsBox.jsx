import React, { Component } from "react";

export default class TeamDetailsBox extends Component {
  renderFieldValue(field) {
    return field === true || field === "true"
      ? "Yes"
      : field === false || field === "false"
        ? "No"
        : Array.isArray(field)
          ? field.map(value => value).join(", ")
          : field;
  }

  renderFieldLabel(field) {
    switch (field) {
      case "yearOfEstablished":
        return "Year Of Established";
      case "inCurrentSeason":
        return "In Current Season?";
      default:
        return field.charAt(0).toUpperCase() + field.slice(1);
    };
  }

  render() {
    return (
      <div className="teamDetails">
        <h3>Team Details</h3>
        {this.props.team
          ? <div>{Object.keys(this.props.team).map(field => <p key={field}>{this.renderFieldLabel(field)}: {this.renderFieldValue(this.props.team[field])}</p>)}</div>
          : <div />}
      </div>
    );
  };
}