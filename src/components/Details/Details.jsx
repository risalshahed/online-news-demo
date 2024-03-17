import React, { useContext } from 'react'
import { AuthContext } from '../../Context/useNewContext'
import { useParams } from 'react-router-dom';
import Detail from './Detail';

export default function Details() {
  const { id } = useParams();
  const{ data }= useContext(AuthContext)

  // Find data corresponding to the provided ID
  const item = data.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>No data found for the provided ID</div>;
  }

  return (

<div class="flex lg:flex-row flex-col">
<div class="lg:w-2/3 w-[100%]">
    <div key={item.id}>
       <Detail item={item}></Detail>
    </div>
    </div>
  <div class="lg:w-1/3 w-[100%]">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iste.</p>
  </div>
 
  </div>
    
  );
};
  

