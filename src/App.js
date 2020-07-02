import React from "react";
import Fact from "./Fact";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col lg={{ span: 10, offset: 1 }}>
          <header className="App-header">
            <div className="jumbotron">
              <h1>Thanks for visiting</h1>
              <p>
                I'm currently in the process of rebuilding this site from
                scratch.
              </p>
              <p>Please check back soon!</p>
              <div className="signature">
                <p>- Bex</p>
                <em>23 June 2020</em>
              </div>
              <div className="footer">
                <a href="https://www.linkedin.com/in/bexbolton">
                  <button className="cta">
                    Check out my LinkedIn profile instead
                  </button>
                </a>
                <Fact />
              </div>
            </div>
          </header>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
