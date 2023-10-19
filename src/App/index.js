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

  const addToUserList = async (id) => {
    
    let activity = activites.find(act => act.id === id)
    // set state for both userList and activitesList
    setUserActivies([ activity, ...userList ])

    let newActivites = activites.map(act => {
      if (act.id === activity.id) {
        return { ...act, isInList: true }
      } else {
        return act
      }
    })
    setActivites(newActivites)
    
    const headers = { "content-type": "application/json" }
    const body = JSON.stringify({ ...activity, isInList: true })
    
    // perform fetch calls to persist to database
    fetch(URL2, { method: "POST", headers, body })
    fetch(`${URL1}/${activity.id}`, { method: "PATCH", headers, body })

    alert(`${activity.name} has been added to your bucket list!`)

  } // end function

  const removeFromUserList = (id) => {
    
    let newUserActivites = userList.filter(act => act.id !== id)
    // set state for both userList and activitesList
    setUserActivies(newUserActivites)

    let newActivites = activites.map(act => {
      if (act.id === id) {
        return { ...act, isInList: false }
      } else {
        return act
      }
    })
    setActivites(newActivites)

    let activity = activites.find(act => act.id === id)
    
    const headers = { "content-type": "application/json" }
    const body = JSON.stringify({ ...activity, isInList: false })
    
    // perform fetch calls to persist to database
    fetch(`${URL2}/${activity.id}`, { method: "DELETE" })
    fetch(`${URL1}/${activity.id}`, { method: "PATCH", headers, body })
    
    alert(`${activity.name} has been removed to your bucket list!`)
  } // end function

  return (
    <>
      <NavBar />
      <Outlet context={[activites, userList, addToUserList, removeFromUserList, setActivites]} />
      <Footer />
    </>
  );
};

export default App;