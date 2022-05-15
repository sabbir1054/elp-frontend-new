import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './stab.css'
const StudentTabCard = () => {
    return (
      <Col>
        <Card className='stu-cardBackground'>
          <Card.Body className='d-flex justify-content-center'>
            
            {/*  <Card.Text>
              <h1 className="text-center">{data.level}</h1>
            </Card.Text> */}
            <img src="https://i.ibb.co/4JR0PBT/book1.png" alt="" width='200'  />
          </Card.Body>
          <Card.Footer className="text-center">
            <div className="btn btn-primary py-1">See Details</div>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default StudentTabCard;
