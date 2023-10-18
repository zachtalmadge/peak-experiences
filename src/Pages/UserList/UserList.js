import { useOutletContext } from "react-router";
import BucketListCard from "../../Components/BucketListCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserList = () => {

  const [, userList] = useOutletContext()

  return (
    <>
    <Container>
      <Row>
        {userList.map((activity, i) => (
          <Col key={i} md={4}>
            <BucketListCard {...activity} key={i} />
          </Col>
        ))}
      </Row>
    </Container>
  </>
  )
};

export default UserList;
