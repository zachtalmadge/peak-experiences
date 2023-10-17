const FilterByCategory = ({ setCategory }) => {
    return (
        <div className="col-md-6 mb-3">
            <label htmlFor="risk" className="form-label">Filter By Category</label>
            <select
      
                className="form-select"
                id="risk"
                name="risk"
                required
            >
                <option value="">All</option>
                <option value="sight seeing">Sight Seeing</option>
                <option value="extreme sports">Extreme Sports</option>
                <option value="travel">Travel</option>
                <option value="nature">Nature</option>
            </select>
        </div>
    )
}

export default FilterByCategory