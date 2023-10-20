import { useInput } from '../../Hooks/customHooks'
import { useOutletContext } from 'react-router'
import Container from 'react-bootstrap/Container'

const Form = () => {

    let [ activites, , , , setActivites ] = useOutletContext()

    let [ nameProp, resetNameProp ] = useInput('')
    let [ imageProp, resetImageProp ] = useInput('')
    let [ locationProp, resetLocationProp ] = useInput('')
    let [ descriptionProp, resetDescriptionProp ] = useInput('')
    let [ categoriesProp, resetCategoriesProp ] = useInput('')
    let [ riskProp, resetRiskProp ] = useInput('')
    
    const resetFormValues = () => {
        resetNameProp()
        resetImageProp()
        resetLocationProp()
        resetDescriptionProp()
        resetCategoriesProp()
        resetRiskProp()
    }

    let submitActivity = async (e) => {
        e.preventDefault()

        let activity ={
            name: nameProp.value,
            image: imageProp.value,
            location: locationProp.value,
            description: descriptionProp.value,
            category: categoriesProp.value,
            risk: riskProp.value,
            isInList: false
        }

        for (let key in activity){
            if (key !== 'isInList' && activity[key].trim() === ''){
                return alert('Please make sure all inputs are valid!')
            }
        }

        let body = JSON.stringify(activity)
        let headers = {"content-type": "application/json"}

        let response = await fetch('http://localhost:3000/bucketListItems', {method: "POST", headers, body})
        if (response.status === 201){
            alert('Your Bucket List Activity has been added to our database!')
            resetFormValues()
            setActivites([...activites, activity])
        } else {
            console.log("Oh no! There has been an error!")
        }
    }

    return (
        <Container fluid className="bg-dark py-5 text-light">
            <div className="container my-5">
                <h1 className="text-center">Submit A Bucket List Activity</h1>
                <form onSubmit={submitActivity}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                            {...nameProp}
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image URL</label>
                        <input 
                            {...imageProp} 
                            type="text" 
                            className="form-control" 
                            id="image" 
                            name="image" 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input 
                            {...locationProp} 
                            type="text" 
                            className="form-control" 
                            id="location" 
                            name="location" 
                            placeholder="Name of country" 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea 
                            {...descriptionProp}
                            className="form-control" 
                            id="description" 
                            name="description" 
                            rows="3" 
                            placeholder="Enter a brief description of the activity..." 
                            required
                        ></textarea>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="categories" className="form-label">Categories</label>
                            <select 
                                {...categoriesProp} 
                                className="form-select" 
                                id="categories" 
                                name="categories" 
                                required
                            >
                                <option value="">Please select a category</option>
                                <option value="Nature">Nature</option>
                                <option value="Sight Seeing">Sight Seeing</option>
                                <option value="Extreme Sports">Extreme Sports</option>
                                <option value="Travel">Travel</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="risk" className="form-label">Risk</label>
                            <select 
                                {...riskProp} 
                                className="form-select" 
                                id="risk" 
                                name="risk" 
                                required
                            >
                                <option value="">Please select a risk level</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-warning btn-lg">Submit</button>
                </form>
            </div>
        </Container>
    )
}

export default Form