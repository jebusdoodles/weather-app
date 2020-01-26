import React, { Component } from 'react';
import { connect } from 'react-redux'; 
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

const mapStateToProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData }); 

export default connect(mapStateToProps, null)(ForecastExtendedContainer);