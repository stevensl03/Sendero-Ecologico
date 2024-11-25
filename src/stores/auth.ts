// stores/auth.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '', // Token del usuario
    user: JSON.parse(localStorage.getItem('user') || 'null') as { 
      id: number; 
      name: string; 
      email: string; 
      role: string; 
    } | null, // Información del usuario autenticado
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token); // Guarda el token en localStorage
    },
    setUser(user: { id: number; name: string; email: string; role: string }) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user)); // Guarda la información del usuario
    },
    clearAuth() {
      this.token = '';
      this.user = null;
      localStorage.removeItem('token'); // Limpia el token de localStorage
      localStorage.removeItem('user'); // Limpia la información del usuario
    },
  },
});



