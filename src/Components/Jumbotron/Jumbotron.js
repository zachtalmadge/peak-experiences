import Button from 'react-bootstrap/Button'

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                <h1 className="display-4">Peak Experiences</h1>
                <p className="lead">Unlock a world of unforgettable experiences with Peak Experiences, your personalized gateway to explore, discover, and track awe-inspiring activities tailored to turn your dream bucket list into a journey of a lifetime!</p>
                <Button variant="primary">Explore Activites</Button>
            </div>
        </div>
    )
}

export default Jumbotron