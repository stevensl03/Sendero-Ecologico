<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/home">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Mi perfil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <!-- Avatar con botón para agregar imagen -->
        <ion-row class="avatar-row" justify-content="center">
          <ion-col size="12" class="avatar-container">
            <div class="avatar-wrapper">
              <div class="avatar-placeholder"></div>
              <ion-fab>
                <ion-fab-button color="danger" class="add-photo-btn" fill="solid">
                  <ion-icon slot="icon-only" name="add"></ion-icon>
                </ion-fab-button>
              </ion-fab>
            </div>
          </ion-col>
        </ion-row>

        <!-- Campos de edición -->
        <ion-row class="info-row">
          <ion-col size="12">
            <div class="info-item">
              <label>Correo:</label>
              <ion-input placeholder="example@mail.com" disabled></ion-input>
              <ion-button fill="clear" class="edit-btn">
                <ion-icon slot="icon-only" name="create-outline" color="success"></ion-icon>
              </ion-button>
            </div>
          </ion-col>

          <ion-col size="12">
            <div class="info-item">
              <label>Teléfono:</label>
              <ion-input placeholder="123-456-7890" disabled></ion-input>
              <ion-button fill="clear" class="edit-btn">
                <ion-icon slot="icon-only" name="create-outline" color="success" :icon="add"></ion-icon>
              </ion-button>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonInput, IonButton, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { add, createOutline, arrowBackOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
const userName = authStore.user?.name;
const userEmail = authStore.user?.email;
const userRole = authStore.user?.role;
const userId = authStore.user?.id;



if (authStore.user) {
  alert(`Nombre del usuario: ${authStore.user.name}`);
}


</script>

<style scoped>
/* Avatar */
.avatar-row {
  margin-top: 20px;
  text-align: center;
}

.avatar-container {
  display: flex;
  justify-content: center;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #e0e0e0;
  position: relative;
}

.add-photo-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  --size: 40px;
  width: var(--size);
  height: var(--size);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
}

/* Campos de información */
.info-row {
  margin-top: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

label {
  width: 80px;
  font-weight: bold;
}

ion-input {
  flex: 1;
  --background: #f2f2f2;
  --padding-start: 10px;
}

.edit-btn {
  margin-left: 10px;
}
</style>
