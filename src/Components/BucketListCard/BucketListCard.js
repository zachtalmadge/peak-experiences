import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function BucketListCard({ image, name, location, risk, id }) {
  const borderColor = (risk) => {
    let color;

    switch (risk.toLowerCase()) {
      case "low":
        color = "success";
        break;
      case "medium":
        color = "warning";
        break;
      default:
        color = "danger";
        break;
    }
    return color;
  };

  return (
    <Card className="my-3" border={borderColor(risk)} style={{ borderWidth: "3px" }}>
      <Card.Img variant="top" src={image} height="350" />
      <Card.Body>
        <Card.Title>🌀 {name}</Card.Title>
        <hr/>
        <Card.Text><i className="fa fa-map-marker-alt" style={{color: "orangered"}}></i> {location}</Card.Text>
        <hr/>
        <Link to={`/activites/${id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BucketListCard;