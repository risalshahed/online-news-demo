import useFetchCategorizedNews from '../../hooks/useFetchCategorizedNews';
import EachEntertainment from './EachEntertainment';

export default function Sports() {
  const news = useFetchCategorizedNews('বিনোদন');

  return (
    <div className='flex justify-center my-10'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          news?.map(entertainment =>
            <EachEntertainment key={entertainment.id} entertainment={entertainment} />
          )
        }
      </div>
    </div>
  );
};