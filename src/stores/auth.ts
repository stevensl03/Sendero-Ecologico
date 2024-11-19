// stores/auth.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  // Estado reactivo
  const isAuthenticated = ref(false);
  const userData = ref<any>(null); // Aquí puedes agregar más datos de usuario si los tienes

  // Acción para hacer login
  const login = () => {
    isAuthenticated.value = true;
    userData.value = { username: 'admin' }; // Simulando datos del usuario después de login
    console.log('Login successful');
  };

  // Acción para hacer logout
  const logout = () => {
    isAuthenticated.value = false;
    userData.value = null; // Limpiar los datos del usuario
    console.log('Logout successful');
  };

  return { isAuthenticated, userData, login, logout };
});
