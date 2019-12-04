import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { api_weather } from './../../constants/api_url';

import transformWeather from './../../services/transformWeather';

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: "Buenos Aires",
            data: null, 
        };
    }

    componentDidMount() {
        console.log('');
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did update');
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
                {data ? 
                    <WeatherData data={data} />
                    : "Cargando..."
                }
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
} 

export default WeatherLocation; 