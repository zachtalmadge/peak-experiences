import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Details({ name, image, description, category, risk, id, location }) {
  return (
    <Container>
      <Row>
        <Col>
          <img src={image} className="img-fluid" alt={name} />
        </Col>
        <Col>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{category}</p>
          <p>{risk}</p>
          <p>{location}</p>
        </Col>
      </Row>
    </Container>
  );
}
export default Details;
