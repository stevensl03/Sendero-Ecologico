<template>
  <ion-card>
    <ion-grid>
      <ion-row>
        <!-- Columna de la imagen -->
        <ion-col size="4" class="image-container">
          <img :alt="altText" :src="imageSrc" class="card-image" />
        </ion-col>
        <!-- Columna del texto -->
        <ion-col size="8">
          <ion-card-header>
            <ion-card-title>{{ cardTitle }}</ion-card-title>
            <ion-card-subtitle>{{ cardSubtitle }}</ion-card-subtitle>
            <router-link :to="`${linkTo}/${id}`">
              <img :src="arrowImage" width="50px" />
            </router-link>
          </ion-card-header>
        </ion-col>
        <ion-card-content>
          {{ cardContent }}
        </ion-card-content>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script setup>
defineProps({
  id: Number,
  imageSrc: String,
  altText: String,
  cardTitle: String,
  cardSubtitle: String,
  cardContent: String,
  linkTo: String,
  arrowImage: String
})
</script>

<style scoped>
ion-card {
  margin: 16px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: #ffffff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

ion-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

ion-grid {
  padding: 0;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  max-height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

ion-card-header {
  margin-bottom: 12px;
}

ion-card-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #222;
  margin: 0;
}

ion-card-subtitle {
  font-size: 1rem;
  color: #555;
  margin: 4px 0 0;
}

ion-card-content {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
}

/* Diseño responsivo */
@media (max-width: 768px) {
  ion-col[size="4"] {
    margin-bottom: 16px;
  }

  ion-col[size="8"] {
    text-align: center;
  }

  .card-image {
    max-height: 120px;
  }

  ion-card-title {
    font-size: 1.2rem;
  }

  ion-card-subtitle {
    font-size: 0.9rem;
  }
}
</style>