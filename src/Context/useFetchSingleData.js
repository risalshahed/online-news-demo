import { useEffect, useState } from 'react'

export default function useFetchSingleData(id) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch('posts.json');
    const data = await res.json();
    const singleData = data?.find(datum => datum.id === parseFloat(id));
    setData(singleData);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return data;
}