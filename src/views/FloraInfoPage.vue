<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button menu="main"></ion-menu-button>
        </ion-buttons>
        <ion-title>Flora de los Llanos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="4" v-for="(planta, index) in plantas" :key="index">
            <ion-card class="plant-card">
              <img :src="planta.imagen" alt="Imagen de planta" class="plant-image" />
              <ion-card-header>
                <ion-card-title class="plant-name">{{ planta.nombre }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ planta.descripcion }}</p>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/vue';
import { ref } from 'vue';

interface Planta {
  nombre: string;
  descripcion: string;
  imagen: string;
}

const plantas = ref<Planta[]>([
  {
    nombre: 'Cocora',
    descripcion: 'Planta que se encuentra en la región de los Llanos, famosa por sus hojas grandes y exuberantes.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Cocora_%28Cocora_palustris%29.jpg',
  },
  {
    nombre: 'Guayacán',
    descripcion: 'Árbol emblemático de la región, conocido por su hermosa floración de color amarillo.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Guayacan_%28Guaiacum_officinale%29.jpg',
  },
  {
    nombre: 'Samán',
    descripcion: 'Árbol de gran tamaño, cuya sombra es apreciada en muchas zonas del llano colombiano.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Samanea_saman_%28L.%29_22zz.jpg',
  },
  {
    nombre: 'Caña fleha',
    descripcion: 'Planta nativa de la región llanera, utilizada tradicionalmente para hacer flechas y otros objetos artesanales.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Guarumo_%28Cecropia_peltata%29.jpg',
  },
  {
    nombre: 'Chigüiro',
    descripcion: 'Planta acuática que se encuentra en las ciénagas de los Llanos, de gran importancia para la fauna local.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sawgrass_%28Cladium_jamaicense%29.jpg',
  },
  {
    nombre: 'Yarumo',
    descripcion: 'Árbol que se encuentra en los Llanos y se destaca por su corteza rugosa y sus hojas grandes, utilizado para sombra y protección.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Yarumo.jpg',
  },
  {
    nombre: 'Palma de moriche',
    descripcion: 'Es una palma que crece en las zonas inundadas de los Llanos, y su fruto es muy importante en la dieta local.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Palma_moriche.jpg',
  },
  {
    nombre: 'Guarumo',
    descripcion: 'Árbol que crece en zonas de sabanas y bosques de los Llanos, conocido por su gran tamaño y resistencia.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Guarumo.jpg',
  },
  {
    nombre: 'Sabanera',
    descripcion: 'Planta de hoja perenne que crece en las sabanas de los Llanos, con flores pequeñas de color blanco.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Sabanera_%28Mikania%29.jpg',
  }, 
  {
    nombre: 'Cecropia peltata (Guarumo)',
    descripcion: 'Es un árbol de rápido crecimiento con corteza blanca y rugosa, importante para la fauna.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Cecropia_peltata.jpg',
  },
  {
    nombre: 'Tamarindo (Tamarindus indica)',
    descripcion: 'Árbol conocido por su fruto ácido utilizado en la gastronomía local.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Tamarindus_indica_%28fruit_and_tree%29.jpg',
  },
  {
    nombre: 'Zorzalito (Miconia spp.)',
    descripcion: 'Planta característica de los bosques húmedos con hojas y frutos importantes para el ecosistema.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Miconia.jpg',
  },
  {
    nombre: 'Ciprés de los Llanos (Cupressus llanosensis)',
    descripcion: 'Árbol resistente que crece en suelos áridos y es importante para la fauna local.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Ciprés_de_los_Llanos.jpg',
  },
  {
    nombre: 'Maraca (Mauritia flexuosa)',
    descripcion: 'Palmera de zonas inundadas, cuyo fruto es comestible y esencial en la dieta local.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Mauritia_flexuosa.jpg',
  },
  {
    nombre: 'Rosa de Jamaica (Hibiscus rosa-sinensis)',
    descripcion: 'Planta ornamental de flores grandes y vistosas, utilizada en medicina tradicional.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Hibiscus_rosasinensis_1.jpg',
  },
  {
    nombre: 'Caña brava (Gynerium sagittatum)',
    descripcion: 'Planta alta y flexible que se utiliza en la fabricación de cestas y otras construcciones.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Gynerium_sagittatum.jpg',
  },
  {
    nombre: 'Flor de Loto (Nymphaea spp.)',
    descripcion: 'Planta acuática de flores vibrantes que se encuentra en las zonas húmedas.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Nymphaea.jpg',
  },
  {
    nombre: 'Acacia (Acacia spp.)',
    descripcion: 'Árbol que forma parte de los ecosistemas secos, con flores amarillas que atraen insectos.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Acacia.jpg',
  },
  {
    nombre: 'Tabebuia rosea (Palo de rosa)',
    descripcion: 'Árbol con flores rosadas, muy valorado por su madera dura y duradera.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Tabebuia_rosea_001.jpg',
  },
  {
    nombre: 'Copaiba (Copaifera langsdorffii)',
    descripcion: 'Árbol conocido por su aceite medicinal utilizado en la medicina tradicional.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Copaiba.jpg',
  },
  {
    nombre: 'Orujo (Calyptrogyne ghiesbreghtiana)',
    descripcion: 'Planta palmera que se encuentra en las zonas húmedas y se utiliza en la fabricación de tejidos.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Calyptrogyne_ghiesbreghtiana.jpg',
  },
]);
</script>



<style scoped>
/* Mejorar el diseño de las tarjetas de planta */
ion-card {
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Añadir sombra */
  transition: transform 0.3s ease; /* Efecto al pasar el mouse */
}

ion-card:hover {
  transform: translateY(-10px); /* Levantar la tarjeta al pasar el mouse */
}

/* Estilizar las imágenes */
.plant-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover; /* Para que la imagen se ajuste sin perder calidad */
}

/* Mejorar el estilo del título de la planta */
.plant-name {
  color: #3880ff;
  font-weight: bold;
  font-size: 1.2em;
}

/* Estilo de la descripción */
ion-card-content {
  font-size: 0.9em;
  color: #444;
  line-height: 1.4;
}

/* Fondo del card */
ion-card-header {
  background-color: #f5f5f5;
  border-radius: 10px 10px 0 0;
}

/* Mejorar la distribución en dispositivos móviles */
ion-grid {
  padding: 0 10px;
}

ion-col {
  display: flex;
  justify-content: center;
}
</style>


