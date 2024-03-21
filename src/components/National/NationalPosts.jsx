import React from 'react'
import EachNaitonal from './EachNaitonal';
import useFetchCategorizedNews from '../../hooks/useFetchCategorizedNews';

export default function NationalPosts() {
  const news = useFetchCategorizedNews('জাতীয়');

  return (
    <div className='flex justify-center my-10'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          news?.map(national =>
            <EachNaitonal key={national.id} national={national} />
          )
        }
      </div>
    </div>
  );
}