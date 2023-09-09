import { Col, Input, Row } from "antd";
import React from "react";

const Searching = () => {
  return (
    <Row>
      <Col>
        <Input bordered="none" />
      </Col>
      <Col span={4}>
        <img src="/assets/image/shape" alt="" />
      </Col>
    </Row>
  );
};

export default Searching;
