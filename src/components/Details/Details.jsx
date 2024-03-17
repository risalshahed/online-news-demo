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
    <div key={item.id}>
       <Detail item={item}></Detail>
    </div>
  );
};
  

