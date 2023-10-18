import { useParams, useOutletContext } from "react-router";
import Details from "../../Components/Details";

function ActivityDetails() {
  const { id } = useParams();
  const [activities] = useOutletContext();
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    // Filter and update the activity list based on the selected IDs.
    const selectedActivities = activities.filter((item) =>
      id.includes(item.id.toString())
    );
    setActivityList(selectedActivities);
  }, [id, activities]);

  useEffect(() => {
    if (activityList.length !== 0) {
      activityList.forEach((activity) => {
        fetch(`http://localhost:3000/userList/${activity.id}`)
          .then((response) => {
            if (response.ok) {
              console.log(`Activity with ID ${activity.id} already exists.`);
              return null;
            } else {
              return fetch("http://localhost:3000/userList", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(activity),
              });
            }
          })
          .then((response) => {
            if (response !== null && !response.ok) {
              throw new Error("Network response was not ok");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    }
  }, [activityList]);

  return (
    <div>
      {activityList.map((activity) => (
        <Details key={activity.id} {...activity} />
      ))}
    </div>
  );
}

export default ActivityDetails;
=======

  const [activities] = useOutletContext();

  let activity = activities.find((item) => item.id === parseInt(id));
  console.log(activity);

  return <Details {...activity} />;
}

export default ActivityDetails;
