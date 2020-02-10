import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div className='weatherLocationCont' onClick={onWeatherLocationClick} >
                <Location city={city} />
        {data ? <WeatherData data={data} /> : 
        <CircularProgress size={50} thickness={7} />}
    </div>
);


export default WeatherLocation; 