import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import WeatherData from './WeatherLocation/WeatherData';
import transformForecast from './../services/transformForecast';

/*
const days= [
    'Lunes', 
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
};
*/

export const api_key="0c1e529959fc5a55f0a36ba5a01d1e81"; 
export const url_base_weather = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount(){
        const url_forecast = `${url_base_weather}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays(){
        return <h1>Render items</h1>; 
        //return days.map( day => (<ForecastItem weekDay={day} hour={10} data={data} />));
    }

    renderProgress = () => {
        return <h1>Cargando pronostico extendido</h1>;
    }

    render(){
        const { city } = this.props;
        const { forecastData } = this.state; 

        return(
            <div>
                <h2 className='forecast-title'>Pronostico extendido para {city}</h2>
                {forecastData?
                    this.renderForecastItemDays():
                    this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;