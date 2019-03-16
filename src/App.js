import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    week: 0
  };

  handleClick = () => {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Please select a week from the list below</h2>
          <ul>
            <li onClick={this.handleClick} id="listItem">
              Week 1
            </li>
            <li onClick={this.handleClick} id="listItem">
              Week 2
            </li>
            <li onClick={this.handleClick} id="listItem">
              Week 3
            </li>
            <li onClick={this.handleClick} id="listItem">
              Week 4
            </li>
            <li onClick={this.handleClick} id="listItem">
              Week 5
            </li>
            <li onClick={this.handleClick} id="listItem">
              Week 6
            </li>
            <li onClick={this.handleClick} id="listItem">
              Week 7
            </li>
            <li onClick={this.handleClick} id="listItem">
              Week 8
            </li>
            <li onClick={this.handleClick} id="listItem">
              Week 9
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
