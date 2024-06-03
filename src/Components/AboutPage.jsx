import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const AboutPage = () => {
  return (
    <div className="about">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>About Us</h2>
            <p>We are a leading mobile phone retailer offering the latest models at competitive prices.</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  To provide the best mobile phone deals and customer service in the market.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title>Why Choose Us?</Card.Title>
                <Card.Text>
                  We offer a wide range of mobile phones, competitive prices, and exceptional customer service.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
