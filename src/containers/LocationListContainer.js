import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather, GET_WEATHER_CITY } from './../actions';
import { getWeatherCities } from './../reducers';
import LocationList from './../components/LocationList'; 

class LocationListContainer extends Component{

    componentDidMount(){
        this.props.setWeather(this.props.cities); 
    }

    handleSelectedLocation = city => {
        this.props.setCity(city); 
      }

    render(){
        return (
            <LocationList 
                cities={this.props.citiesWeather} 
                onSelectedLocation={this.handleSelectedLocation}
            />  
        );
    }
}

const mapDispatchToProps = dispatch => ({
      setCity: value => dispatch(setSelectedCity(value)),
      setWeather: cities => dispatch(setWeather(cities))
    });

const mapStateToProps = state => ({citiesWeather: getWeatherCities(state)});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer); 
