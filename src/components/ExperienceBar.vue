<template>
    <div>
    <div id="experience-bar" class="progress-container" @click="openPopover($event)">
      <div class="progress-bar">
        <div class="available-xp" :style="{width: progress + '%'}">
          <span>{{ availableExp }} Available</span>
          <span>{{  totalExp }} Total</span>
        </div>
      </div>
      <div class="bottom-bar">
        <div class="available-xp" :style="{width: progress + '%'}">
        </div>
      </div>
    </div>
    <ion-popover :is-open="popoverOpen" @didDismiss="popoverOpen = false" :event="event" reference="experience-bar" size="cover" side="bottom">
      <ion-content class="ion-padding experience-log">
        <ul>
          <li v-for="lineItem in expLineItems">
            <ion-label>{{ lineItem.label }}</ion-label>
            <ion-label>{{ lineItem.value }}</ion-label>
          </li>
          <li><hr></li>
          <li>
            <ion-label>Spent Total</ion-label>
            <ion-label>{{ spentExp }}</ion-label>
          </li>
        </ul>
      </ion-content>
    </ion-popover>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import {TransactionLog} from '@/stores/character';
import { IonLabel, IonItemDivider, IonContent, IonPopover } from '@ionic/vue';

const props = defineProps({
  experience: Array<TransactionLog>
});

const popoverOpen = ref(false);
const event = ref<Event | null>(null);

const openPopover = (e: Event) => {
  event.value = e;
  popoverOpen.value = true;
};

const totalExp = computed(() => 
  props.experience
    .filter(log => log.amount > 0)
    .reduce((accumulator, log) => accumulator + log.amount, 0));
const availableExp = computed(() => 
  props.experience
    .reduce((accumulator, log) => accumulator + log.amount, 0));
const spentExp = computed(() =>
  props.experience
    .filter(log => log.amount < 0)
    .reduce((accumulator, log) => accumulator + (log.amount * -1), 0));
const expLineItems = computed(() => {
  const lineItems = [];
  if (props.experience?.some(l => l.type === 'skill')) {
    lineItems.push({
      label: 'Skills',
      value: props.experience.filter(l => l.type === 'skill').reduce((accumulator, log) => accumulator + (log.amount * -1), 0)
    });
  }
  return lineItems;
})

const progress = computed(() => availableExp.value / totalExp.value * 100);
</script>

<style scoped>
.progress-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  cursor:pointer;
}

.progress-bar {
  transform-origin: center bottom;
  transform: perspective(700px) rotateX(35deg);
  background-color: rgb(25, 25, 25);
  width: 100%;
  height: 2em;
}

.available-xp {
  width: 70%;
  background-color: rgb(255, 82, 82);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1em;
  padding-right: 1em;
}

.bottom-bar {
  filter: brightness(0.6);
  transform-origin: center top;
  transform: perspective(700px) rotateX(-35deg) !important;
  background-color: rgb(25, 25, 25);
  width: 100%;
  height: 0.5em;
}

.experience-log ul {
  list-style-type:none;
  margin: 0;
  padding-left: 0;
}

.experience-log li {
  display: flex;
  justify-content: space-between;
  padding-left: 1em;
  padding-right: 1em;
}
</style>
