import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const test = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card-container">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="..." />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'More'}
          </Button>
        </Card.Body>
      </Card>
      {showMore && (
        <>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="..." />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="..." />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
};

export default test;