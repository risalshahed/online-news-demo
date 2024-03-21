import useFetchCategorizedNews from '../../hooks/useFetchCategorizedNews';
import EachSport from './EachSport';

export default function Sports() {
  const news = useFetchCategorizedNews('খেলাধুলা');

  return (
    <div className='flex justify-center my-10'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 sm:mx-8'>
        {
          news?.map(sport =>
            <EachSport key={sport.id} sport={sport} />
          )
        }
      </div>
    </div>
  );
};