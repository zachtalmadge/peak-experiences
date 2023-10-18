import { useOutletContext } from "react-router";
import BucketListCard from "../../Components/BucketListCard";
import { useEffect, useState } from "react";
const UserList = () => {


fetch("http://localhost:3000/userList")
.then(resp=>resp.json())
.then(myActivity=>)
.catch()


  return (
    <div>
      <h1>My Bucket List</h1>
      <BucketListCard />
      <h2>test</h2>
    </div>
  );
};

export default UserList;

