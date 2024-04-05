<template>
    <ion-page>
        <template v-if="loading">
            Loading...
        </template>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="Previous" :icon="caretBack"></ion-back-button>
                </ion-buttons>
                <template v-if="!skill">
                    Skill Not Found
                </template>
                <template v-else>
                    <ion-title>{{ skill.name }}</ion-title>
                </template>
            </ion-toolbar>
        </ion-header>
        
        <ion-content class="ion-padding">
            <ion-grid fixed>
                <ion-row class="ion-justify-content-center">
                    <ion-col size-md="6" size-lg="5" size-xs="12">
                        <template v-if="skill">
                            <h1>[ {{ skill.attribute }} ] {{ skill.name }} ( {{ skill.rank }} )</h1>
                            <ion-card v-for="(power, index) in skill.powers" :key="`${power}-${index}`">
                                <ion-card-header>
                                    <ion-card-title>Rank {{ index }}</ion-card-title>
                                </ion-card-header>
                                <ion-card-content>
                                    {{ power }}
                                </ion-card-content>
                            </ion-card>
                        </template>    
                    </ion-col>
                </ion-row>
            </ion-grid>        
        </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
import { useRoute } from 'vue-router'
import {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonGrid,
    IonCol,
    IonRow,
    loadingController
} from '@ionic/vue';
import { caretBack } from 'ionicons/icons';
import { computed, watch } from 'vue';
import { useGameStore } from "../stores/game";
import { storeToRefs } from 'pinia'
const { skills, loading } = storeToRefs(useGameStore());

(async () => {
  const loader = await loadingController.create({
    message: 'Loading...',
  });
  watch(loading, async (newValue, oldValue) => {
    if (newValue) loader.present();
    else loader.dismiss();
  });
  if (loading.value) loader.present();
})();

const { fetchSkills } = useGameStore()
fetchSkills();

const route = useRoute();
const skill = computed(() => skills.value.find(s => s.name === route.params.skill_id));
</script>
  