<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button menu="main"></ion-menu-button>
        </ion-buttons>
        <ion-title>Fauna de los Llanos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="4" v-for="(Animal, index) in fauna" :key="index">
            <ion-card class="plant-card">
              <img :src="Animal.imagen" alt="Imagen de animal" class="plant-image" />
              <ion-card-header>
                <ion-card-title class="plant-name">{{ Animal.nombre }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ Animal.descripcion }}</p>
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

interface Animal {
  nombre: string;
  descripcion: string;
  imagen: string;
}

const fauna = ref<Animal[]>([

  {
    nombre: 'Anaconda',
    descripcion: 'Es una de las serpientes más grandes del mundo, comúnmente encontrada en las ciénagas y ríos de los Llanos.',
    imagen: 'https://images.pexels.com/photos/18876661/pexels-photo-18876661/free-photo-of-madera-oscuro-zoo-peligro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    nombre: 'Capybara (Chigüiro)',
    descripcion: 'El roedor más grande del mundo, encontrado en zonas húmedas, ríos y ciénagas de la región.',
    imagen: 'https://media.istockphoto.com/id/1481143219/es/foto/capibara-sentado-en-la-orilla-de-un-r%C3%ADo-arenoso-sobre-fondo-verde.jpg?s=1024x1024&w=is&k=20&c=oY6_zaP319MqnH1EQGXnhivNgrQ1g2Fl73SbXAm6tRM=',
  },
  {
    nombre: 'Jaguar',
    descripcion: 'Felino que habita en los bosques y llanos, conocido por su gran tamaño y fuerza.',
    imagen: 'https://images.pexels.com/photos/29520104/pexels-photo-29520104/free-photo-of-jaguar-gato-grande.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    nombre: 'Oso hormiguero',
    descripcion: 'Un animal que se alimenta principalmente de insectos como las hormigas, caracterizado por su largo hocico.',
    imagen: 'https://media.istockphoto.com/id/2152237440/es/foto/ant-eater.jpg?s=1024x1024&w=is&k=20&c=QGFowzLRcYYpNg-73CEIBd4pttL6yeB84dI9oxvg8AU=',
  },
  {
    nombre: 'Tucán',
    descripcion: 'Pájaro colorido y característico de la fauna del trópico, conocido por su gran pico.',
    imagen: 'https://media.istockphoto.com/id/511523232/es/foto/acercamiento-de-coloridos-tuc%C3%A1n-pico-iris-p%C3%A1jaro.jpg?s=2048x2048&w=is&k=20&c=CqKTLYksjVjiLUE4LSLK_wMKbThqZ5krnfKHaR8uMeE=',
  },
  {
    nombre: 'Delfín rosado',
    descripcion: 'Una especie de delfín que habita los ríos de la región amazónica, muy apreciado por su color único.',
    imagen: 'https://images.pexels.com/photos/4130100/pexels-photo-4130100.jpeg',
  },
  {
    nombre: 'Caimán',
    descripcion: 'Reptil que habita las ciénagas y ríos de los Llanos, conocido por su habilidad para nadar y acechar.',
    imagen: 'https://images.unsplash.com/photo-1583410196792-d8a9a9d9a5ec',
  },
  {
    nombre: 'Mono aullador',
    descripcion: 'Un primate que habita los árboles y cuya característica principal es su fuerte aullido.',
    imagen: 'https://images.unsplash.com/photo-1544036266-6b60d67e8476',
  },
  {
    nombre: 'Lapa',
    descripcion: 'Roedor nocturno que vive en la selva tropical y es conocido por su tamaño y su pelaje denso.',
    imagen: 'https://images.pexels.com/photos/763401/pexels-photo-763401.jpeg',
  },
  {
    nombre: 'Guacamaya roja',
    descripcion: 'Ave que vive en los bosques y sabanas, famosa por sus plumas rojas, amarillas y azules.',
    imagen: 'https://images.pexels.com/photos/2023656/pexels-photo-2023656.jpeg',
  },
  {
    nombre: 'Coyote',
    descripcion: 'Carnívoro que se encuentra en áreas abiertas y boscosas, es conocido por su agudo sentido del oído.',
    imagen: 'https://images.unsplash.com/photo-1547651046-34a2b64b09d9',
  },
  {
    nombre: 'Puma',
    descripcion: 'Un felino de gran tamaño que habita en las regiones montañosas y las sabanas de los Llanos.',
    imagen: 'https://images.pexels.com/photos/45909/pexels-photo-45909.jpeg',
  },
  {
    nombre: 'Iguana',
    descripcion: 'Reptil herbívoro que se encuentra en las zonas de vegetación del Llanos, es conocido por su capacidad de trepar árboles.',
    imagen: 'https://images.unsplash.com/photo-1577781193617-c2b29e9e5c8e',
  },
  {
    nombre: 'Zorro de los Llanos',
    descripcion: 'Pequeño carnívoro que habita en la región de los Llanos y es conocido por su astucia.',
    imagen: 'https://images.unsplash.com/photo-1586851114693-d944be82d57c',
  },
  {
    nombre: 'Pecarí',
    descripcion: 'Mamífero que habita los bosques y áreas abiertas, es conocido por su aspecto similar a un jabalí.',
    imagen: 'https://images.pexels.com/photos/1264062/pexels-photo-1264062.jpeg',
  },
  {
    nombre: 'Cisne negro',
    descripcion: 'Un elegante ave acuática que habita lagunas y cuerpos de agua del Llanos.',
    imagen: 'https://images.pexels.com/photos/1079563/pexels-photo-1079563.jpeg',
  },
  {
    nombre: 'Búho',
    descripcion: 'Ave nocturna que se encuentra en los bosques de los Llanos, es conocida por su gran visión nocturna.',
    imagen: 'https://images.unsplash.com/photo-1584840517341-5d0d672f5a55',
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
