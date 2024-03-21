import React from 'react'
import useFetchNews from '../../hooks/useFetchNews'
import { useNavigate } from 'react-router-dom';

export default function HomeCover() {
  const news = useFetchNews();
  const navigate = useNavigate();

  const sortedNews = news?.sort((a, b) => new Date(b.date) - new Date(a.date));
  // console.log(sortedNews);

  return (
    <div className="flex flex-col md:flex-row gap-x-5 gap-y-3 items-stretch">
      <div className='basis-full relative cursor-pointer' onClick={() => navigate(`/${sortedNews[0]?.id}`)}>
        <div className='absolute top-3 left-3 bg-black opacity-85 text-white px-2 py-1 z-20'>
          {sortedNews[0]?.category}
        </div>
        <img className='w-full h-full' src={sortedNews[0]?.img} alt={sortedNews[0]?.title} />
        <div className='absolute bottom-3 left-3 px-2 text-white hover:text-red-600'>
          <h3 className='font-semibold text-lg sm:text-3xl pb-2'>{sortedNews[0]?.title}</h3>
          <p className='text-white pb-3 hidden md:block'>{sortedNews[0]?.description.slice(0, 200)} [...]</p>
        </div>
      </div>

      <div className='basis-3/4 flex flex-col gap-y-3'>
        <div className='relative cursor-pointer' onClick={() => navigate(`/${sortedNews[1]?.id}`)}>
          <div className='absolute top-3 left-3 bg-black opacity-85 text-white px-2 py-1 z-20'>
            {sortedNews[1]?.category}
          </div>
          <div className='flex gap-x-3'>
            <img className='w-2/3' src={sortedNews[1]?.img} alt={sortedNews[1]?.title} />
            <h3 className='font-semibold text-xl hover:text-red-600'>{sortedNews[1]?.title}</h3>
          </div>
        </div>

        <div className='relative cursor-pointer' onClick={() => navigate(`/${sortedNews[2]?.id}`)}>
          <div className='absolute top-3 left-3 bg-black opacity-85 text-white px-2 py-1 z-20'>
            {sortedNews[2]?.category}
          </div>
          <div className='flex gap-x-3'>
            <img className='w-2/3' src={sortedNews[2]?.img} alt={sortedNews[2]?.title} />
            <h3 className='font-semibold text-xl hover:text-red-600'>{sortedNews[2]?.title}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}