<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
          <ion-menu-button menu="main"></ion-menu-button>
        </ion-buttons>
          <ion-title>Información del Sendero</ion-title>
        </ion-toolbar>
      </ion-header>

      
    <ion-content>
      <div id="container">
        <div>
          <h1>Descripción del Sendero Ecológico </h1>
          <p>El Sendero Ecológico de la Universidad de los Llanos es un espacio dedicado a la conservación,
             educación y disfrute de la biodiversidad de nuestra región. Diseñado para resaltar la riqueza 
             natural de los Llanos Orientales, este sendero ofrece a estudiantes, investigadores y visitantes 
             una experiencia inmersiva en un entorno natural único.
          </p>
        </div>
        <ion-card>
        <img alt="Silhouette of mountains" src="https://pixabay.com/es/photos/fruta-manzana-png-verde-separar-1218166/" />
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>
      <ion-card>
        <img alt="Silhouette of mountains" src="https://pixabay.com/es/photos/fruta-manzana-png-verde-separar-1218166/" />
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>
      

      </div>
    </ion-content>
  </ion-page>
</template>
  
  <script setup lang="ts">
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader,
       IonCardTitle,IonCardSubtitle, IonCardContent  } from '@ionic/vue';
    import { defineComponent } from 'vue';

  </script>
  
  <style scoped>
  
  </style>