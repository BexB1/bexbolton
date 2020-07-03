import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeroPic from "../images/hero_pic.png";

function Hero() {
  return (
    <Row className="hero">
      <Col
        xl={{ span: 8, offset: 2 }}
        md={{ span: 10, offset: 1 }}
        className="hero__inner"
      >
        <img src={HeroPic} />
        <div className="copy p-5">
          <h1>I'm Bex Bolton, a Web Developer in London, England.</h1>
          <p className="font-md">
            I'm currently in the process of rebuilding this site from scratch.
            Please check back soon. Thanks for visiting!
          </p>
          <a className="btn">Do a thing</a>
        </div>
      </Col>
    </Row>
  );
}

export default Hero;
