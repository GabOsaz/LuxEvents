import axios from 'axios';

const publicFetch = axios.create({
  baseURL: 'https://lux-client-api.herokuapp.com/api'
});

export { publicFetch };
