import { SET_FORECAST_DATA } from './../actions'; 

export const cities = (state = {}, action) => {
    switch(action.type){
        case SET_FORECAST_DATA:
            const { city, forecastData } = action.payload;
            //en caso de recibir informacion la almacena en un reducer 
            //emacscript 6 
            return { ...state, [city]: {forecastData}}; 
        default:
            // en otro caso retorna el estado
            return state; 
    }
}

// Diccionario y sobre este diccionario esta ForecastData
export const getForecastDataFromCities = (state, city) => state[city] && state[city].forecastData; 