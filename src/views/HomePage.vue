<template>
  <ion-menu type="push" menu-id="sidebar" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu>
  <ion-page id="main-content">   
    <ion-content :fullscreen="true">
      <ion-fab slot="fixed" vertical="top" horizontal="start">
        <ion-fab-button @click="menuController.open('sidebar')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <character-sheet />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonFab, IonFabButton, IonIcon, IonContent, IonPage, menuController  } from '@ionic/vue';
import { add } from 'ionicons/icons';
import CharacterSheet from '@/components/CharacterSheet.vue';
</script>

<style scoped>
</style>