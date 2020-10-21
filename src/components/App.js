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
        You have to make a button that on click will render a paragraph tag,
        Button should contain id click and para(when rendered)should have id
        para.
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
