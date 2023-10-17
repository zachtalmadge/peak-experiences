import { useState } from 'react'

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

export default useInput