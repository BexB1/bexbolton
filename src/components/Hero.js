import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero() {
  return (
    <Row className="hero">
      <Col
        xl={{ span: 8, offset: 2 }}
        md={{ span: 10, offset: 1 }}
        className="hero__inner"
      >
        <div className="img">Img</div>
        <div className="copy p-5">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p className="font-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in
            id pharetra, fermentum vitae sit vivamus.
          </p>
          <p className="font-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in
            id pharetra, fermentum vitae sit vivamus.
          </p>
          <p className="font-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in
            id pharetra, fermentum vitae sit vivamus.
          </p>
          <p className="font-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in
            id pharetra, fermentum vitae sit vivamus.
          </p>
          <a className="btn">Do a thing</a>
        </div>
      </Col>
    </Row>
  );
}

export default Hero;
