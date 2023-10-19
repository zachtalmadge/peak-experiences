import { useState } from "react";
import { useOutletContext } from "react-router";
import FilterByCategory from "../../Components/FilterByCategory";
import FilterByRisk from '../../Components/FilterByRisk'
import BucketListCard from "../../Components/BucketListCard";
import RiskLevelLegend from "../../Components/RiskLevelLegend/RiskLevelLegend";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AllActivites = () => {

  let [ activites ] = useOutletContext();

  let [ category, setCategory ] = useState("");
  let [ risk, setRisk ] = useState("")

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const changeRiskFilter = (e) => {
    setRisk(e.target.value)
  }

  // filter by category then filter by risk
  let filteredActivites = activites
    .filter((activity) => {
      return category ? activity.category.toLowerCase() === category : activity;
    })
    .filter((activity) => {
      return risk ? activity.risk.toLowerCase() === risk : activity
    });



  return (
    <>
      <Container className="my-5">
        <h1 className="text-center">All Activites</h1>

        <Row>
          <Col md={4} className="d-flex justify-content-center">
            <RiskLevelLegend/>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <FilterByCategory changeCategory={changeCategory} />
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <FilterByRisk changeRiskFilter={changeRiskFilter}/>
          </Col>
        </Row>

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
