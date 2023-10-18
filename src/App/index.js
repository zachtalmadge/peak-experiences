import { Outlet } from 'react-router-dom'
import { useFetch } from '../Hooks/customHooks'
import NavBar from '../Components/Navbar'
import Footer from '../Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

let URL1 = "http://localhost:3000/bucketListItems";
let URL2 = "http://localhost:3000/userList";

const App = () => {

  const { data: activites, setData: setActivites } = useFetch(URL1)

  const { data: userList, setData: setUserActivies } = useFetch(URL2)

  return (
    <>
      <NavBar />
      <Outlet context={[activites, userList]} />
      <Footer />
    </>
  );
};

export default App;