import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../images/B.svg";

function Header() {
  return (
    <Row className="header">
      <Col lg={{ span: 10, offset: 1 }} className="header__inner">
        <span>
          <img src={Logo} className="logo" />
        </span>
        <ul className="header__nav">
          {/* <li>
            <a href="#">About</a>
          </li>
          <li>Portfolio</li>
          <li>Contact</li> */}
        </ul>
      </Col>
    </Row>
  );
}

export default Header;
