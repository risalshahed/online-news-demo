import { useParams } from 'react-router-dom'
import useFetchSingleNews from '../../hooks/useFetchSingleNews';

export default function Details() {
  const { id } = useParams();
  
  const singleNews = useFetchSingleNews(id);
  const { title, img, description } = singleNews;

  // if (isLoading || !singleNews) return <div>Loading...</div>;

  return (
    <div className='max-w-[1200px] mx-auto my-10'>
      <h2 className='text-4xl text-center font-bold'>{title}</h2>
      <img className='mx-auto my-8 rounded-2xl' src={img} alt={title} />
      <p className='text-justify'>{description}</p>
    </div>
  )
}