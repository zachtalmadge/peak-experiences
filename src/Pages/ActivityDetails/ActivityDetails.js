import { useParams, useOutletContext } from "react-router";
import Details from "../../Components/Details";

function ActivityDetails() {
  const { id } = useParams();
  const [activities] = useOutletContext();

  let activity = activities.find((item) => item.id === parseInt(id));

  return <Details {...activity} />;
}

export default ActivityDetails;
