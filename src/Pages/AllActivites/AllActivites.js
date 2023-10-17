
import { useOutletContext } from "react-router"
import FilterByCategory from '../../Components/FilterByCategory'

const AllActivites = () => {

    let [ activites ] = useOutletContext()

    return (
        <>
        <FilterByCategory/>
        <h1>Hello! I am the All Activities Page!</h1>
        </>
    )
}

export default AllActivites