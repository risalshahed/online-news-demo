import { useContext, useEffect } from 'react';
import { NewsContext } from './NewsContext';

export default function useCategoryData(category) {
  const {val1, val2} = useContext(NewsContext);

  const [data, setData] = val1;
  const [isLoading, setIsLoading] = val2;

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