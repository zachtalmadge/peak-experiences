import { useOutletContext } from "react-router";
import BucketListCard from "../../Components/BucketListCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserList = () => {

  const [, userList] = useOutletContext()

  return (
    <>
    <Container className="my-5 text-center">
      <Row>
        <h1>Your Bucket List</h1>
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