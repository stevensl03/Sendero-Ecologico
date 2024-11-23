<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
            <ion-grid>
                <ion-row id = "titulo">
                    <router-link to="/home" id="BackButton" >Inicio</router-link>
                    <ion-title>Gestion de actividades</ion-title>
                </ion-row>
            </ion-grid>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Explora y Conecta: Inscríbete en Nuestra Próxima Actividad Ecológica</ion-card-title>
            <ion-card-subtitle>¡Únete a la aventura! 🌿 Inscríbete ahora en nuestra actividad y vive una experiencia única en el corazón del sendero ecológico. Descubre, aprende y conecta con la naturaleza. ¡Te esperamos!</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-thumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-label>Item</ion-label>
              </ion-item>

              <ion-item>
                <ion-thumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-label>Item</ion-label>
              </ion-item>

              <ion-item>
                <ion-thumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-label>Item</ion-label>
              </ion-item>

              <ion-item lines="none">
                <ion-thumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-label>Item</ion-label>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/vue';
  </script>
  
  <style scoped>

ion-item {
  --padding-start: 0;
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