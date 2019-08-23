import React, { Component } from "react";
import { ActionButton } from "./ActionButton";

let externalCounter = 0;

export class ExternalCounter extends Component {
  incrementCounter = () => {
    externalCounter++;
    this.forceUpdate();
  };
  render() {
    return (
      <div>
        <ActionButton
          callback={this.incrementCounter}
          text="External Counter"
        />
        <div className="h5 text-center p-">External : {externalCounter}</div>
      </div>
    );
  }
}
