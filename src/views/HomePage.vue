<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid fixed>
        <ion-row class="ion-justify-content-center">
          <ion-col size-md="6" size-lg="5" size-xs="12">
            <stat-group>

            </stat-group>
          </ion-col>
        </ion-row>  
        <ion-row class="ion-justify-content-center">
          <ion-col size-md="3">
             <attribute-score name="brutality" :score=2></attribute-score>
          </ion-col>
          <ion-col size-md="3">
             <attribute-score name="cunning" :score=2></attribute-score>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size-md="3">
             <attribute-score name="wisdom" :score=2></attribute-score>
          </ion-col>
          <ion-col size-md="3">
             <attribute-score name="intellect" :score=2></attribute-score>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size-md="3">
             <attribute-score name="passion" :score=2></attribute-score>
          </ion-col>
          <ion-col size-md="3">
             <attribute-score name="empathy" :score=2></attribute-score>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size-md="6" size-lg="5" size-xs="12">
            <ion-accordion-group ref="accordionGroup" :multiple="true" :value="getAttributes">
              <ion-accordion v-for="attribute in getAttributes" :key="attribute" :value="attribute">
                <ion-item slot="header" color="light" class="attribute-header">
                  <ion-label>{{ attribute }}</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">
                  <skill-score v-for="skill in skills.filter(s => s.attribute === attribute)" :key="skill.name" :name="skill.name" :type="skill.rank.toLowerCase()"/>
                </div>
              </ion-accordion>
            </ion-accordion-group>   
          </ion-col>  
        </ion-row> 
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { IonPage, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonAccordionGroup, IonAccordion, IonContent } from '@ionic/vue';
import AttributeScore from "../components/AttributeScore.vue";
import StatGroup from "../components/StatGroup.vue";
import SkillScore from "../components/SkillScore.vue";

import { useGameStore } from "../stores/game";
import { storeToRefs } from 'pinia'
const { skills, getAttributes, loading } = storeToRefs(useGameStore());

const { fetchSkills } = useGameStore()
fetchSkills();
</script>

<style scoped>
.attribute-header {
  margin-bottom: 0.2em;
  margin-top: 0.2em;
  border-radius: 1em;
}

ion-card-content p {
  font-size: 1em;
  color: #666; /* Subtle color for the description */
}

.ion-padding {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
}
</style>