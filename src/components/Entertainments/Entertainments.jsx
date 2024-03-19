import useCategoryData from '../../Context/useCategoryData';
import Entertainment from './Entertainment';

export default function Sports() {
  const data = useCategoryData('বিনোদন');

  return (
    <div className='max-w-[1200px] flex justify-center mx-auto my-10'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          data?.map(entertainment =>
            <Entertainment key={entertainment.id} entertainment={entertainment} />
          )
        }
      </div>
    </div>
  );
};