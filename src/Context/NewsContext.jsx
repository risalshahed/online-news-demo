import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <NewsContext.Provider value={{ val1: [ data, setData ], val2: [isLoading, setIsLoading], location }}>
      {children}
    </NewsContext.Provider>
  );
};