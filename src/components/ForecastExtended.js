import React from 'react';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = (forecastData) =>{
    //return <h1>Render items</h1>; 
    return forecastData.map( forecast => (
        <ForecastItem
            key={`${forecast.weekDay}${forecast.hour}`} 
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data} 
        />));
}

const renderProgress = () => {
    return <h1>Cargando información extendido</h1>;
}

const ForecastExtended = ({ forecastData, city }) =>(
            <div>
                <h2 className='forecast-title'>Pronostico extendido para {city}</h2>
                {forecastData?
                    renderForecastItemDays(forecastData):
                    renderProgress()}
            </div>
);

export default ForecastExtended;