export const SET_CITY ='SET_CITY';

export const setCity = (payload)=> ({ type: SET_CITY, payload});

export const api_key="0c1e529959fc5a55f0a36ba5a01d1e81"; 
export const url_base_weather = "http://api.openweathermap.org/data/2.5/forecast";

export const fecthForecast = payload => {
    return dispatch => {
        const url_forecast = `${url_base_weather}?q=${city}&appid=${api_key}`;

        // activar en el estaod un indicador de busqueda

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData); 

                //modificar el estado con el resultado de la promise

            }
        );
        return;
    }
};