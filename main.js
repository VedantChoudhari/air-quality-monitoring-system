
import React, { useState, useEffect } from 'react';
import './App.css';
import { FaTemperatureHigh, FaTint, FaCloud } from 'react-icons/fa';

function App() {
  const [temperature, setTemperature] = useState('--');
  const [humidity, setHumidity] = useState('--');
  const [airQuality, setAirQuality] = useState('--');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data'); // for api 
      const data = await response.json();
      setTemperature(data.temperature);
      setHumidity(data.humidity);
      setAirQuality(data.airQuality);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getAirQualityColor = () => {
    if (airQuality >= 0 && airQuality < 50) {
      return 'green';
    } else if (airQuality >= 50 && airQuality < 100) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return (
    <div className="page light">
      <h1>Environment Monitoring</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="data">
        <div className="item temperature">
          <FaTemperatureHigh size={32} />
          <h2>Temperature</h2>
          <p className="big-font">{temperature} °C</p>
        </div>
        <div className="item air-quality">
          <FaCloud size={32} />
          <h2>Air Quality</h2>
          <div className="air-quality-slider" style={{ backgroundColor: getAirQualityColor(), width: `${airQuality}%` }}></div>
          <p className="big-font">{airQuality}</p>
        </div>
        <div className="item humidity">
          <FaTint size={32} />
          <h2>Humidity</h2>
          <p className="big-font">{humidity} %</p>
        </div>
      </div>
    </div>
  );
}

export default App;
