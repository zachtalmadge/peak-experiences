import React from 'react'
import {Link} from "react-router-dom"

function Details({name, image, description, category, risk, id}) {
    
  return (
    <div>
    <img src={image} alt={name} />
    <div>
      <h2>{name}</h2>
      <p>{category}</p>
      <p>{risk}</p>
      <p>{description}</p>
    </div>
    <Link to={'/activites'}>
    <button data-activity-id={id}>
     All Activities
    </button>
    </Link>
  </div>
  )
}

export default Details