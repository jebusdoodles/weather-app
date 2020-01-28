import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { getForecastDataFromCities, getCity } from './../reducers';
import ForecastExtended from './../components/ForecastExtended'

class ForecastExtendedContainer extends Component{
    render(){
        const { city, forecastData } = this.props; 
        return(
            city &&  
            <ForecastExtended city={city} forecastData={forecastData} />
        ); 
    }
}
 //destructuring del state ->
 //En el siguiente punto le hacemos conocer que dentro de cities hay un diccionario ForecastData 
const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) }); 

export default connect(mapStateToProps, null)(ForecastExtendedContainer);