import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./About";
import PremierLeague from "./PremierLeague";

export default class PremierLeaguePage extends Component {
  render() {
    return (
      <div className="premierLeaguePage">
        <Router>
          <div className="routing">
            <ul>
              <li>
                <Link to="/">Premier League</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={PremierLeague} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    );
  };
}