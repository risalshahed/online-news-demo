import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { NewsContext } from '../../Context/NewsContext';

export default function Details() {
  const { id } = useParams();
  // console.log(id);

  const {val1, val2} = useContext(NewsContext);
  const [data] = val1;
  const [isLoading] = val2;

  const singleNews = data?.find(datum => datum.id === parseFloat(id));

  if (isLoading || !singleNews) return <div>Loading...</div>;

  return (
    <div className='max-w-[1200px] mx-auto my-10'>
      <h2 className='text-4xl text-center font-bold'>{singleNews.title}</h2>
      <img className='mx-auto my-8 rounded-2xl' src={singleNews.img} alt={singleNews.title} />
      <p className='text-justify'>{singleNews.description}</p>
    </div>
  )
}