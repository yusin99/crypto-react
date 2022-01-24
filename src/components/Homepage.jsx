import React from "react";
import millify from "millify";
import { Col, Row, Statistic, Typography } from "antd";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { Title } = Typography;
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
    </>
  );
};

export default Homepage;
