import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid text-center py-5 bg-dark text-light">
            <div className="container">
                <h1 className="display-4">Peak Experiences</h1>
                <p className="lead my-4">Unlock a world of unforgettable memories with Peak Experiences, your gateway to explore, discover, and track awe-inspiring activities tailored to turn your dream bucket list into a journey of a lifetime!</p>
                <Link to="/activites">
                    <Button className="mt-4" variant="warning" size="lg">Explore Activites <i className="fa fa-arrow-right"></i></Button>
                </Link>
            </div>
        </div>
    )
}

export default Jumbotron