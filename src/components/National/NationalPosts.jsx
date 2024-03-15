import React, { useEffect, useState } from 'react'

export default function NationalPosts() {
  const [nationals, setNationals] = useState([]);

  const fetchNationals = async () => {
    const res = await fetch('posts.json');
    const data = await res.json();
    setNationals(data);
  }

  useEffect(() => {
    fetchNationals();
  }, [])

  const nationalData = nationals?.filter(national => national.category === 'জাতীয়').map(national =>
    <div>
      <img src={national.img} alt={national.title} />
      <div>{national.title}</div>
      <div>{national.description}</div>
    </div>
  )

  return (
    <div className='grid grid-cols-3 gap-x-5'>
      {nationalData}
    </div>
  )
}
