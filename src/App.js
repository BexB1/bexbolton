import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <Container fluid>
      <Header />
      <Hero />
      <Footer />
    </Container>
  );
}

export default App;
