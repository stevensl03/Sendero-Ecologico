import axios from 'axios';

const API_URL = 'http://192.168.0.25:8080/api/auth';

export const authService = {
  //registro
  async register(user: { name: string; email: string; password: string, role: string}) {
    return await axios.post(`${API_URL}/register`, user);
  },
  //login
  async login(credentials: { email: string; password: string }) {
    return await axios.post(`${API_URL}/login`, credentials);
  },

};

// Agregar el interceptor de Axios para incluir el token en los headers
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Obtiene el token de localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Añade el token al header
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores
    if (!error.response) {
      console.error('Error de red o servidor no accesible');
      return Promise.reject({ message: 'Error de red. Verifica tu conexión.' });
    }

    if (error.response.status === 401) {
      console.error('Token inválido o expirado');
      // Opcional: redirigir al usuario a la página de login
    }

    return Promise.reject(error);
  }
);