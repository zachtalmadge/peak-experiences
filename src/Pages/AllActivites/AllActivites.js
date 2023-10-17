import { useState } from 'react'
import { useOutletContext } from "react-router"
import FilterByCategory from '../../Components/FilterByCategory'

const AllActivites = () => {

    let [ activites ] = useOutletContext()
    let [ category, setCategory ] = useState('')

    const changeCategory = (e) => {
        setCategory(e.target.value)
    }

    let filteredActivites = activites.filter(activity => {
        return category ? activity.category.toLowerCase() === category : activity
    })

    return (
        <>
        <FilterByCategory changeCategory={changeCategory} />
        <h1>Hello! I am the All Activities Page!</h1>
        </>
    )
}

export default AllActivites