import React from 'react'
import useFetchNews from '../../hooks/useFetchNews'
import { useNavigate } from 'react-router-dom';

export default function HomeCover() {
  const news = useFetchNews();
  const navigate = useNavigate();

  const sortedNews = news?.sort((a, b) => new Date(b.date) - new Date(a.date));
  // console.log(sortedNews);

  const subHeading = sortedNews?.map(sorted => (
    <div className='relative cursor-pointer' onClick={() => navigate(`/${sorted.id}`)}>
      <div className='absolute top-3 left-3 bg-black opacity-85 text-white px-2 py-1 z-20'>
        {sorted.category}
      </div>
      <div className='flex flex-col sm:flex-row gap-x-3 gap-y-2'>
        <img className='w-full sm:w-2/3' src={sorted.img} alt={sorted.title} />
        <h3 className='font-semibold text-xl hover:text-red-600'>{sorted.title}</h3>
      </div>
    </div>
  )).slice(1, 3);

  return (
    <div className="flex flex-col md:flex-row gap-x-5 gap-y-3 items-stretch">
      {/* Main Headline News */}
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
      {/* END of Main Headline News */}

      {/* Sub (Secondary) Headline */}
      <div className='basis-3/4 flex flex-col gap-y-3'>
        {subHeading}
      </div>
    </div>
  )
}