import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.shadzi.net/api/',
    timeout: 3000,

});

export const addressLocation = axios.create({
    baseURL: 'https://api.cedarmaps.com/v1/geocode/cedarmaps.streets/',
    timeout: 3000,

});



