import React, { Component } from "react";
import Cash from "./Cash";
import Goal from "./Goal";

const PRICE_FOR_GOAL = 10000;

export default class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: 0,
      cash: 0
    };
  };

  async handleGoalsInput(event) {
    await this.setState({
      goals: event.target.value,
      cash: PRICE_FOR_GOAL * event.target.value
    });
  }

  async handleCashInput(event) {
    await this.setState({
      cash: event.target.value,
      goals: event.target.value / PRICE_FOR_GOAL
    });
  }

  render() {
    return (
      <div className="budget">
        <h3>Budget</h3>
        <Goal goals={this.state.goals}
          onInput={this.handleGoalsInput.bind(this)} />
        <Cash cash={this.state.cash}
          onInput={this.handleCashInput.bind(this)} />
      </div>
    );
  };
}