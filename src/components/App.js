import React, { Component } from "react";
//import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      change: false
    };
  }
  render() {
    const para = (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
    return (
      <div id="main">
        <button
          id="click"
          onClick={() => {
            this.setState({ change: true });
          }}
        >
          click
        </button>
        {this.state.change ? para : null}
      </div>
    );
  }
}

export default App;
