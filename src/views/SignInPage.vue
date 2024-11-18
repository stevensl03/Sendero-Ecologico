<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <router-link to="/home" id="BackButton">Atrás</router-link>
        <ion-title>Iniciar Sesión</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <ion-grid class="ion-justify-content-center ion-align-items-center" style="height: 100vh;">
        <!-- Imagen del logo -->
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" class="ion-text-center">
            <img src="../assets/lg-26-logo-unillanos.png" alt="Logo Unillanos" id="img">
          </ion-col>
        </ion-row>

        <!-- Formulario de inicio de sesión -->
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" class="ion-text-center">
            <ion-card>
              <!-- Barra de Progreso -->
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <!-- Título -->
              <h1>Bienvenido al Sendero Ecológico</h1>
              <!-- Formulario -->
              <ion-item>
                <ion-label position="stacked">Nombre de Usuario</ion-label>
                <ion-input placeholder="Escribe tu nombre"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">Contraseña</ion-label>
                <ion-input type="password" placeholder="Escribe tu contraseña"></ion-input>
              </ion-item>
              <!-- Botones -->
              <div class="buttons-container ion-align-items-center ion-justify-content-center">
                <ion-button expand="block" color="success" class="custom-button">
                  Iniciar Sesión
                </ion-button>
                <ion-button expand="block" color="primary" fill="outline" class="custom-button">
                  Iniciar como Invitado
                </ion-button>
              </div>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

</script>

<style scoped>
/* Imagen del logo */
#img {
  max-width: 100%; /* La imagen no excederá el ancho de su contenedor */
  height: auto; /* Mantiene la proporción */
  margin-bottom: 20px; /* Espaciado inferior */
}

/* Barra de Progreso */
.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #d3d3d3;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
}

.progress-bar .progress {
  width: 70%; /* Ajusta el ancho según el progreso */
  height: 100%;
  background-color: #3aff77;
  border-radius: 10px;
}

/* Título */
h1 {
  font-size: 18px;
  color: #000;
  margin: 20px 0;
}

/* Contenedor de Botones */
.buttons-container {
  margin-top: 20px; /* Espaciado superior */
}

.custom-button {
  margin-bottom: 10px; /* Espaciado entre botones */
}

/* Botón de navegación "Atrás" */
#BackButton {
  text-decoration: none;
  color: var(--ion-color-primary);
  font-size: 16px;
  margin-left: 10px;
}
ion-button {
  touch-action: auto;
  pointer-events: auto;
}
</style>
