
import React, { useState } from 'react';
import { Card, Button ,} from 'react-bootstrap';

const AddCart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Logic to add product to cart
    alert(`Added ${quantity} of ${product.title} to the cart.`);
  };

  

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Sandalu</Card.Title>
        <Card.Text>new</Card.Text>
        <Card.Text>Price: $200</Card.Text>
        <div className="d-flex align-items-center">
          <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AddCart;
