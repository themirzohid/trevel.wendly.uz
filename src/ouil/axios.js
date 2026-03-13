import axios from "axios";

const instance = axios.create({
  baseURL: 'https://6930159d778bbf9e006fc2c5.mockapi.io/pweoedjdio112',
  headers: {'Content-Type': 'application/json'}
});

export default instance