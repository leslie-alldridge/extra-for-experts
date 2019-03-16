import React, { Component } from "react";
import "./App.css";
import Week1 from "./components/week1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: 0
    };
  }

  handleClick = e => {
    console.log(e.target.value);

    this.setState({
      week: Number(e.target.value)
    });
    console.log(this.state);
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
          {this.state.week === 1 ? <Week1 /> : null}
        </header>
      </div>
    );
  }
}

export default App;
