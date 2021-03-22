import React, {useState, useEffect} from 'react';
import Hotel from './Hotel';
import LoadingMask from './LoadingMask';
import './App.css'

const App = () => {

  const [loadingHotels, setLoadingHotels] = useState(false);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    setLoadingHotels(true);
    fetch("api/hotels")
      .then(res => res.json())
      .then(data => setHotels(data))
      .finally(() => setLoadingHotels(false))
  }, [])
  


  return (
    <div className="App">
      <h2>Hotels</h2>
      {loadingHotels && <LoadingMask />}
      {hotels.map(hotel => <Hotel key={hotel.name} name={hotel.name} details={hotel.stars + hotel.city} />)}
    </div>
  )
}

export default App
