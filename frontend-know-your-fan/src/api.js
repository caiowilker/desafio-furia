import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8080/api/fans',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Erro de resposta:', error.response);
    } else if (error.request) {
      console.error('Erro na requisição:', error.request);
    } else {
      console.error('Erro geral:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
