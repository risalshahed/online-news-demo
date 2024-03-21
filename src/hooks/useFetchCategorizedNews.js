import { useEffect, useState } from 'react';

export default function useFetchCategorizedNews(category) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async () => {
    setIsLoading(true);
    const res = await fetch('posts.json');
    const news = await res.json();
    const categorizedNews = await news.filter(eachNews => eachNews.category === category);
    setNews(categorizedNews);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return news;
}