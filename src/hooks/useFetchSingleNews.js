import { useEffect, useState } from 'react'

export default function useFetchSingleNews(id) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async () => {
    setIsLoading(true);
    const res = await fetch('posts.json');
    const news = await res.json();
    const singleNews = news?.find(eachNews => eachNews.id === parseFloat(id));
    setNews(singleNews);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchNews();
  }, [])

  return news;
}