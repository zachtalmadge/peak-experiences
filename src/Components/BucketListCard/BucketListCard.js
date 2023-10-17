import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BucketListCard({ image, name, location, risk, isInList }) {
  isInList = true;
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{location}</Card.Text>
        <Button variant="primary">Details</Button>
        <Button variant="primary" disabled={isInList ? true : false}>
          Add to my list
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BucketListCard;
