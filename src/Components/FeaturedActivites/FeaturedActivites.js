import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BucketListCard from '../BucketListCard'
import { useFetch } from '../../Hooks/customHooks'
let URL1 = "http://localhost:3000/bucketListItems";


const FeaturedActivites = () => {

    let { data } = useFetch(URL1)

    function pickTwoDistinctRandomElements(arr) {
        if (arr.length < 2) {
            console.log('Not enough elements in the array to pick two distinct items.');
            return null;
        }
    
        const index1 = Math.floor(Math.random() * arr.length);
        let index2;
    
        do {
            index2 = Math.floor(Math.random() * arr.length);
        } while (index1 === index2);
    
        return [arr[index1], arr[index2]];
    }

    let featured = pickTwoDistinctRandomElements(data)
    

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
        </Container>
    )
}

export default FeaturedActivites