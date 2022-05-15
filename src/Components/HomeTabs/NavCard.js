import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './HomeTabs.css'
const NavCard = ({ data }) => {
  console.log(data);
  return (
    <Col>
      <Link
        to="/dashboard"
        className="text-decoration-none text-white"
      >
        <Card className="cardBackground">
          <Card.Body>
            <Card.Title>Class</Card.Title>
            <Card.Text>
              <h1 className="text-center">{data.level}</h1>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <div className="btn btn-primary py-1">See Details</div>
          </Card.Footer>
        </Card>
      </Link>
    </Col>
  );
};

export default NavCard;
