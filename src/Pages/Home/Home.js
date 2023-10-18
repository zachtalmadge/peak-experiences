import Jumbotron from '../../Components/Jumbotron'
import IntroBlurb from '../../Components/IntroBlurb'
import FeaturedActivites from '../../Components/FeaturedActivites'
import {useOutletContext} from 'react-router'

const Home = () => {

    return (
        <>
        <Jumbotron />
        <IntroBlurb />
        <FeaturedActivites/>
        </>
    )
}

export default Home