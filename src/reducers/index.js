import { combineReducers } from 'redux'; 
import { cities, getForecastDataFromCities as _getForecastDataFromCities } from './cities';
import { city } from './city';

export default combineReducers({
    cities,
    city
});

//selector
export const getCity = state => state.city; 
// refactorización para abstraer forecastData
export const getForecastDataFromCities = state => (_getForecastDataFromCities(state.cities, getCity(state))); 