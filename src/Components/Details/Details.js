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
          <hr />
          <p className="lead"><i className="fa fa-map-marker-alt" style={{color: "orangered"}}></i> Location: {location}</p>
          <hr />
          <p className="lead"><i class="fa fa-exclamation-triangle"></i> Risk: {risk}</p>
          <hr />
          <p className="lead"><i class="fa fa-info-circle" style={{color: "darkblue"}}></i> Description: {description}</p>
          <hr />
          {itemInList ? (
            <Button size="lg" variant="danger" onClick={handleClick}>
              Remove From List
            </Button>
          ) : (
            <Button size="lg" variant="warning" onClick={handleClick}>
              Add To List
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}
export default Details;
