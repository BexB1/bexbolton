import React from "react";
// import { projects } from "../utils/_DATA";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from "react-bootstrap/Row";

let projects = {
  projectOne: {
    name: "first",
    imageURL: "https://via.placeholder.com/150",
    description: "the prject description",
    tech: [],
  },
};

const projectKeys = Object.values(projects);

export default function Work() {
  return (
    <Row>
      <Col
        xl={{ span: 8, offset: 2 }}
        md={{ span: 10, offset: 1 }}
        className="hero__inner p-5"
      >
        <div>
          {projectKeys.map((project) => (
            <Card>
              <Card.Img variant="top" src={project.imageURL} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                  <p>{project.description}</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Col>
    </Row>
  );
}
