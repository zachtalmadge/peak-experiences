import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function BucketListCard({ image, name, location, risk, id }) {
  
  const borderColor = (risk) => {
    let color;

    switch(risk.toLowerCase()){
      case "low":
        color = 'success'
        break;
      case 'medium':
        color = 'warning'
        break;
      default:
        color = 'danger'
        break;
    }
    return color
  }

  return (
    <Card border={borderColor(risk)} style={{borderWidth: "3px"}}>
      <Card.Img variant="top" src={image} height="350"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{location}</Card.Text>
        <Link to={`/activites/${id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BucketListCard;
