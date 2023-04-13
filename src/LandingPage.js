import React from 'react';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import WorksCited from './WorksCited';

import DiscoveringYourself from './DiscoveringYourself';
import PsychologyOfDecisionMaking from './PsychologyOfDecisionMaking';
import Home from './Home'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


function LandingPage() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/home">The Mindful Decider</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/discovering-yourself">Discovering Yourself</Nav.Link>
                <Nav.Link as={Link} to="/exploring-psychology">Psychology of Decision-Making</Nav.Link>
                <Nav.Link as={Link} to="/works-cited">Works Cited</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/discovering-yourself" element={<DiscoveringYourself />} />
            <Route exact path="/exploring-psychology" element={<PsychologyOfDecisionMaking />} />
            <Route exact path="/works-cited" element={<WorksCited />} />
            <Route exact path="/home" element={<Home />} />

          </Routes>
        </Container>
        <footer>
          <Container>
            <Row>
              <Col className="text-center py-3">
                <p>© 2023 The Mindful Decider. All rights reserved.</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </Router>
    </div>
  );
}

export default LandingPage;
