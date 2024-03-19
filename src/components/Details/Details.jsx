import { useParams } from 'react-router-dom'
import useFetchSingleData from '../../Context/useFetchSingleData';

export default function Details() {
  const { id } = useParams();
  // console.log(id);

  const singleData = useFetchSingleData(id);

  // if (isLoading || !singleData) return <div>Loading...</div>;

  return (
    <div className='max-w-[1200px] mx-auto my-10'>
      <h2 className='text-4xl text-center font-bold'>{singleData.title}</h2>
      <img className='mx-auto my-8 rounded-2xl' src={singleData.img} alt={singleData.title} />
      <p className='text-justify'>{singleData.description}</p>
    </div>
  )
}