import React from 'react'
import EachNaitonal from './EachNaitonal';
import useCategoryData from '../../Context/useFetchCategorizedData';

export default function NationalPosts() {
  const data = useCategoryData('জাতীয়');

  return (
    <div className='max-w-[1200px] flex justify-center mx-auto my-10'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          data?.map(national =>
            <EachNaitonal key={national.id} national={national} />
          )
        }
      </div>
    </div>
  );
}
