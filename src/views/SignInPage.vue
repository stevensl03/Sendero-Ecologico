<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-grid>
          <ion-row id = "titulo">
            <router-link to="/home" id="BackButton" >Inicio</router-link>
            <ion-title>Iniciar Sesión</ion-title>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <ion-grid class="ion-justify-content-center ion-align-items-center" style="height: 100vh;">
        <!-- Imagen del logo -->
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" class="ion-text-center">
            <img src="/public/assets/lg-26-logo-unillanos.png" alt="Logo Unillanos" id="img">
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
              <form @submit.prevent="signIn">
                <ion-item>
                  <ion-label position="stacked">Correo Electrónico</ion-label>
                  <ion-input type="email" placeholder="Escribe tu nombre" required v-model="credentials.email"></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label position="stacked">Contraseña</ion-label>
                  <ion-input type="password" placeholder="Escribe tu contraseña" required v-model="credentials.password"></ion-input>
                </ion-item>
                <!-- Botones -->
                <div class="buttons-container ion-align-items-center ion-justify-content-center">
                  <ion-button  type="submit" expand="block" color="success" class="custom-button">
                    Iniciar Sesión
                  </ion-button>
                  <ion-button expand="block" color="primary" fill="outline" class="custom-button" ion-button > <!- @click="presentAlert"->
                    Iniciar como Invitado
                  </ion-button>
                  
                  <p> ¿No tienes una cuenta?  <router-link to="/register" id="goRegister" >  Inscribirse  </router-link></p>
                 
                </div>
              </form>

            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>




<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonItem, IonLabel, IonInput, IonButton, IonAlert, alertController} from '@ionic/vue';
import { defineComponent, ref, reactive} from 'vue';
import { useAuthStore } from '../stores/auth'
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { authService } from '@/services/authService';

//variables
const email = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();

//guardar credenciales
const credentials = ref({
  email: '',
  password: '',
});


const signIn = async () => {
  try {
    // push backend  
    const response = await authService.login(credentials.value);
    //alert(mensaje en pantalla)
    await alertController.create({
      header: 'Inicio de Sesión Válido',
      message: 'Bienvenido',
      buttons: ['Ok'],
    }).then(alert => alert.present());

    //enviar informacion a stores/auth.ts
    authStore.setUser(response.data.user);
    authStore.setToken(response.data.token); // Guarda el token en el estado global
    //ir al inicio
    router.push('/home');
  } catch (error: any) {
    //mensaje de error
    const errorMessage = error.response?.data?.message || 'Error al iniciar sesión';
    await alertController.create({
      header: 'Error',
      message: errorMessage,
      buttons: ['Ok'],
    }).then(alert => alert.present());
  }
  //resetear texto del input
  credentials.value = { email: '', password: '' };

};

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
  color: white;
  font-size: 20px;
  margin-left: 10px;
  padding: 2px;
  background-color: var(--ion-color-primary);
  border: solid var(--ion-color-primary);
  border-radius: 10%;
}
ion-button {
  touch-action: auto;
  pointer-events: auto;
}

#titulo ion-title{

  text-align: center;
}
</style>
