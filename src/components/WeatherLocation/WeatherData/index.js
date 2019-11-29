import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import './styles.css';
import {
    CLOUDY, 
} from './../../../constants/weathers';

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={20} weatherState={CLOUDY} />        
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WeatherData;