import useInput from '../../Hooks/customHooks'

const Form = () => {

    // state for for inputs
    let [ nameProp, resetNameProp ] = useInput('')
    let [ imageProp, resetImageProp ] = useInput('')
    let [ locationProp, resetLocationProp ] = useInput('')
    let [ descriptionProp, resetDescriptionProp ] = useInput('')
    let [ categoriesProp, resetCategoriesProp ] = useInput('')
    let [ riskProp, resetRiskProp ] = useInput('')
    

    let submitActivity = (e) => {
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

        let body = JSON.stringify(activity)
        let headers = {"content-type": "application/json"}

        //post fetch call


    }

    return (
        <div className="container my-5">
            <h2>Submit A Bucket List Item</h2>
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

                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </form>
        </div>
    )
}

export default Form