import React, { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router";
import Details from "../../Components/Details";

function ActivityDetails() {
  const { id } = useParams();
  const [activities] = useOutletContext();

  let activity = activities.find((item) => item.id === parseInt(id));
  console.log(activity);

  return <Details {...activity} />;
}
export default ActivityDetails;
