import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Dec from "./discover.png"
import dis from "./dis.png"

function Home() {
  return (
    <div className="App">

        <Container>
        <Row className="mt-5">
        <Col><div className=''>
            <h1>Welcome to The Mindful Decider</h1>
            <p>
            Welcome to The Mindful Decider, your ultimate resource for exploring the intricacies of self-discovery and the psychology of decision-making. Our website is designed to provide you with valuable insights and knowledge to help you make well-informed decisions, foster personal growth, and lead a more fulfilling life.</p>

<p>With our focus on two main sections, "Discovering Yourself" and "Psychology of Decision-Making," we offer a unique and engaging learning experience that caters to individuals of all backgrounds and interests. In "Discovering Yourself," we take you on a journey of self-exploration to understand the significance of self-awareness in personal growth and decision-making. In "Psychology of Decision-Making," we delve into the cognitive processes, biases, and heuristics that shape our choices and actions in different situations.

At The Mindful Decider, we believe that understanding ourselves and the psychology behind our decisions is a transformative journey that can have a significant impact on our lives. Join us as we unveil the power of self-discovery and decision-making, and empower yourself to make mindful choices and lead a more fulfilling life.
            </p></div>
        </Col>
        </Row>
          <Row className="mt-5">
            <Col classnamae="z" md={6}>
              <h2>Discover Yourself</h2>
              <p>
              The journey of self-discovery is a crucial component of personal growth and mental well-being. The importance of understanding oneself, embracing vulnerability, and fostering meaningful connections is highlighted in Stephen Chbosky's "The Perks of Being a Wallflower." Through the protagonist's coming-of-age journey, the novel showcases the transformative power of self-discovery. By embarking on this journey, individuals can become more self-aware, develop emotional intelligence, and lead more fulfilling lives. The incorporation of creative outlets, such as writing, painting, or music, can aid in the process of introspection and self-awareness. Education, family, and peer support also play vital roles in fostering an environment conducive to self-discovery. Ultimately, embracing the opportunities to explore our emotions, values, and beliefs can lead to profound personal growth and improved mental health.
              </p>
              <Link to="/discovering-yourself">
                <Button variant="primary">Discover More</Button>
              </Link>
            </Col>
            <Col md={6}>
              <img
                src={Dec}
                alt="Discover Yourself"
                className="img"
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6}>
              <img
                src={dis}
                alt="Psychology of Decision-Making"
                className="img-fluid"
              />
            </Col>
            <Col classnamae="z" md={6}>
              <h2>Psychology of Decision-Making</h2>
              <p>
              Our decisions define us and shape our lives, yet how often do we truly understand why we make them? In this section, we explore the psychology of decision-making in the context of self-discovery and personal growth. Drawing inspiration from "The Perks of Being a Wallflower," we delve into the factors that influence our choices, from cognitive biases to social pressures. We also examine how our ability to make informed decisions can improve with self-awareness and exploration of our values and goals. By combining literary analysis with scientific research, we provide a comprehensive overview of this fascinating subject. Join us on a journey of self-discovery, and learn how to make better decisions that align with your true self.
              </p>
              <Link to="/exploring-psychology">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Col>
          </Row>
          </Container>
        
      
    </div>
  );
}

export default Home;