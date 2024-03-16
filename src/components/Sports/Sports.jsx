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
        <div>
            {
                sports.map(sport => (
                    <Sport key={sport.id} sport={sport} />
                ))
            }
        </div>
    );
};

