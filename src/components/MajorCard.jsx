import React from 'react'
import './css/MajorCard.css'

function MajorCard(props) {
  const majorData = props.result;

  return (
    <div className='major-card'>
      <div className="img">
        <img className='image' src={majorData.picture.large} alt="profile" />
      </div>
      <div className="text">
        <h1>{majorData.name.title} {majorData.name.first} {majorData.name.last}</h1>
        <p className='address'><span className='street_no'>{majorData.location.street.number}, </span>{majorData.location.street.name}, {majorData.location.city}, {majorData.location.state}, <b>{majorData.location.country}</b>, {majorData.location.postcode}</p>
        <p className='timezone'>{majorData.location.timezone.offset} - {majorData.location.timezone.description}</p>
        <p className='gender'>{majorData.gender.slice(0,1).toUpperCase()}{majorData.gender.slice(1)}</p>
      </div>
    </div>
  )
}

export default MajorCard