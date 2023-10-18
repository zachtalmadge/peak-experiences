// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
import BucketListCard from "../BucketListCard";

function Details({ name, image, id, location, isInList }) {
  console.log(name);
  return (
    <BucketListCard
      name={name}
      image={image}
      id={id}
      location={location}
      isInList={isInList}
    />
  );
}

export default Details;

// 21-30 image url for our bucklist activities.
