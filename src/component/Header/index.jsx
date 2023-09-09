import { Col, Row } from "antd";
import React from "react";
import Logo from "../Logo";
import Search from "antd/es/input/Search";
import HeaderMenu from "../Menu";

const Header = () => {
  return (
    <div className="header pdtb20 ">
      <Row className="container">
        <Col span={4}>
          <Logo></Logo>
        </Col>
        <Col span={4}>
          <Search />
        </Col>
        <Col span={16}>
          <HeaderMenu />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
