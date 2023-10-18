import React, { useState } from "react";
import { useOutletContext } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Details({ name, image, description, risk, id, location, isInList }) {
  const [, , addToUserList, removeFromUserList] = useOutletContext();
  let [itemInList, setItemInList] = useState(isInList);

  let handleClick = () => {
    if (itemInList) {
      setItemInList((itemInList) => !itemInList);
      removeFromUserList(id);
    } else {
      setItemInList((itemInList) => !itemInList);
      addToUserList(id);
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <img src={image} className="img-fluid rounded" alt={name} />
        </Col>
        <Col>
          <h1>{name}</h1>
          <p className="lead">Location: {location}</p>
          <p className="lead">Risk: {risk}</p>
          <p className="lead">{description}</p>
          {itemInList ? (
            <Button variant="danger" onClick={handleClick}>
              Remove From List
            </Button>
          ) : (
            <Button variant="warning" onClick={handleClick}>
              Add To List
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}
export default Details;
