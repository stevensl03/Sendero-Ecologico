<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-grid>
                    <ion-row id = "titulo">
                        <router-link to="/home" id="BackButton" >Inicio</router-link>
                        <ion-title>Mi Perfil</ion-title>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
        </ion-header>
        <ion-content>

        </ion-content>

    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonTitle} from '@ionic/vue';
 
</script>



<style scoped>
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