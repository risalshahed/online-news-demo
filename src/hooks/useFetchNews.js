import { useEffect, useState } from 'react';

export default function useFetchNews() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async () => {
    setIsLoading(true);
    const res = await fetch('posts.json');
    const news = await res.json();
    setNews(news);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return news;
}