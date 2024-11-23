<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <router-link to="/trailInfo" id="BackButton" >Atras</router-link>
            <ion-title>Estación {{ stationId }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <!-- Contenido dinámico -->
      </ion-content>
      <TabsComponent />
    </ion-page>
  </template>
  
  <script setup lang="ts">
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader,
    IonCardTitle,IonCardSubtitle, IonCardContent  } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import CardComponent from '@/components/CardComponent.vue';
    import { useRoute } from 'vue-router';

  const route = useRoute();
  const stationId = route.params.id; // Captura el ID de la URL
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


ion-title{
text-align: center;
}

</style>