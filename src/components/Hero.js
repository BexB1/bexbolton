import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeroPic from "../images/hero_pic.png";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

function Hero() {
  return (
    <Row className="hero">
      <Col
        xl={{ span: 8, offset: 2 }}
        md={{ span: 10, offset: 1 }}
        className="hero__inner"
      >
        <img src={HeroPic} alt="A headshot of yours truly, Bex Bolton" />
        <div className="copy p-5">
          <h1>I'm Bex Bolton, a Web Developer in London, England.</h1>
          <p className="font-md">
            I'm currently in the process of rebuilding this site from scratch.
            Please check back soon. Thanks for visiting!
          </p>
          <div className="contacts">
            <a href="https://github.com/BexB1">
              <img src={github} alt="icon: Github" />
            </a>
            <a href="https://www.linkedin.com/in/bexbolton/">
              <img src={linkedin} />
            </a>
            <a href="mailto:bex@bexbolton.com" className="btn">
              bex@bexbolton.com
            </a>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Hero;
