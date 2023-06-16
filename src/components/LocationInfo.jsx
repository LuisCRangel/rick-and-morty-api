import React from 'react'

const LocationInfo = ({location}) => {
  
  return (
<section className='location__container'>
  <div className='location__info'>
  <h1 className='location__name'>{location?.name}</h1>
 <ul className='location__list-info'>
  <li className='location__subtitle'>Type:<span >{location?.type}</span></li>
  <li className='location__subtitle'>Dimension:<span >{location?.dimension}</span></li>
  <li className='location__subtitle'>Population:<span >{location?.residents.length}</span></li>
 </ul>
  </div>
</section>
  )
}

export default LocationInfo