import React, { useRef } from 'react'

const LocationInput = ({setInputLocation}) => {

  const inputValue = useRef()
  const handleSubmit = e => {
    e.preventDefault()
    const idLocationValue = inputValue.current.value.trim()
    if(idLocationValue !== ''){
      setInputLocation(idLocationValue)
      inputValue.current.value = ''
    }
  }

  return (
    <div className='location__form'>
      <form onSubmit={handleSubmit}>
        <input ref={inputValue} className='location__form-inp' type="text" placeholder='Insert id location from 1 to 126' />
        <button className='location__form-btn'>Search</button>
      </form>
    </div>
  )
}

export default LocationInput