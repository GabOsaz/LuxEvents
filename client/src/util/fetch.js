import axios from 'axios';

const publicFetch = axios.create({
  baseURL: 'http://localhost:5060/api'
});

export { publicFetch };
