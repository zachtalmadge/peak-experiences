import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import BucketListCard from '../BucketListCard'
import { Link } from 'react-router-dom'

const FeaturedActivites = ({ featured }) => {
    
    return (
        <Container className="my-5">
            <h1 className="text-center">Featured Activites</h1>
            <Row>
                <Col>
                    {featured ? <BucketListCard {...featured[0]} /> : '' }
                </Col>
                <Col>
                    {featured ? <BucketListCard {...featured[1]} /> : '' }
                </Col>
            </Row>
            <Row className="text-center my-5">
                <Col>
                    <Link to="/activites">
                        <Button variant="warning" size="lg">
                            View More Activites <i className="fa fa-arrow-right"></i>
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default FeaturedActivites