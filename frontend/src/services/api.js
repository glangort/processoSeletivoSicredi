import axios from 'axios';

const api = axios.create({
  baseURL: 'https://processosicredi.herokuapp.com/',
  
  
});


export default api;
