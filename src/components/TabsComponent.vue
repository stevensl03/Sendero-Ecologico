<template>
  <ion-tabs>
    <!-- Pestaña con la barra de navegación en la parte inferior -->
    <ion-tab-bar slot="bottom" class="bottom-bar">
      <ion-tab-button @click="goToPage('/home')" class="tab-button">
        <img src="/assets/icon.png" alt="Icono" class="tab-icon" />
      </ion-tab-button>
      <ion-tab-button @click="goToPage('/home')" class="tab-button">
        <img src="/assets/icon.png" alt="Icono" class="tab-icon" />
      </ion-tab-button>
      <ion-tab-button @click="goToPage('/home')" class="tab-button">
        <img src="/assets/icon.png" alt="Icono" class="tab-icon" />
      </ion-tab-button>
      <ion-tab-button @click="goToPage('/home')" class="tab-button">
        <img src="/assets/icon.png" alt="Icono" class="tab-icon" />
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  // Obtén el router para navegar entre las páginas
  const router = useRouter();

  // Función para manejar la navegación
  const goToPage = (path: string) => {
    router.push(path); // Redirige a la ruta especificada
  };
</script>

<style scoped>
  /* Aseguramos que ion-tabs ocupe toda la pantalla */
  ion-tabs {
    display: flex;
    flex-direction: column;
    height: 100vh; /* 100% de la altura de la ventana */
  }

  /* Barra de navegación fijada al fondo */
  ion-tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.1); /* Sombra sutil */
    border-top-left-radius: 20px; /* Borde redondeado superior izquierdo */
    border-top-right-radius: 20px; /* Borde redondeado superior derecho */
    padding: 10px 20px; /* Espaciado dentro de la barra */
    margin: 0 10px; /* Margen alrededor de la barra */
  }

  /* Estilo del botón de la barra */
  .tab-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px; /* Ajuste para el tamaño de los botones */
    height: 60px;
    padding: 10px;
    border-radius: 50%; /* Botones redondeados */
    transition: background-color 0.3s ease; /* Transición suave para el color de fondo */
  }

  /* Icono dentro del botón */
  .tab-icon {
    width: 30px;
    height: 30px;
  }

  /* Efecto de hover sobre los botones */
  .tab-button:hover {
    background-color: #f0f0f0; /* Color de fondo cuando el mouse pasa sobre el botón */
  }

  /* Aseguramos que el contenido no quede oculto detrás de la barra */
  ion-content {
    margin-bottom: 80px; /* Ajuste para que el contenido no se oculte debajo de la barra */
  }
  ion-tab-button{
    margin-left: 6%;
    margin-right: 6%;
  }
</style>
