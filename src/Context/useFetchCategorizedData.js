import { useEffect, useState } from 'react';

export default function useCategoryData(category) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch('posts.json');
    const data = await res.json();
    const categorizedData = await data.filter(datum => datum.category === category);
    setData(categorizedData);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}