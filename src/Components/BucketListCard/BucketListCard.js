import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function BucketListCard({ image, name, location, risk, isInList, id }) {
  //   isInList = false;
  return (
    <Card>
      <Card.Img variant="top" src={image} height="350"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{location}</Card.Text>
        <Link to={`/activites/${id}`}>
          <Button variant="primary">Details</Button>
        </Link>
        {/* <Link to={`/mybucketlist`}>
          <Button variant="dark" disabled={isInList ? true : false}>
            Add to my list
          </Button>
        </Link> */}
      </Card.Body>
    </Card>
  );
}

export default BucketListCard;
