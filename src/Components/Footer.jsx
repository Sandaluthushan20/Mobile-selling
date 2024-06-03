// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Mobile Store. All Rights Reserved.</p>
            <p>Designed and Developed by RANSOM Company</p>
            <p>Contact us: RANSOM@mobilestore.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
