// Using axios for HTTP requests
import axios from 'axios';

const unsplashAPI = axios.create({
  baseURL: "http://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  }
});

export default unsplashAPI;
