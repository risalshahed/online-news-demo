import React from 'react'
import { Link } from 'react-router-dom';

export default function Sport({sport}) {
    console.log(sport);
   const {title, img, id, description, date, category} = sport
  return (
    <Link to={`/details/${id}`}>
     <div className="">
    <figure>{img && <img src={img} alt="Sports" />}</figure>
    <div className="card-body">
      <h2 className="text-xs text-black lg:text-2xl md:text-1xl">{title}</h2>
    </div>
  </div>
     </Link>
  )
}
