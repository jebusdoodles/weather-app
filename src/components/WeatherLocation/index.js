import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN } from '../../constants/weathers';
import { api_weather } from './../../constants/api_url';

import transformWeather from './../../services/transformWeather';


const data = {
    temperature: 7, 
    weatherState: SUN, 
    humidity: 10,
    wind: '10 m/s',
}


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: "Buenos Aires",
            data: data, 
        };
    }

    componentDidMount() {
        console.log('');
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('');
    }
    
    componentWillMount() {
        this.handleUpdateClick();
    }
    
    componentWillUpdate() {
        console.log('UNSAFE componentwilllMoint ');
    }
    
    

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            console.log('resultado del handleUpdateClick')
            const newWeather = transformWeather(data); 

            console.log(newWeather); 
            this.setState({
                data: newWeather
            });
            
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