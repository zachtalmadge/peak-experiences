import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

let URL1 = "http://localhost:3000/bucketListItems";
let URL2 = "http://localhost:3000/userList";

const App = () => {
  let [activites, setActivites] = useState([]);
  let [userList, setUserList] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        let response = await fetch(URL1);
        let data = await response.json();
        setActivites(data);
      })();
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    try {
      (async () => {
        let response = await fetch(URL2);
        let data = await response.json();
        setUserList(data);
      })();
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <>
      <NavBar />
      <Outlet context={[activites, userList]} />
      <Footer />
    </>
  );
};

export default App;
