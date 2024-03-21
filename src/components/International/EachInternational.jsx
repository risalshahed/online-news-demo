import { useNavigate } from 'react-router-dom';

export default function EachInternational({ international }) {
  const {title, img, id} = international;

  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/${id}`)

  return (
    <div className='cursor-pointer' onClick={handleNavigate}>
      <img src={img} alt={title} />
      <div className="card-body">
        <h2 className="text-md md:text-xl font-semibold hover:text-red-600">{title}</h2>
      </div>
    </div>
  )
}
