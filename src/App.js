import React from "react";
import { Layout, Space, Typography } from "antd";
// import { Route } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
