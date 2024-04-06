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
        <character-sheet v-if="currentCharacter !== undefined"/>
      </ion-content>
    </ion-page>
  </ion-page>
</template>

<script setup lang="ts">
import { IonFab, IonFabButton, IonIcon, IonContent, IonPage, menuController  } from '@ionic/vue';
import { add } from 'ionicons/icons';
import CharacterSheet from '@/components/CharacterSheet.vue';
import AppMenu from "@/components/AppMenu.vue";
import { useCharacterStore } from '@/stores/character';
import { storeToRefs } from 'pinia';

const { currentCharacter } = storeToRefs(useCharacterStore());
const { newCharacter } = useCharacterStore();
if (currentCharacter.value === undefined) newCharacter();

</script>