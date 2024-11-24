// stores/auth.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '', // Inicializa con el token si existe
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token); // Guarda el token en localStorage
    },
    clearToken() {
      this.token = '';
      localStorage.removeItem('token'); // Limpia el token de localStorage
    },
  },
});

