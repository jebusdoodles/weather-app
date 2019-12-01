import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN, WINDY } from '../../constants/weathers';

const location= "Buenos Aires, ar";
const api_key=""; 
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 7, 
    weatherState: SUN, 
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 15, 
    weatherState: WINDY, 
    humidity: 20,
    wind: '30 m/s',
}


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: "Buenos Aires",
            data: data, 
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather);
        console.log("actualizado");

        this.setState({
            data: data2
        });
    }

    render(){
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
} 

export default WeatherLocation; 