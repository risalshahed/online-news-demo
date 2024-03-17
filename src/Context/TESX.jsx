import React from 'react';
import { useSportsContext } from './SportsContext';

function YourComponent() {
  const { getFilteredData } = useSportsContext();

  // Get filtered data for specific categories
  const footballData = getFilteredData('football');
  const basketballData = getFilteredData('basketball');

  // Use filtered data in your component

  return (
    <div></div>
  );
}

export default YourComponent;





/* 

import { createContext, useContext, useState, useEffect } from 'react';

const NewsContext = createContext();

export function useNewsContext() {
  return useContext(NewsContext);
}

export function NewsProvider({ children }) {
  const [NewsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch('posts.json')
      .then(res => res.json())
      .then(data => {
        setNewsData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const getFilteredData = category => {
    return NewsData.filter(item => item.category === category);
  };

  return (
    <NewsContext.Provider value={{ getFilteredData }}>
      {children}
    </NewsContext.Provider>
  );
}

*/




/* 


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

*/