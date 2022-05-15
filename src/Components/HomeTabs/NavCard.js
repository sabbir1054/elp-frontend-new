import React from "react";
import { Card, Col } from "react-bootstrap";
const NavCard = ({ data }) => {
    console.log(data);
    return (
      <Col>
        <Card bg="dark">
          <Card.Body>
            <Card.Title>Class</Card.Title>
            <Card.Text>
                        <h1 className="text-center">{ data.level}</h1>
            </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    <div className="btn btn-primary py-1">See Details</div>
                </Card.Footer>
        </Card>
      </Col>
    );
};

export default NavCard;

