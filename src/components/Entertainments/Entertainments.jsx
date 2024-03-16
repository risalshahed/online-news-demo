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
        <div>
            {
                entertainments.map(entertainment => (
                    <Entertainment key={entertainment.id} entertainment={entertainment} />
                ))
            }
        </div>
    );
};

