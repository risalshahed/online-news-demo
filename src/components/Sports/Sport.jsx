import React from 'react'

export default function Sport({sport}) {
    console.log(sport);
   const {title} = sport
  return (
    <div>{title}</div>
  )
}
