<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
          <ion-menu-button menu="main"></ion-menu-button>
        </ion-buttons>
          <ion-title>Sendero Ecólogico</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque amet libero saepe. Explicabo at assumenda, veritatis deleniti incidunt repellat quia ea aliquid nemo voluptates eum iste, magnam natus eaque minus.</p>

        <div id="container">

        </div>


        <TabsComponent />
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, } from '@ionic/vue';



</script>

<style scoped>


</style>