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
      <div id="map"></div>
      
      <!-- Panel desplegable fijo -->
      <div class="route-panel">
        <h3>Selecciona las estaciones</h3>
        <label for="start-station">Desde:</label>
        <select id="start-station" v-model="startStation">
          <option v-for="(estacion, index) in estaciones" :key="index" :value="index">
            {{ estacion.nombre }}
          </option>
        </select>
        <label for="end-station">Hasta:</label>
        <select id="end-station" v-model="endStation">
          <option v-for="(estacion, index) in estaciones" :key="index" :value="index">
            {{ estacion.nombre }}
          </option>
        </select>
        <button @click="showRoute">Mostrar ruta</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import * as L from "leaflet";
import "leaflet-routing-machine"; // Importa Leaflet Routing Machine
import senderoGeoJSON from "@/assets/sendero.json";
import { FeatureCollection } from "geojson";

let map: L.Map | null = null;
let routingControl: any = null; // Declaramos como any

type Estacion = {
  lat: number;
  lng: number;
  nombre: string;
};

const estaciones: Estacion[] = [
 { lat: 4.073974, lng: -73.586563, nombre: "Estación 1: Veterinaria" },
 { lat: 4.073615, lng: -73.586713, nombre: "Estación 2: Jardín Toxicológico" },
 { lat: 4.073813, lng: -73.586109, nombre: "Estación 3: Plazoleta de Veterinaria" },
 { lat: 4.073385, lng: -73.585911, nombre: "Estación 4: Manejo de Residuos Sólidos" },
 { lat: 4.072625, lng: -73.584934, nombre: "Estación 5: Rata del Bambú" },
 { lat: 4.072764, lng: -73.584004, nombre: "Estación 6: Coral" },
 { lat: 4.074362, lng: -73.586031, nombre: "Estación 18: Museo de historia natural unillanos" },
];


const startStation = ref(0); // Índice de la estación de inicio
const endStation = ref(1); // Índice de la estación de destino

function initializeMap() {
  if (map) return;

  const centerLat = 4.074292;
  const centerLng = -73.582842;

  map = L.map("map").setView([centerLat, centerLng], 17);

  const bounds: L.LatLngBoundsExpression = [
    [4.06830, -73.58728],
    [4.08041, -73.57950],
  ];
  map.setMaxBounds(bounds);
  map.setMinZoom(15);
  map.setMaxZoom(18);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  try {
    const geojsonData: FeatureCollection = senderoGeoJSON as FeatureCollection;

    L.geoJSON(geojsonData, {
      style: {
        color: "green", // Color de la línea del sendero
        weight: 4, // Grosor de la línea
      },
    }).addTo(map);
  } catch (error) {
    console.error("Error al cargar el GeoJSON:", error);
  }

  addMarkers();
}

function addMarkers() {
  estaciones.forEach((estacion) => {
    if (map) {
      L.marker([estacion.lat, estacion.lng])
        .addTo(map)
        .bindPopup(estacion.nombre);
    }
  });
}

function showRoute() {
  if (!map || startStation.value === endStation.value) {
    console.error("Selecciona estaciones válidas.");
    return;
  }

  const start = estaciones[startStation.value];
  const end = estaciones[endStation.value];

  // Si ya hay una ruta, la eliminamos
  if (routingControl) {
    map.removeControl(routingControl);
    routingControl = null;
  }

  // Crear una nueva ruta
  routingControl = L.Routing.control({
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
  }).addTo(map);

  // Ajustamos la opacidad y visibilidad del cuadro de indicaciones
  const routingContainer = document.querySelector(".leaflet-routing-container");
  if (routingContainer) {
    routingContainer.setAttribute(
      "style",
      "opacity: 0.95; background: rgba(255, 255, 255, 0.9); padding: 10px; border-radius: 8px;"
    );
  }
}

onMounted(() => {
  initializeMap();
  setTimeout(() => {
    if (map) {
      map.invalidateSize();
    }
  }, 500);
});

onUnmounted(() => {
  if (map) {
    map.remove();
    map = null;
  }
  if (routingControl) {
    routingControl = null;
  }
});
</script>

<style >
.leaflet-routing-container {
  z-index: 1001; /* Asegura que esté por encima del mapa */
  background: rgba(255, 255, 255, 0.95) !important; /* Fondo blanco con opacidad ligera */
  color: #000 !important; /* Texto negro */
  font-size: 14px !important; /* Ajusta el tamaño del texto */
  font-weight: bold !important; /* Hace el texto más visible */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Agrega un sombreado para destacarlo */
}

.leaflet-routing-container .leaflet-routing-alt {
  color: #000 !important; /* Texto alternativo negro */
}

.leaflet-routing-container table {
  color: #000 !important; /* Tablas con texto negro */
}

.leaflet-routing-container h1, h2, h3, h4, h5, h6 {
  color: #000 !important; /* Encabezados negros */
}

.leaflet-routing-container .leaflet-routing-instructions {
  color: #000 !important; /* Texto de las instrucciones */
  background: rgba(255, 255, 255, 0.9) !important; /* Fondo para instrucciones */
  padding: 10px !important;
  border-radius: 5px;
}
.leaflet-routing-container * {
  color: #000 !important;
}
.leaflet-routing-container {
  background-color: rgba(255, 255, 255, 1) !important; /* Fondo blanco sin transparencia */
  color: #000 !important;
  border: 1px solid #000 !important; /* Borde negro para mejor visibilidad */
}


#map {
  height: calc(100vh - 80px); /* Ajusta el alto */
  width: 100%;
}

.route-panel {
  position: fixed; /* Fijo para que siempre se mantenga visible */
  top: 60px; /* Lo desplazamos para evitar el cuadro de indicaciones */
  left: 10px;
  background: rgba(255, 255, 255, 0.95); /* Fondo blanco con opacidad */
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 250px;
  z-index: 1000; /* Asegura que esté siempre encima del mapa */
}

.route-panel h3 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.route-panel label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

.route-panel select {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.route-panel button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.route-panel button:hover {
  background-color: #0056b3;
}



</style>
