import React from 'react'
import EachInternational from './EachInternational';
import useCategoryData from '../../Context/useCategoryData';

export default function InternationalPosts() {
  const data = useCategoryData('আন্তর্জাতিক');

  return (
    <div className='max-w-[1200px] flex justify-center mx-auto my-10'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          data?.map(international =>
            <EachInternational key={international.id} international={international} />
          )
        }
      </div>
    </div>
  );
}