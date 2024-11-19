<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-grid>
                    <ion-row id = "titulo">
                        <router-link to="/signIn" id="BackButton" >Atrás</router-link>
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
                    <h1>Crea tu cuenta</h1>

                    <!-- Formulario -->
                    <form @submit.prevent="onSubmit">
                        <ion-item>
                        <ion-label position="stacked" >Nombre de Usuario</ion-label>
                        <ion-input type="text" placeholder="Escribe tu nombre" required v-model="user"></ion-input>
                        </ion-item>
                        <ion-item>
                        <ion-label position="stacked">Correo Electronico</ion-label>
                        <ion-input type="email" placeholder="Escribe tu correo" required v-model="email"></ion-input>
                        </ion-item>
                        <ion-item>
                        <ion-label position="stacked">Contraseña</ion-label>
                        <ion-input type="password" placeholder="Escribe tu contraseña" required v-model="password"></ion-input>
                        </ion-item>
                        <!-- Botones -->
                        <div class="buttons-container ion-align-items-center ion-justify-content-center">
                        <ion-button type="submit" expand="block" color="danger" class="custom-button">
                            Crear cuenta ->
                        </ion-button>
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
import { defineComponent, ref } from 'vue';

const user = ref();
const email = ref(); 
const password = ref();


const onSubmit = async() =>{
      // Usar alertController de Ionic para mostrar la alerta
      const alert = await alertController.create({
        header: 'Información del Usuario',
        message: `Usuario: ${user.value}, Correo: ${email.value}, Contraseña: ${password.value}`,
        buttons: ['Bueno']
      });
      await alert.present();

      // Borrar la información después de mostrar la alerta
      user.value = '';
      email.value = '';
      password.value = '';
}

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
  background-color: var(--ion-color-danger);
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