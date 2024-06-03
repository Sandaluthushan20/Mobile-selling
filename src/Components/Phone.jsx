import React from 'react';
import { Container, Row, Col, Image, Button,Card } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import AddCart from './AddCart';



import image1 from '../assets/mobile/15max.png';
import image2 from '../assets/mobile/14pro.jpg';

// import image3 from '../assets/mobile/image3.jpg';
// import image4 from '../assets/mobile/15max.png';
// import image5 from '../assets/mobile/image2.jpg';
// import image6 from '../assets/mobile/image3.jpg';


const iphoneData = {
  1: {
    title: 'iphone 15',
    description: 'Explore the latest models with advanced features and sleek designs.',
    image: image1
  },
  2: {
    title: 'iphone 14 pro',
    description: 'Check out our best-selling mobile phones with top reviews.',
    image:image2 
  },
  3: {
    title: 'iphone 13 pro',
    description: 'Don\'t miss out on our special offers and discounts on selected models.',
    image: "{image3}"
  },
  4: {
    title: 'iphone 12',
    description: 'Don\'t miss out on our special offers and discounts on selected models.',
    image: "{image4}"
  },
  5: {
    title: 'iphone 13',
    description: 'Don\'t miss out on our special offers and discounts on selected models.',
    image: "image5}"
  },
  6: {
    title: 'iphone 14',
    description: 'Don\'t miss out on our special offers and discounts on selected models.',
    image: "{image6}"
  }
};

const Phone = () => {
  const { id } = useParams();
  const history =useNavigate();
  const iphone = iphoneData[id];

  if (!iphone) {
    return <h2>Product not found</h2>;
  }

  const handleGoBack = () => {
    history('/');
  }
 

  return (
    <>
    <div className="phone">
<Container className="mt-5">
      <Row >
        <Col md={6} className='up'>
          <Image src={iphone.image} fluid style={{ maxWidth: '300px', height: 'auto' }}/>
        </Col>
        <Col md={6}>
          <h2>{iphone.title} </h2>
          <p>{iphone.description}</p>
          <Button variant="primary" onClick={handleGoBack}>Go Back</Button>
        </Col>
      </Row>
    </Container>

</div>



    
    </>

 
  );
};

export default Phone;
