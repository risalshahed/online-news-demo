import React from 'react'

export default function Detail({item}) {
    const {title, id , img} = item
    console.log(item);
  return (
    <div>
        <div>
             <p>{title}</p>
             <img src={img} alt="" srcset="" />
        </div>
    </div>
  )
}
