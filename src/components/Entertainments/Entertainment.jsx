import React from 'react'
import { Link } from 'react-router-dom';

export default function Entertainment({entertainment}) {
    console.log(entertainment);
    const {title, id , img, category,date,description} =entertainment
  return (
    <Link to={`/details/${id}`}>
    <div className="">
    <figure>{img && <img src={img} alt="" />}</figure>
    <div className="card-body">
  
      <h2 className="card-title text-black">{title}</h2>

    </div>
  </div>
  </Link>
  )
}
