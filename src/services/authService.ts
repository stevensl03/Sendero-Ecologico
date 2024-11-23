import axios from 'axios';

const BASE_URL = 'http://<tu-backend-url>:<puerto>/api/auth';

export const registerUser = async (userData: { email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response.data; // Debería contener el JWT
};