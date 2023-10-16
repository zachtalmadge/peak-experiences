import { useState, useEffect } from 'react'
let URL = 'http://localhost:3000/bucketListItems'

const AllActivites = () => {

    let [ activites, setActivites ] = useState([])

    useEffect(() => {
        try {
            (async () => {
            let response = await fetch(URL)
            let data = await response.json()
            setActivites(data)
            console.log(activites)
            })()
        } catch(error) {
            alert(error)
        }
    }, [])


    return (
        <h1>Hello! I am the All Activities Page!</h1>
    )
}

export default AllActivites