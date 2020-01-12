import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import './styles.css';
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
        // Es importante ejecutarlo la primera vez 
        this.updateCity(this.props.city); 
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({ forecastData:null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url_base_weather}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData); 
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays(forecastData){
        //return <h1>Render items</h1>; 
        return forecastData.map( forecast => (
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`} 
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data} 
            />));
    }

    renderProgress = () => {
        return <h1>Cargando información extendido</h1>;
    }

    render(){
        const { city } = this.props;
        const { forecastData } = this.state; 

        return(
            <div>
                <h2 className='forecast-title'>Pronostico extendido para {city}</h2>
                {forecastData?
                    this.renderForecastItemDays(forecastData):
                    this.renderProgress()}
            </div>
        );
    }
}

export default ForecastExtended;