import React from 'react'

export default function Entertainment({entertainment}) {
    console.log(entertainment);
    const {title} =entertainment
  return (
    <div>{title}</div>
  )
}
