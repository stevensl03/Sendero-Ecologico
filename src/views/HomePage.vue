<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
          <ion-menu-button menu="main"></ion-menu-button>
        </ion-buttons>
          <ion-title>Sendero Ecologico</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">

        <div id="container">

        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/vue';
  </script>
  
  <style scoped>
  
   
  </style>