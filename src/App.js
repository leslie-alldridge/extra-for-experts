import React, { Component } from "react";
import "./App.css";
import Week1 from "./components/week1";
import Week2 from "./components/week2";
import Week3 from "./components/week3";
import Week4 from "./components/week4";
import Week5 from "./components/week5";
import Week6 from "./components/week6";
import Week7 from "./components/week7";
import Week8 from "./components/week8";
import Week9 from "./components/week9";
import BackButton from "./components/backBtn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: 0
    };
  }

  handleClick = e => {
    this.setState({
      week: Number(e.target.value)
    });
  };

  reset = () => {
    this.setState({
      week: 0
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.week === 0 && (
            <div>
              <h2>Please select a week from the list below</h2>
              <ul>
                <li value="1" onClick={this.handleClick} id="listItem">
                  Week 1
                </li>
                <li value="2" onClick={this.handleClick} id="listItem">
                  Week 2
                </li>
                <li value="3" onClick={this.handleClick} id="listItem">
                  Week 3
                </li>
                <li value="4" onClick={this.handleClick} id="listItem">
                  Week 4
                </li>
                <li value="5" onClick={this.handleClick} id="listItem">
                  Week 5
                </li>
                <li value="6" onClick={this.handleClick} id="listItem">
                  Week 6
                </li>
                <li value="7" onClick={this.handleClick} id="listItem">
                  Week 7
                </li>
                <li value="8" onClick={this.handleClick} id="listItem">
                  Week 8
                </li>
                <li value="9" onClick={this.handleClick} id="listItem">
                  Week 9
                </li>
              </ul>
            </div>
          )}
          {this.state.week === 1 ? (
            <Week1 />
          ) : this.state.week === 2 ? (
            <Week2 />
          ) : this.state.week === 3 ? (
            <Week3 />
          ) : this.state.week === 4 ? (
            <Week4 />
          ) : this.state.week === 5 ? (
            <Week5 />
          ) : this.state.week === 6 ? (
            <Week6 />
          ) : this.state.week === 7 ? (
            <Week7 />
          ) : this.state.week === 8 ? (
            <Week8 />
          ) : this.state.week === 9 ? (
            <Week9 />
          ) : null}
          {this.state.week !== 0 && <BackButton onClick={this.reset} />}
        </header>
      </div>
    );
  }
}

export default App;
