import { SET_FORECAST_DATA } from './../actions'; 

export const cities = (state = {}, action) => {
    switch(action.type){
        case SET_FORECAST_DATA:
            const { city, forecastData } = action.payload;
            //en caso de recibir informacion la almacena en un reducer 
            //emacscript 6 
            return { ...state, [city]: {forecastData}}; 
    }
}