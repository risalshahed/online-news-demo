import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function EachSport({sport}) {
  const {title, img, id} = sport;

  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/${id}`)

  return (
    <div className='cursor-pointer' onClick={handleNavigate}>
      <img src={img} alt={title} />
      <div className="card-body">
        <h2 className="text-xs text-black lg:text-2xl md:text-1xl">{title}</h2>
      </div>
    </div>
  )
}