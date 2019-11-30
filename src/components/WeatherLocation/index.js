import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUDY, 
} from './../../constants/weathers';
import { SUN } from '../../constants/weathers';

const data = {
    temperature: 7, 
    weatherState: SUN, 
    humidity: 10,
    wind: '10 m/s',
}


const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={'Guadalajara'} />
        <WeatherData data={data} />
    </div>
); 

export default WeatherLocation; 