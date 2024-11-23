<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu side="start" menu-id="main" content-id="main-content">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>Sendero Ecológico</ion-list-header>
            <ion-note>Barra de navegación</ion-note>

            <!-- Menú -->
            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon v-if="!p.image" aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <img v-else :src="p.image" alt="icon image" slot="start" style="width: 24px; height: 24px;" />
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>

            <!-- Botón de Cerrar Sesión -->
            <ion-button @click="logout" expand="full" color="danger" v-if="authStore.isAuthenticated  == true"> Cerrar Sesión </ion-button>
          </ion-list>
        </ion-content>
      </ion-menu>

      <ion-router-outlet id="main-content"></ion-router-outlet>

      <!-- Aquí es donde colocas el componente de las pestañas -->

    </ion-split-pane>
 
  </ion-app>
</template>


<script setup lang="ts">
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/vue';
import { ref, watchEffect } from 'vue';
import {
  logInSharp,
  logInOutline,
  homeSharp,
  homeOutline,
  walkSharp,
  walkOutline,
  personSharp,
  personOutline,
} from 'ionicons/icons';
import { useAuthStore } from './stores/auth';
import { useRouter } from 'vue-router';

// Use Auth Store
const authStore = useAuthStore();
const router = useRouter();

// Handle logout
const logout = async () => {
  authStore.logout(); // Clean up store state
  router.push('/signIn'); // Redirect to login page
};

// Reactive appPages based on authentication
const appPages = ref<any[]>([]);

// Watch for changes in authStore.isAuthenticated and update appPages
watchEffect(() => {
  if (authStore.isAuthenticated) {
    appPages.value = [
      {
        title: 'Perfil',
        url: '/profile',
        iosIcon: personOutline,
        mdIcon: personSharp,
      },
      {
        title: 'Inicio',
        url: '/home',
        iosIcon: homeOutline,
        mdIcon: homeSharp,
      },
      {
        title: 'Detalles del sendero',
        url: '/trailInfo',
        iosIcon: walkOutline,
        mdIcon: walkSharp,
      },
      {
        title: 'Flora del sendero',
        url: '/floraInfo',
        image: '/assets/flower.png',
      },
      {
        title: 'Fauna del sendero',
        url: '/faunaInfo',
        image: '/assets/gineta.png',
      },
      {
        title: 'Actividades',
        url: '/activities',
        image: '/assets/activity.png',
      }
    ];
  } else {
    appPages.value = [
      {
        title: 'Iniciar Sesión',
        url: '/signIn',
        iosIcon: logInOutline,
        mdIcon: logInSharp,
      },
      {
        title: 'Inicio',
        url: '/home',
        iosIcon: homeOutline,
        mdIcon: homeSharp,
      },
      {
        title: 'Detalles del sendero',
        url: '/trailInfo',
        iosIcon: walkOutline,
        mdIcon: walkSharp,
      },
      {
        title: 'Flora del sendero',
        url: '/floraInfo',
        image: '/assets/flower.png',
      },
      {
        title: 'Fauna del sendero',
        url: '/faunaInfo',
        image: '/assets/gineta.png',
      }
    ];
  }
});

// Handle selected index for navigation
const selectedIndex = ref(0);

const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.value.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}



</script>


<style scoped>
/* General Styling */
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #ffffff)); /* Fondo corregido */
}

ion-menu.md ion-content,
ion-menu.ios ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list,
ion-menu.ios ion-list {
  padding: 20px 0;
}

ion-menu.md ion-item,
ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
  border-radius: 4px;
  font-weight: 500;
}

ion-menu.md ion-item.selected,
ion-menu.ios ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon,
ion-menu.ios ion-item.selected ion-icon{
  color: var(--ion-color-primary);
}

/* Efecto de sombra adicional para la imagen */
ion-menu.md ion-item.selected img,
ion-menu.ios ion-item.selected img {
  box-shadow: 0px 0px 8px rgba(229, 255, 0, 0.6); /* Sombra de iluminación para el efecto */
}

ion-menu.md ion-item ion-icon,
ion-menu.ios ion-item ion-icon {
  color: #000000;  /* Color por defecto de los íconos */
  font-size: 24px;
  margin-right: 10px; /* Espacio consistente entre íconos e imagen */
}

ion-menu.md ion-item ion-label,
ion-menu.ios ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #00ff95; /* Color de icono específico para IOS */
}

ion-menu.md ion-list-header,
ion-menu.ios ion-list-header {
  padding-left: 16px;
  padding-right: 16px;
  font-size: 22px;
  font-weight: 600;
  color: #333; /* Color más oscuro para mejor contraste */
}

ion-menu.md ion-note,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 30px;
  line-height: 24px;
  font-size: 16px;

}


ion-menu.md ion-item img,
ion-menu.ios ion-item img {
  width: 24px;
  height: 24px;
  margin-right: 10px;  /* Espaciado consistente con el icono */
}

/* Ajuste de título para mayor legibilidad */
ion-menu.md ion-list-header,
ion-menu.ios ion-list-header {
  font-size: 34px;  /* Tamaño de fuente reducido para mayor claridad */
  font-weight: bold;  /* Resaltar el texto */
  color: #000000;  /* Color oscuro similar al de los íconos */
  padding-top: 8px;
  padding-bottom: 8px;
}

/* Ajustes para un diseño más responsive */
@media (max-width: 600px) {
  ion-menu.md ion-item,
  ion-menu.ios ion-item {
    --padding-start: 8px;
    --padding-end: 8px;
  }

  ion-menu.md ion-list-header,
  ion-menu.ios ion-list-header {
    font-size: 34px; /* Tamaño más pequeño en pantallas pequeñas */
  }


}
</style>
