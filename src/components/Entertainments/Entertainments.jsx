import React, { useEffect, useState } from 'react';
import Entertainment from './Entertainment';

export default function Entertainments() {
    const [entertainments, setEntertainments] = useState([]);

    useEffect(() => {
        fetch('posts.json')
            .then(res => res.json())
            .then(data => {
                const nationalData = data.filter(item => item.category === 'বিনোদন');
                console.log(nationalData);
                setEntertainments(nationalData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []); 
  

    return (
       <div className='flex justify-center mx-8 my-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                entertainments.map(entertainment => (
                    <Entertainment key={entertainment.id} entertainment={entertainment} />
                ))
            }
        </div>
       </div>
    );
};

