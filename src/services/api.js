import axios from 'axios';

export const key = '5c857c16b50153fcd179707ec421966a84049ed1';
export const baseUrl = 'https://api-ssl.bitly.com/v4/';

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`
  }
});

export default api;

