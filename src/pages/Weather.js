import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState();
  const [temp_c, settemp_c] = useState();
  const [humidity, setHumidity] = useState();
  const [wind_kph, setWind_kph] = useState();
  const [text, setText] = useState();
  const [wimage, setWimage] = useState();
  const getCityWeather = async () => {
    axios
      .get("https://api.weatherapi.com/v1/current.json?q="+city+"&key=968f7ff3207343d795c151307241508")
      .then((response) => {
        if (response.data.current) {
          // alert("weather successfully!");
          settemp_c(response.data.current.temp_c);
          setHumidity(response.data.current.humidity);
          setWind_kph(response.data.current.wind_kph); 
          setText(response.data.current.condition.text);   
          setWimage(response.data.current.condition.icon);     
        } else {
          alert("Failed to get weather!");
        }
      });
  }
  return (
  <>
  <Header />

  {/* <select className='form-control form-select'>
    <option value="">Select City</option>
    <option value="lagos">Lagos</option>
    <option value="Edo">Edo</option>
    <option value="Abuja">Abuja</option>
    <option value="Delta">Delta</option>
  </select> */}
  <input type='text' className='form-control' value={city} onChange={(e) => (setCity(e.target.value))} />
  <button onClick={getCityWeather}>Search</button>

  <div className='card shadow col-md-6 bg-primary-subtle mx-auto'>
    <div className='card-body'>
      <h5 className='card-title'>Weather Information</h5>
      <img src={wimage} /> 
      <p className='card-text'>City: {city}</p>
      <p className='card-text'>Temperature: {temp_c}°C</p>
      <p className='card-text'>Humidity: {humidity}%</p>
      <p className='card-text'>Wind Speed: {wind_kph} km/h</p>
      <p className='card-text'>Condition: {text}</p>
    </div>
  </div>
  <Footer />
  
  </>
  )
}

export default Weather