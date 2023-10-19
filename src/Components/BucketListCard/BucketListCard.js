import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import borderColor from '../../Util/borderColor'

function BucketListCard({ image, name, location, risk, id }) {

  return (
    <Card className="my-3 text-center" border={borderColor(risk)} style={{ borderWidth: "3px" }}>
      <Card.Img variant="top" src={image} height="350" />
      <Card.Body>
        <Card.Title>🌀 {name}</Card.Title>
        <hr />
        <Card.Text>🌎 {location}</Card.Text>
        <hr />
        <Link to={`/activites/${id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BucketListCard;