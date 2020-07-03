import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  return (
    <Row className="projects">
      <Col lg={{ span: 10, offset: 1 }} className="projects__inner">
        Projects
      </Col>
    </Row>
  );
}

export default Projects;
