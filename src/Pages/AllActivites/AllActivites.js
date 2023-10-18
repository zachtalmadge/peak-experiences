import { useState } from "react";
import { useOutletContext } from "react-router";
import FilterByCategory from "../../Components/FilterByCategory";
import BucketListCard from "../../Components/BucketListCard";

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
    </>
  );
};

export default AllActivites;
