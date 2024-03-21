import React from 'react'
import EachInternational from './EachInternational';
import useFetchCategorizedNews from '../../hooks/useFetchCategorizedNews';

export default function InternationalPosts() {
  const news = useFetchCategorizedNews('আন্তর্জাতিক');

  return (
    <div className='flex justify-center my-10'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 sm:mx-8'>
        {
          news?.map(international =>
            <EachInternational key={international.id} international={international} />
          )
        }
      </div>
    </div>
  );
}