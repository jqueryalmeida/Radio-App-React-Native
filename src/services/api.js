import axios  from 'axios';
const api = axios.create({
    baseURL:'http://www.inconfidencia.com.br'
});
export default api;