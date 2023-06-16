
import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const ResidentCard = ({url}) => {

  const [resident, getApiResident] = useFetch(url)

  useEffect(()=>{
    getApiResident()
  },[])
  
  return (
    <div className='resident__card'>
      <img className='resident__card-img' src={resident?.image} alt="" />
      <h2 className='resident__card-name'>{resident?.name}</h2>
      <hr />
      <ul className='resident__card-info'>
        <li>Specie <span>{resident?.species}</span></li>
        <li>Origin <span>{resident?.origin.name}</span></li>
        <li>Episode <span>{resident?.episode.length}</span></li>
      </ul>
      <div className='status'>
        <div className={`circle circle-${resident?.status}`}></div>      
        <h3>{resident?.status}</h3>
      </div>
    </div>
  )
}

export default ResidentCard