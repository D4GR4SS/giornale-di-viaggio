import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Card(props) {
  return (
    <div className='card'>
      <div className='card-img-box'>
        <img src={props.imageUrl} className='card-img' />
      </div>

      <div className='card-infos'>
        <div className='card-location'>
          <h3 className='card-location-title'>
            <FaMapMarkerAlt className='location-icon' />
            {props.location}
          </h3>
          <a
            href={props.googleMapsUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='card-location-link'
          >
            View on Google Maps
          </a>
        </div>
        <div className='card-info'>
          <h2 className='card-title'>{props.title}</h2>
          <p className='card-date'>
            {props.startDate} - {props.endDate}
          </p>
          <p className='card-description'> {props.description}</p>
        </div>
      </div>
    </div>
  );
}
