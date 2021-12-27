import React, {useState, useEffect} from 'react'

const WeatherCard = ({tempInfo}) => {

  //weather mood hook
  const [weatherMood, setWeatherMood] = useState("")
  
  //assign object to variable
  const {
    temp,
    humidity,
    pressure,
    myweathermood,
    name,
    speed,
    country,
    sunset
  } = tempInfo

  //set weather mood using effect
  useEffect(() => {
    if(myweathermood){
      switch (myweathermood) {
        case "Clouds":
          setWeatherMood("wi-day-cloudy")
          break;
        case "Haze":
          setWeatherMood("wi-fog")
          break;
        case "Clear":
          setWeatherMood("wi-day-sunny")
          break;
        default:
          setWeatherMood("wi-day-cloudy")
          break;
      }
    }
  }, [myweathermood])

  //convert seconds to time
  let sec = sunset
  let date = new Date(sec * 1000)
  let timeString = `${date.getHours()}:${date.getMinutes()}`
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherMood}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
            <div className="description">
              <div className="weatherCondition">{myweathermood}</div>
              <div className="place">{name}, {country}</div>
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* 4 colum section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunrise"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeString}
                <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>

      </article>
    </>
  )
}

export default WeatherCard
