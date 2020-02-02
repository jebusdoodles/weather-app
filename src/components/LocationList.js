import React from 'react';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    };

    const strToComponents = cities => (
        cities.map( city => 
            (
                <WeatherLocation 
                    key={city.key} 
                    city={city.name} 
                    onWeatherLocationClick={ () => handleWeatherLocationClick(city.name)} 
                    data={city.data} />
            ) 
        )
    );

    return(
            <div className='locationList'>
                {
                    strToComponents(cities)
                }
            </div>
    );
};


export default LocationList;
