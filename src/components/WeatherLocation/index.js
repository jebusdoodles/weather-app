import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

/* 

    componentDidMount() {
        this.handleUpdateClick();
    }
    
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data); 
            this.setState({
                data: newWeather
            });
        });
    }


*/
const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city} />
        {data ? 
            <WeatherData data={data} />
            : <CircularProgress size={50} />
        }
    </div>
);


export default WeatherLocation; 