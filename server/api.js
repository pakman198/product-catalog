import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ed278a199ad7de1f764618b22c840f8d8f854882728eccc910e97c28def89d50'
  }
});
