import axios from 'axios';
//https://free.currconv.com/api/v7/
//convert?q=USD_BRL&compact=ultra&apiKey=93540d12e5b3eed1e883
const api = axios.create({
  baseURL:'https://free.currconv.com/api/v7'
});

export default api ;