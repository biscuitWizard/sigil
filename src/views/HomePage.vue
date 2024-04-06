<template>
  <ion-page>
    <app-menu/>
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
  </ion-page>
</template>

<script setup lang="ts">
import { IonFab, IonFabButton, IonIcon, IonContent, IonPage, menuController  } from '@ionic/vue';
import { add } from 'ionicons/icons';
import CharacterSheet from '@/components/CharacterSheet.vue';
import AppMenu from "@/components/AppMenu.vue";
</script>

<style scoped>
</style>