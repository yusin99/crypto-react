import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons/lib/icons";
import icon from "../images/cryptocurrency.png";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoM</Link>
        </Typography.Title>
        {/* <Button className="menu-controll-container"></Button> */}
      </div>
    </div>
  );
};

export default Navbar;
