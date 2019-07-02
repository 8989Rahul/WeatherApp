import axios from 'axios';

const API_KEY = 'b1e34ab4f469ae8afd7b4e653c1e16da';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},india`;
    const request = axios.get(url);
    

    return{
        type: FETCH_WEATHER,
        payload : request
    }
}