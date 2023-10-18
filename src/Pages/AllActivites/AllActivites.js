import { useState } from "react";
import { useOutletContext } from "react-router";
import FilterByCategory from "../../Components/FilterByCategory";
import BucketListCard from "../../Components/BucketListCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AllActivites = () => {
  let [activites] = useOutletContext();
  let [category, setCategory] = useState("");

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  let filteredActivites = activites.filter((activity) => {
    return category ? activity.category.toLowerCase() === category : activity;
  });

  return (
    <>
      <FilterByCategory changeCategory={changeCategory} />


      {filteredActivites.map((activity) => (
        <BucketListCard {...activity} key={activity.id} />
      ))}

      
      <Container>
        <FilterByCategory changeCategory={changeCategory} />
        <Row>
          {filteredActivites.map((activity) => (
            <Col md={4}>
              <BucketListCard {...activity} key={activity.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllActivites;
