import NavBar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
}

export default App;