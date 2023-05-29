import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Substraction from './pages/substraction';
import { Button, Container, Navbar, NavDropdown, Nav, Col, Row } from 'react-bootstrap';

function App() {

  return (
    <div className="App">
      <Container className="mt-5">
              <Row>
                  <Col>
                      <Substraction></Substraction>
                  </Col>
              </Row>
          </Container>
    </div>
  );
}

export default App;
