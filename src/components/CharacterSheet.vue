<template>
  <ion-grid fixed>
    <ion-row class="ion-justify-content-center">
      <ion-col size-md="6" size-lg="5" size-xs="12">
        <character-bio :character="character"></character-bio>
      </ion-col>
    </ion-row>
    <ion-row class="ion-justify-content-center">
      <ion-col size-md="6" size-lg="5" size-xs="12">
        <experience-bar :experience="character.experience"></experience-bar>
      </ion-col>
    </ion-row>  
    <ion-row class="ion-justify-content-center">
      <ion-col size-md="6" size-lg="5" size-xs="12">
        <stat-group/>
      </ion-col>
    </ion-row>  
    <ion-row class="ion-justify-content-center">
      <ion-col size-md="2.5">
          <attribute-score name="brutality" :score=2></attribute-score>
      </ion-col>
      <ion-col size-md="2.5">
          <attribute-score name="cunning" :score=2></attribute-score>
      </ion-col>
    </ion-row>
    <ion-row class="ion-justify-content-center">
      <ion-col size-md="2.5">
          <attribute-score name="wisdom" :score=2></attribute-score>
      </ion-col>
      <ion-col size-md="2.5">
          <attribute-score name="intellect" :score=2></attribute-score>
      </ion-col>
    </ion-row>
    <ion-row class="ion-justify-content-center">
      <ion-col size-md="2.5">
          <attribute-score name="passion" :score=2></attribute-score>
      </ion-col>
      <ion-col size-md="2.5">
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
              <skill-score 
                v-for="skill in skills.filter(s => s.attribute === attribute)" 
                :key="skill.name" 
                :name="skill.name" 
                :type="skill.rank.toLowerCase()" 
                :rank="getCharacterSkillRank(character, skill.name)"/>
            </div>
          </ion-accordion>
        </ion-accordion-group>   
      </ion-col>  
    </ion-row> 
  </ion-grid>
</template>

<script setup lang="ts">
import {watch} from 'vue';

import { IonGrid, IonRow, IonCol, IonItem, IonLabel, IonAccordionGroup, IonAccordion, loadingController } from '@ionic/vue';
import AttributeScore from "../components/AttributeScore.vue";
import StatGroup from "../components/StatGroup.vue";
import SkillScore from "../components/SkillScore.vue";
import CharacterBio from "../components/CharacterBio.vue";
import ExperienceBar from "../components/ExperienceBar.vue";

import { useGameStore } from "../stores/game";
import { useCharacterStore, Character } from "../stores/character";
import { storeToRefs } from 'pinia'
const { skills, getAttributes, loading } = storeToRefs(useGameStore());
const { currentCharacter, getCharacterSkillRank } = storeToRefs(useCharacterStore());

const props = defineProps({
  character: {} as Character
});

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