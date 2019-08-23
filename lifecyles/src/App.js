import React, { Component } from "react";
import "./App.css";
//import { Message } from "./Message";
import { DirectionDisplay } from "./DirectionDisplay";
//import { List } from "./List";
//import { ExternalCounter } from "./ExternalCounter";
//import { HooksMessage } from "./HooksMessage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 100 };
  }
  changerCounter = val => {
    this.setState({ counter: this.state.counter + val });
  };
  render() {
    console.log("Render App Component");
    return (
      <div className="container text-center">
        <DirectionDisplay value={this.state.counter} />
        <div className="text-center">
          <button
            className="btn btn-primary m-1"
            onClick={() => this.changerCounter(-1)}
          >
            Decrease
          </button>
          <button
            className="btn btn-primary m-1"
            onClick={() => this.changerCounter(1)}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
