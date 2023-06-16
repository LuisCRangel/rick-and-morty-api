import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import LocationInput from './components/LocationInput'
import Footer from './components/Footer'

function App() {

  const randomId = getRandomNumber(126)
const [inputLocation, setInputLocation] = useState(randomId)
  const url = `https://rickandmortyapi.com/api/location/${inputLocation}`
  const [location, getApiLocation, hasError] = useFetch(url)

  useEffect(() => {
    getApiLocation()
  },[inputLocation])

  return (
    <div className='app'>
   <header>
    <img src="../public/rm1.jpg" alt="" />
    </header> 
    <LocationInput setInputLocation={setInputLocation}/>
    {
        hasError
        ? <h2>❌ Hey! you must provide an id from 1 to 126 😢</h2>
        :
        <>

      <LocationInfo location={location}/>
    <div className='residents'>  
      {
        location?.residents.map(url => (
          <ResidentCard 
          url={url}
          key={url}
          />
          
          )) 
        }   
    </div>
        </>
        }
    <Footer/>
    </div>
  )
}

export default App
