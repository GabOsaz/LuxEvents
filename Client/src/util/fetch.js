import axios from 'axios';

const publicFetch = axios.create({
  baseURL: 'http://localhost:5050/api'
});

export { publicFetch };
