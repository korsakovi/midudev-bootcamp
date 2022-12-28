import { useEffect, useState } from "react";
import axios from "axios";

export default function Weather({ capital }) {
 const [weatherData, setWeatherData] = useState([]);

 useEffect(() => {
  axios
   .get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER}`
   )
   .then((res) => {
    console.log(res.data);
    setWeatherData(res.data);
   })
   .catch((err) => {
    console.log(err);
   });
 }, []);

 console.log(weatherData);

 return (
  <div>
   {weatherData.main ? (
    <>
     <strong>Weather in {capital}</strong>
     <br />
     <p>
      <b>Temperature:</b> {weatherData.main.temp} Celsius
     </p>
     <img
      style={{ filter: "invert(100%)" }}
      alt="weather icon"
      src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
     />
     <div>Wind {weatherData.wind.speed} m/s</div>
    </>
   ) : null}
  </div>
 );
}
