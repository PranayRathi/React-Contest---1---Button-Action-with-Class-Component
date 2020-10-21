import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.change = this.change.bind(this);
  }

  change() {
    return (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  }
  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.change}>
          click
        </button>
      </div>
    );
  }
}

export default App;
