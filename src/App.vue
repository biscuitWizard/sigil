<template>
  <ion-app>
    <ion-router-outlet v-if="!isInitializing"/>
    <ion-loading :isOpen="isInitializing" message="Application Initializing..."></ion-loading>
  </ion-app>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { IonApp, IonRouterOutlet, IonLoading } from '@ionic/vue';
import {initializedStores} from '@/stores/localStorage';

/**
 * This block of codes to exist hardcoded references to the modules we want to load.
 * This has to be done this way because it's sort of messy but it loads
 * in all the data from local storage before the application starts
 */
import { useGameStore } from './stores/game';
const gameStore = useGameStore();
import { useCharacterStore } from './stores/character';
const characterStore = useCharacterStore();


// The application will remain in loading until these stores have initialized...
const waitForStores = [characterStore.$id, gameStore.$id];
const isInitializing = ref(true);
watch(initializedStores, (newValue) => {
  isInitializing.value = !waitForStores.every(s => newValue.includes(s));
});
</script>
