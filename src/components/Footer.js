import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fact from "./Fact";

function Footer() {
  return (
    <Row className="footer">
      <Col lg={{ span: 10, offset: 1 }} className="footer__inner">
        <span>&copy; Becky Bolton</span>
        <Fact />
        <span>Last updated...</span>
      </Col>
    </Row>
  );
}

export default Footer;
