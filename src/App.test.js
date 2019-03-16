import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BackButton from "./components/backBtn";
import Week1 from "./components/week1";
import Week2 from "./components/week2";
import Week3 from "./components/week3";
import Week4 from "./components/week4";
import Week5 from "./components/week5";
import Week6 from "./components/week6";
import Week7 from "./components/week7";
import Week8 from "./components/week8";
import Week9 from "./components/week9";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BackButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Week1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Week2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Week3 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Week4 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Week5 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Week6 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Week7 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Week8 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Week9 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
