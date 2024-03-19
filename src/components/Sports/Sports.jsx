import useCategoryData from '../../Context/useFetchCategorizedData';
import Sport from './Sport';

export default function Sports() {
  const data = useCategoryData('খেলাধুলা');

  return (
    <div className='max-w-[1200px] flex justify-center mx-auto my-10'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          data?.map(sport =>
            <Sport key={sport.id} sport={sport} />
          )
        }
      </div>
    </div>
  );
};