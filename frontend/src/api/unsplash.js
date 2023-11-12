// Using axios for HTTP requests
import axios from 'axios';

console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY);

const unsplash = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
    }
  });
  

export default unsplash;