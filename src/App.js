import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Search from "./Component/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
