import Jumbotron from '../../Components/Jumbotron'
import IntroBlurb from '../../Components/IntroBlurb'
import FeaturedActivites from '../../Components/FeaturedActivites'
import { useOutletContext } from 'react-router'
import pickTwoDistinctRandomElements from '../../Util/pickTwoDistinctRandomElements'

const Home = () => {

    let [ activites ] = useOutletContext()
    let featured = pickTwoDistinctRandomElements(activites)

    return (
        <>
        <Jumbotron />
        <IntroBlurb />
        <FeaturedActivites featured={featured} />
        </>
    )
}

export default Home