import React, { useContext } from 'react'
import { AuthContext } from '../../Context/useNewContext'



export default function National() {
  const {getFilteredData} = useContext(AuthContext)
  console.log(getFilteredData);
  return (
    <div>
         <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, sed sunt molestiae molestias culpa enim sit quaerat. Velit dolorem odio, sapiente rerum ipsam vel pariatur nulla neque dignissimos, assumenda veniam aliquam autem maxime, recusandae consequatur odit aliquid labore ipsum saepe sint enim sed numquam. Magni eaque dicta culpa ullam reprehenderit?</h2>
    </div>
  )
}
