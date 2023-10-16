const Form = () => {
    return (
        <div className="container my-5">
        <h2>Submit A Bucket List Item</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" required />
            </div>
    
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input type="url" className="form-control" id="image" name="image" required />
            </div>
    
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" className="form-control" id="location" name="location" required />
            </div>
    
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" name="description" rows="3" required></textarea>
            </div>
    
            <div className="mb-3">
                <label htmlFor="categories" className="form-label">Categories</label>
                <input type="text" className="form-control" id="categories" name="categories" required />
            </div>
    
            <div className="mb-3">
                <label htmlFor="risk" className="form-label">Risk</label>
                <select className="form-select" id="risk" name="risk" required>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
    
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}

export default Form