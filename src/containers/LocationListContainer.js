import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList'; 

class LocationListContainer extends Component{

    componentDidMount(){
        //Se facilita la legibilidad de la aplicación
        const { setWeather, setSelectedCity, cities, city } = this.props; 
        setWeather(cities); 
        //cargar estado inicial como la ciudad de Buenos aires
        setSelectedCity(city); 
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city); 
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

/* const mapDispatchToProps = dispatch => ({
      setCity: value => dispatch(setSelectedCity(value)),
      setWeather: cities => dispatch(setWeather(cities)),
    }); */

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch); 

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer); 
