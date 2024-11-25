<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button menu="main"></ion-menu-button>
        </ion-buttons>
        <ion-title>Sendero Ecológico</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="map" ref="mapElement"></div>
      
      <ion-card class="route-panel">
        <ion-card-header>
          <ion-card-title>Selecciona las estaciones</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Desde:</ion-label>
            <ion-select v-model="selectedStartStation">
              <ion-select-option v-for="(estacion, index) in estaciones" :key="index" :value="index">
                {{ estacion.nombre }}
              </ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Hasta:</ion-label>
            <ion-select v-model="selectedEndStation">
              <ion-select-option v-for="(estacion, index) in estaciones" :key="index" :value="index">
                {{ estacion.nombre }}
              </ion-select-option>
            </ion-select>
          </ion-item>
          <ion-button expand="block" @click="showRoute">Mostrar ruta</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, 
  IonSelect, IonSelectOption, IonButton 
} from '@ionic/vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { FeatureCollection } from 'geojson';
import senderoGeoJSON from '@/assets/sendero.json';

interface Estacion {
  lat: number;
  lng: number;
  nombre: string;
}

const estaciones: Estacion[] = [
  { lat: 4.073974, lng: -73.586563, nombre: "Estación 1: Veterinaria" },
  { lat: 4.073615, lng: -73.586713, nombre: "Estación 2: Jardín Toxicológico" },
  { lat: 4.073813, lng: -73.586109, nombre: "Estación 3: Plazoleta de Veterinaria" },
  { lat: 4.073385, lng: -73.585911, nombre: "Estación 4: Manejo de Residuos Sólidos" },
  { lat: 4.072625, lng: -73.584934, nombre: "Estación 5: Rata del Bambú" },
  { lat: 4.072764, lng: -73.584004, nombre: "Estación 6: Coral" },
  { lat: 4.074362, lng: -73.586031, nombre: "Estación 18: Museo de historia natural unillanos" },
];

const mapElement = ref<HTMLElement | null>(null);
const selectedStartStation = ref(0);
const selectedEndStation = ref(1);

class MapManager {
  private map: L.Map | null = null;
  private routingControl: L.Routing.Control | null = null;

  initialize(element: HTMLElement) {
    const centerLat = 4.074292;
    const centerLng = -73.582842;

    this.map = L.map(element).setView([centerLat, centerLng], 17);

    const bounds: L.LatLngBoundsExpression = [
      [4.06830, -73.58728],
      [4.08041, -73.57950],
    ];
    
    this.map.setMaxBounds(bounds);
    this.map.setMinZoom(15);
    this.map.setMaxZoom(18);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(this.map);

    this.addGeoJSON();
    this.addMarkers();
  }

  private addGeoJSON() {
    if (!this.map) return;

    try {
      const geojsonData = senderoGeoJSON as FeatureCollection;
      L.geoJSON(geojsonData, {
        style: {
          color: "green",
          weight: 4,
        },
      }).addTo(this.map);
    } catch (error) {
      console.error("Error al cargar el GeoJSON:", error);
    }
  }

  private addMarkers() {
    if (!this.map) return;

    estaciones.forEach((estacion) => {
      L.marker([estacion.lat, estacion.lng])
        .addTo(this.map!)
        .bindPopup(estacion.nombre);
    });
  }

  showRoute(startIndex: number, endIndex: number) {
    if (!this.map || startIndex === endIndex) {
      console.error("Selecciona estaciones válidas.");
      return;
    }

    const start = estaciones[startIndex];
    const end = estaciones[endIndex];

    if (this.routingControl) {
      this.routingControl.setWaypoints([
        L.latLng(start.lat, start.lng),
        L.latLng(end.lat, end.lng),
      ]);
    } else {
      this.routingControl = L.Routing.control({
        waypoints: [
          L.latLng(start.lat, start.lng),
          L.latLng(end.lat, end.lng),
        ],
        routeWhileDragging: true,
        show: true,
        addWaypoints: false,
        lineOptions: {
          styles: [{ color: "blue", opacity: 0.8, weight: 5 }],
        },
      }).addTo(this.map);
    }

    const routingContainer = document.querySelector(".leaflet-routing-container");
    if (routingContainer) {
      routingContainer.setAttribute(
        "style",
        "opacity: 0.95; background: rgba(255, 255, 255, 0.9); padding: 10px; border-radius: 8px;"
      );
    }
  }

  invalidateSize() {
    if (this.map) {
      this.map.invalidateSize();
    }
  }

  cleanup() {
    if (this.map) {
      this.map.off();
      this.map.remove();
    }
    this.map = null;
    this.routingControl = null;
  }
}

const mapManager = new MapManager();

onMounted(() => {
  if (mapElement.value) {
    mapManager.initialize(mapElement.value);
    setTimeout(() => {
      mapManager.invalidateSize();
    }, 500);
  }
});

onUnmounted(() => {
  mapManager.cleanup();
});

const showRoute = () => {
  mapManager.showRoute(selectedStartStation.value, selectedEndStation.value);
};

watch([selectedStartStation, selectedEndStation], () => {
  showRoute();
});
</script>

<style scoped>
#map {
  height: calc(100vh - 56px);
  width: 100%;
}

.route-panel {
  position: fixed;
  top: 70px;
  left: 10px;
  width: 250px;
  z-index: 1000;
}

:deep(.leaflet-routing-container) {
  background-color: rgba(255, 255, 255, 1) !important;
  color: #000 !important;
  border: 1px solid #000 !important;
  font-size: 14px !important;
  font-weight: bold !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001;
}

:deep(.leaflet-routing-container *) {
  color: #000 !important;
}

:deep(.leaflet-routing-alt) {
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
}
</style>