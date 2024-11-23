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
        <div class= "textEnum">
          <h1>Descripción del Sendero Ecológico </h1>
          <p>El Sendero Ecológico de la Universidad de los Llanos es un espacio dedicado a la conservación,
             educación y disfrute de la biodiversidad de nuestra región. Diseñado para resaltar la riqueza 
             natural de los Llanos Orientales, este sendero ofrece a estudiantes, investigadores y visitantes 
             una experiencia inmersiva en un entorno natural único.
          </p>
        </div>
        
        <ion-card>
          <ion-grid>
            <ion-row>
              <!-- Columna de la imagen -->
              <ion-col size="4" class="image-container">
                <img 
                  alt="Silhouette of mountains" 
                  src="../../public/assets/icon.png" 
                  class="card-image" 
                />
              </ion-col>
              <!-- Columna del texto -->
              <ion-col size="8">
                <ion-card-header>
                  <ion-card-title>Explora Nuestros Iconos</ion-card-title>
                  <ion-card-subtitle>Descubre las herramientas visuales</ion-card-subtitle>
                  <router-link to="Icons" id="Redirigir" ><img src="/public/assets/flecha-hacia-adelante.png" width="50px" /></router-link>
                </ion-card-header>
              </ion-col>
              <ion-card-content>
                  Accede a nuestra completa colección de iconos diseñados para mejorar la experiencia de usuario. Perfectos para personalizar tus proyectos
                </ion-card-content>
            </ion-row>
          </ion-grid>
        </ion-card>

      <div>
        <CardComponent
          v-for="(item, index) in cardsData"
          :key="index"
          :id="item.id"
          :imageSrc="item.imageSrc"
          :altText="item.altText"
          :cardTitle="item.cardTitle"
          :cardSubtitle="item.cardSubtitle"
          :cardContent="item.cardContent"
          :linkTo="item.linkTo"
          :arrowImage="item.arrowImage"
        />
      </div>
      </div>
    </ion-content>

  </ion-page>
</template>
  
<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardTitle,IonCardSubtitle, IonCardContent  } from '@ionic/vue';
import { defineComponent } from 'vue';
import CardComponent from '@/components/CardComponent.vue';
import TabsComponent from '@/components/TabsComponent.vue';


