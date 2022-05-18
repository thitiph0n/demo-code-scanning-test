import axios from 'axios';

const API_KEY = 'Eb8l_Y6XsSbonRkrxdI0fQcIfpVffqv1tSCarodVG4I';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});
