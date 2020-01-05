import React from 'react'
import WeatherIcons from 'react-weathericons'
import {
    CLOUD, 
    SUN,
    RAIN,
    SNOW,
    DRIZZLE,
    THUNDER,
} from './../../../constants/weathers';
import './styles.css';
const icons = {
    [CLOUD]: "cloud",
    [SUN]: "wi-day-sunny", 
    [RAIN]: "rain", 
    [SNOW]: "snow",
    [DRIZZLE]: "day-showers",
    [THUNDER]: "day-thunderstore",
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    
    const sizeIcon="2x"

    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={ sizeIcon } />;
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={ sizeIcon } />;
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` Cº`}</span>
    </div>
); 

export default WeatherTemperature;