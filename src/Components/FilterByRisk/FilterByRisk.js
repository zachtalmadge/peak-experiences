const FilterByRisk = ({changeRiskFilter}) => {
    return (
        <div className="col-md-6 mb-3">
            <label htmlFor="risk" className="form-label">Filter By Risk</label>
            <select
                onChange={changeRiskFilter}
                className="form-select"
                id="risk"
                name="risk"
                required
            >
                <option value="">Select A Risk Level</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
    )
}

export default FilterByRisk