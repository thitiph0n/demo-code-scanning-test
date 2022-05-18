import axios from 'axios';

const API_KEY = process.env.UNSPLASH_API_KEY;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});
