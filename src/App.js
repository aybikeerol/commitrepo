import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";

export default function App() {
  return (
    <Container fluid>
      <div className="App">
        <Button className="btn btn-success btn-sm"> asdasd </Button>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </Container>
  );
}
