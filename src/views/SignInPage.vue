<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
            <a href="/home" id = "BackButton">Atras</a>
          <ion-title>Iniciar Sesión</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-grid>
            <ion-row>
                <ion-col>
                    <img src="../assets/lg-26-logo-unillanos.png" alt="" id="img">
                </ion-col>
            </ion-row>
            <ion-row>
                <div id="container">
                    <input type="text">
                </div>
            </ion-row>
        </ion-grid>

      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol} from '@ionic/vue';

  </script>
  
  <style scoped>
    
    ion-grid {

        border: 1px solid black;
    }

    ion-row {

        border: 1px solid rgb(4, 18, 110);
    }

    ion-col {

        border: 1px solid rgb(113, 0, 0);
    }





  </style>