const cardsData = [
  {
    id: 1,
    imageSrc: '/public/assets/icon1.jp',
    altText: 'Bosque Seco Tropical',
    cardTitle: 'Primera Estación: Bosque Seco Tropical',
    cardSubtitle: 'Explora la flora adaptada al clima seco',
    cardContent: 'Descubre las especies de plantas que sobreviven con poca agua, como los cactus y las suculentas.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 2,
    imageSrc: '/public/assets/icon2.jp',
    altText: 'Sendero del Agua',
    cardTitle: 'Segunda Estación: Sendero del Agua',
    cardSubtitle: 'Conoce las fuentes de agua locales',
    cardContent: 'Aprende sobre las fuentes naturales de agua en la región y su importancia para los ecosistemas locales.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 3,
    imageSrc: '/public/assets/icon3.jp',
    altText: 'Flora Nativa',
    cardTitle: 'Tercera Estación: Flora Nativa',
    cardSubtitle: 'Plantas endémicas de la región',
    cardContent: 'Descubre las plantas que solo crecen en nuestra región y su importancia ecológica.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 4,
    imageSrc: '/public/assets/icon4.j',
    altText: 'Fauna Silvestre',
    cardTitle: 'Cuarta Estación: Fauna Silvestre',
    cardSubtitle: 'Conoce los animales locales',
    cardContent: 'Observa los animales que habitan en la región, incluyendo aves, mamíferos y reptiles.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 5,
    imageSrc: '/public/assets/icon5.jp',
    altText: 'Sendero de la Sombra',
    cardTitle: 'Quinta Estación: Sendero de la Sombra',
    cardSubtitle: 'Disfruta de la frescura del bosque',
    cardContent: 'Un lugar donde puedes relajarte bajo la sombra de los árboles tropicales y aprender sobre su biodiversidad.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 6,
    imageSrc: '/public/assets/icon6.jp',
    altText: 'Árboles Gigantes',
    cardTitle: 'Sexta Estación: Árboles Gigantes',
    cardSubtitle: 'Admira los árboles más grandes del sendero',
    cardContent: 'Conoce los árboles más altos y antiguos, y aprende sobre su rol en el ecosistema.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 7,
    imageSrc: '/public/assets/icon7.jp',
    altText: 'El Mirador',
    cardTitle: 'Séptima Estación: El Mirador',
    cardSubtitle: 'Vista panorámica del paisaje',
    cardContent: 'Disfruta de una vista espectacular del sendero y aprende sobre los paisajes circundantes.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 8,
    imageSrc: '/public/assets/icon8.jp',
    altText: 'Zona de Investigación',
    cardTitle: 'Octava Estación: Zona de Investigación',
    cardSubtitle: 'Aprende sobre la conservación',
    cardContent: 'Conoce los esfuerzos de investigación y conservación en el ecosistema local.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 9,
    imageSrc: '/public/assets/icon9.jp',
    altText: 'Cultivos Sostenibles',
    cardTitle: 'Novena Estación: Cultivos Sostenibles',
    cardSubtitle: 'Agricultura respetuosa con el medio ambiente',
    cardContent: 'Conoce cómo la agricultura sostenible ayuda a conservar los recursos naturales.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 10,
    imageSrc: '/public/assets/icon10.jp',
    altText: 'Manejo de Residuos',
    cardTitle: 'Décima Estación: Manejo de Residuos',
    cardSubtitle: 'La importancia de la gestión de residuos',
    cardContent: 'Aprende cómo la correcta gestión de residuos ayuda a mantener el sendero limpio y a conservar la biodiversidad.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 11,
    imageSrc: '/public/assets/icon11.jp',
    altText: 'Recursos Educativos',
    cardTitle: 'Undécima Estación: Recursos Educativos',
    cardSubtitle: 'Material educativo sobre biodiversidad',
    cardContent: 'Accede a libros y folletos sobre la fauna y flora local, así como sobre la importancia de la conservación.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 12,
    imageSrc: '/public/assets/icon12.jp',
    altText: 'Sendero de las Aves',
    cardTitle: 'Duodécima Estación: Sendero de las Aves',
    cardSubtitle: 'Un lugar para la observación de aves',
    cardContent: 'Explora el hábitat de las aves locales y disfruta de la observación de diversas especies.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 13,
    imageSrc: '/public/assets/icon13.jp',
    altText: 'Zona de Estudio',
    cardTitle: 'Decimotercera Estación: Zona de Estudio',
    cardSubtitle: 'Área educativa para estudiantes y grupos',
    cardContent: 'Ideal para grupos escolares o académicos, con espacios para conferencias y actividades educativas.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 14,
    imageSrc: '/public/assets/icon14.jp',
    altText: 'Cultura Local',
    cardTitle: 'Decimocuarta Estación: Cultura Local',
    cardSubtitle: 'Aprende sobre las costumbres y tradiciones',
    cardContent: 'Conoce las tradiciones culturales de las comunidades locales y su relación con la naturaleza.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 15,
    imageSrc: '/public/assets/icon15.jp',
    altText: 'Zona de Camping',
    cardTitle: 'Decimoquinta Estación: Zona de Camping',
    cardSubtitle: 'Disfruta de una experiencia al aire libre',
    cardContent: 'Acampa en la naturaleza y disfruta de un día en el bosque, aprendiendo sobre la importancia de la conservación.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 16,
    imageSrc: '/public/assets/icon16.jp',
    altText: 'Ruta de Senderismo',
    cardTitle: 'Decimosexta Estación: Ruta de Senderismo',
    cardSubtitle: 'Un recorrido por la montaña',
    cardContent: 'Sigue una ruta de senderismo a través de la montaña, observando diferentes tipos de vegetación y fauna.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 17,
    imageSrc: '/public/assets/icon17.jp',
    altText: 'Vista al Río',
    cardTitle: 'Decimoséptima Estación: Vista al Río',
    cardSubtitle: 'Contempla la belleza del río',
    cardContent: 'Disfruta de una vista panorámica del río y aprende sobre los ecosistemas acuáticos que sustentan la vida en la región.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
  {
    id: 18,
    imageSrc: '/public/assets/icon18.jp',
    altText: 'Final del Sendero',
    cardTitle: 'Decimoctava Estación: Final del Sendero',
    cardSubtitle: 'Cierre del recorrido',
    cardContent: 'Finaliza el recorrido con una reflexión sobre la importancia de la conservación y las acciones que puedes tomar.',
    linkTo: '/stations',
    arrowImage: '/public/assets/flecha-hacia-adelante.png',
  },
];



    

  </script>
  
  <style scoped>

.textEnum {
  background-color: #f9f9f9; /* Fondo suave para resaltar el texto */
  border: 2px solid #e0e0e0; /* Borde ligero para enmarcar el contenedor */
  padding: 20px; /* Espaciado interno */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para dar profundidad */
  font-family: 'Arial', sans-serif; /* Tipografía legible */
  max-width: 800px; /* Limita el ancho del texto */
  margin: 20px auto; /* Centra el contenedor horizontalmente */
}

.textEnum h1 {
  font-size: 24px; /* Tamaño del título */
  color: #2a7d2a; /* Color destacado para el título */
  text-align: center; /* Centra el título */
  margin-bottom: 15px; /* Espaciado inferior */
  text-transform: uppercase; /* Convierte a mayúsculas */
  letter-spacing: 0; /* Ajusta el espaciado entre letras (compacto) */
}

.textEnum p {
  font-size: 16px; /* Tamaño del texto */
  color: #555; /* Color gris oscuro para texto */
  line-height: 1.6; /* Espaciado entre líneas */
  text-align: justify; /* Justifica el texto */
  margin-bottom: 0; /* Evita espacio extra al final */
  letter-spacing: 0; /* Sin espacio adicional entre letras */
}

.card-image {
  width: 100%;
  max-height: 80px;
  object-fit: cover;
  border-radius: 8px;
}







  </style>