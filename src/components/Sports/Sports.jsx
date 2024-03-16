import React, { useEffect, useState } from 'react';
import Sport from './Sport';

export default function Sports() {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        fetch('posts.json')
            .then(res => res.json())
            .then(data => {
                const nationalData = data.filter(item => item.category === 'খেলাধুলা');
                console.log(nationalData);
                setSports(nationalData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []); 
  

    return (
       <div className='flex justify-center mx-8 my-10'>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                sports.map(sport => (
                    <Sport key={sport.id} sport={sport} />
                ))
            }
        </div>
       </div>
    );
};

