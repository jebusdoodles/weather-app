import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import { PropTypes } from "prop-types";
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { api_weather } from './../../constants/api_url';

import transformWeather from './../../services/transformWeather';

class WeatherLocation extends Component {
    constructor(props){
        super(props);
        const { city } = props;

        this.state = {
            city,
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
                    : <CircularProgress size={50} />
                }
            </div>
        );
    }
} 

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation; 