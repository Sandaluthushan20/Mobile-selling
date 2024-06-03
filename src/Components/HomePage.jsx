
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Acording from '../Acording';
import back4 from '../assets/Images/back4.jpg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const history = useNavigate();

  const handleViewMore = (id) => {
    navigate(`/details/${id}`, { replace: false });
  };

  return (<>
  <div className="back">
  <Container className="mt-5">
  <div className="mb-3">
      <Row className="mb-4">
        <Col >
          <h1>Welcome to Mobile Store</h1>
          <p>Your one-stop shop for the latest mobile phones.</p>
        </Col>
      </Row>
      </div>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={back4} />
            <Card.Body>
              <Card.Title>Latest Models</Card.Title>
              <Card.Text>
                Explore the latest models with advanced features and sleek designs.
              </Card.Text>
              <Link to="/details/1">
                <Button variant="primary">View More</Button>
              </Link>
              {/* <Button variant="primary" onClick={() => handleViewMore(1)}>View More</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Best Sellers</Card.Title>
              <Card.Text>
                Check out our best-selling mobile phones with top reviews.
              </Card.Text>
              <Link to="/details/2">
                <Button variant="primary">View More</Button>
              </Link>
              {/* <Button variant="primary" onClick={() => handleViewMore(2)}>View More</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Special Offers</Card.Title>
              <Card.Text>
                Don't miss out on our special offers and discounts on selected models.
              </Card.Text>
              <Link to="/details/3">
                <Button variant="primary">View More</Button>
              </Link>
              {/* <Button variant="primary" onClick={() => handleViewMore(3)}>View More</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='row'>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Latest Models</Card.Title>
              <Card.Text>
                Explore the latest models with advanced features and sleek designs.
              </Card.Text>
              <Link to="/details/4">
                <Button variant="primary">View More</Button>
              </Link>
              {/* <Button variant="primary" onClick={() => handleViewMore(4)}>View More</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Best Sellers</Card.Title>
              <Card.Text>
                Check out our best-selling mobile phones with top reviews.
              </Card.Text>
              <Link to="/details/5">
                <Button variant="primary">View More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Special Offers</Card.Title>
              <Card.Text>
                Don't miss out on our special offers and discounts on selected models.
              </Card.Text>
              <Link to="/details/6">
                <Button variant="primary">View More</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Acording/>


  </div>


  </>
    
  );
};

export default HomePage;
