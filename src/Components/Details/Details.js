import React from 'react'

function Details({name, image, description, category, risk, id}) {
    
console.log("this is coming from the details component:",name, image, description, category, risk, id)
  return (
    <div>
    <img src={image} alt={name} />
    <div>
      <h2>{name}</h2>
      <p>{category}</p>
      <p>{risk}</p>
      <p>{description}</p>
    </div>
    <button data-activity-id={id}>
      Add to Bucket List
    </button>
  </div>
  )
}

export default Details