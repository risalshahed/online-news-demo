import useFetchNews from '../../hooks/useFetchNews';
import { useNavigate } from 'react-router-dom';

export default function TopHomeNews() {
  const news = useFetchNews();
  const navigate = useNavigate();

  const sortedNews = news?.sort((a, b) => new Date(b.date) - new Date(a.date));

  const topNews = (
    sortedNews?.map(eachNews =>
      <div className='flex flex-col gap-y-2 cursor-pointer' onClick={() => navigate(`/${eachNews.id}`)}>
        <img src={eachNews.img} alt={eachNews.title} />
        <h2 className="text-sm md:text-lg lg:text-xl font-semibold">{eachNews.title}</h2>
      </div>
    ).slice(3, 15)
  )
    

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 my-8'>
      {topNews}
    </div>
  )
}
