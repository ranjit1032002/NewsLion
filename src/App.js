import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  apiKey = "c6f10152fc214cb58d7aa005f6ea1187";
  // apiKey = process.env.REACT_APP_NEWS_API;
  // "dbe57b028aeb41e285a226a94865f7a7"
  constructor() {
    super();
    this.state = {
      mode: "light",
    };
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#0F0F0F";
      document.body.style.color = "white";
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#0F0F0F";
    }
  };

  pageSize = this.pageSize;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress})
  }

  render() {
    return (
      <>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
          <LoadingBar
            height = {3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress={this.setProgress} 
                  key="general"
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"general"}
                  mode={this.state.mode}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News setProgress={this.setProgress} 
                  key="business"
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"business"}
                  mode={this.state.mode}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} 
                  key="entertainment"
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"entertainment"}
                  mode={this.state.mode}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News setProgress={this.setProgress} 
                  key="general"
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"general"}
                  mode={this.state.mode}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News setProgress={this.setProgress} 
                  key="health"
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"health"}
                  mode={this.state.mode}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News setProgress={this.setProgress} 
                  key="science"
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"science"}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News setProgress={this.setProgress} 
                  key="sports"
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"sports"}
                  mode={this.state.mode}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News setProgress={this.setProgress} 
                  key="technology"
                  pageSize={this.pageSize}
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"technology"}
                  mode={this.state.mode}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
