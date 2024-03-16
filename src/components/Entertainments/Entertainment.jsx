import React from 'react'

export default function Entertainment({entertainment}) {
    console.log(entertainment);
    const {title, id , img, category,date,description} =entertainment
  return (
    <div className="">
    <figure>{img && <img src={img} alt="" />}</figure>
    <div className="card-body">
  
      <h2 className="card-title">{title}</h2>

    </div>
  </div>
  )
}
