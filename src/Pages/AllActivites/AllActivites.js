import { useState } from "react";
import { useOutletContext } from "react-router";
import FilterByCategory from "../../Components/FilterByCategory";
import FilterByRisk from '../../Components/FilterByRisk'
import BucketListCard from "../../Components/BucketListCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AllActivites = () => {
  let [activites] = useOutletContext();
  let [category, setCategory] = useState("");
  let [risk, setRisk] = useState('')

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const changeRiskFilter = (e) => {
    setRisk(e.target.value)
  }

  let filteredActivites = activites
    .filter((activity) => {
      return category ? activity.category.toLowerCase() === category : activity;
    })
    .filter((activity) => {
      console.log(risk, activity.risk)
      return risk ? activity.risk.toLowerCase() === risk : activity
    });



  return (
    <>
      <Container>
        <FilterByCategory changeCategory={changeCategory} />
        <FilterByRisk changeRiskFilter={changeRiskFilter}/>
        <Row>
          {filteredActivites.map((activity, i) => (
            <Col key={i} md={4}>
              <BucketListCard {...activity} key={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllActivites;
