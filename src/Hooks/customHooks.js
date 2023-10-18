import { useEffect, useState } from 'react'

export const useInput = initialValue => {

    // This is a custom hook to encapsulate input state functionality
    // takes in inital in put as argument "usually an empty string" and returns an array
    // first element in array can be spread into all input elements {...nameOfInput}
    // the second eleement is a function that easily resets the form value upon successful submission

    const [value, setValue] = useState(initialValue)

    return [
        { value, onChange: e => setValue(e.target.value) },
        () => setValue(initialValue)
    ]
}

export function useFetch(uri) {

    // this is a custom hook to encapsulate fetch and useEffect functionality
    // it returns an object containing 3 states for conditional rendering and a setData function

    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!uri) return
        fetch(uri)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [uri])

    return { loading, data, error, setData }
}