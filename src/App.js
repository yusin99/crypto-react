import React from "react";
import { Layout, Space, Typography } from "antd";
// import { Route } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout style={{ minHeight: "88vh" }}>
          <div className="routes">
            <Routes>
              <Route exact path="/" component={Homepage}></Route>
              <Route exact path="/exchanges" component={Exchanges}></Route>
              <Route
                exact
                path="/cryptocurrencies"
                component={Cryptocurrencies}
              ></Route>
              <Route
                exact
                path="/crypto/:coinId"
                component={CryptoDetails}
              ></Route>
              <Route exact path="/news" component={News}></Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptodata <br /> All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
