import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/Navbar'
import Footer from '../Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

let URL = 'http://localhost:3000/bucketListItems'

const App = () => {

  let [activites, setActivites] = useState([])

  useEffect(() => {
    try {
      (async () => {
        let response = await fetch(URL)
        let data = await response.json()
        setActivites(data)
        console.log(activites)
      })()
    } catch (error) {
      alert(error)
    }
  }, [])

  return (
    <>
      <NavBar />
      <Outlet context={activites}/>
      <Footer />
    </>
  );
}

export default App;