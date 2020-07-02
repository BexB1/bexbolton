import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero() {
  return (
    <Row className="hero">
      <Col lg={{ span: 10, offset: 1 }} className="hero__inner">
        <div className="img">Img</div>
        <div className="copy p-5">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in
            id pharetra, fermentum vitae sit vivamus. Et tellus egestas mi
            felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a className="btn">Do a thing</a>
        </div>
      </Col>
    </Row>
  );
}

export default Hero;
