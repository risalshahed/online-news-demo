import { useNavigate } from 'react-router-dom';

export default function EachInternational({ international }) {
  const {title, img, id} = international;

  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/${id}`)

  return (
    <div onClick={handleNavigate}>
      <img src={img} alt={title} />
      <div className="card-body">
        <h2 className="text-xs text-black lg:text-2xl md:text-1xl">{title}</h2>
      </div>
    </div>
  )
}
