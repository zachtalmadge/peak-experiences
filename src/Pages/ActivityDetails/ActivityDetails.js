import { useEffect } from 'react'
import { useParams, useOutletContext } from "react-router";
import { Navigate, useNavigate} from "react-router-dom";
import Details from "../../Components/Details";

function ActivityDetails() {
  const { id } = useParams();
  const [activities] = useOutletContext();
  const navigate =  useNavigate()


  let activity = activities.find((item) => item.id === parseInt(id));

  useEffect(() => {
    if (!activity) {
      navigate('*')
    }
  })


  return <Details {...activity} />;
}

export default ActivityDetails;