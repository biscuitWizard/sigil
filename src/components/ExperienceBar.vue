<template>
  <div class="progress-container">
    <div class="progress-bar">
      <div class="available-xp">
        100 XP
      </div>
    </div>
    <div class="bottom-bar">
      <div class="available-xp">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {TransactionLog} from '@/stores/character';

const props = defineProps({
  experience: Array<TransactionLog>
});

// const spentXpWidth = computed(() => (props.spentXP / props.totalXP) * 100);
// const startingXpWidth = computed(() => (props.startingXP / props.totalXP) * 100);
// const availableXpWidth = computed(() => (props.availableXP / props.totalXP) * 100);
</script>

<style scoped>
.progress-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

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
  padding-left: 1em;
}

.bottom-bar {
  filter: brightness(0.6);
  transform-origin: center top;
  transform: perspective(700px) rotateX(-35deg) !important;
  background-color: rgb(25, 25, 25);
  width: 100%;
  height: 0.5em;
}
</style>
