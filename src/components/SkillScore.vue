<template>
  <ul class="step-menu" :style="{ marginLeft: computedPadding }">
    <li role="button" v-if="type === 'advanced'" class="advanced"></li>
    <template v-else-if="type === 'mastery'">
      <li role="button" class="mastery"></li>
      <li role="button" class="mastery"></li>
    </template>
    <li role="button" class="label" @click="() => router.push(`/skills/${name}`)">{{ name }}</li>
    <li role="button" @click="doShowInteractSheet" :class="rank && rank >= 1 ? 'purchased' : ''"></li>
    <li role="button" @click="doShowInteractSheet" :class="rank && rank >= 2 ? 'purchased' : ''"></li>
    <li role="button" @click="doShowInteractSheet" :class="rank && rank >= 3 ? 'purchased' : ''"></li>
  </ul>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useIonRouter, actionSheetController } from '@ionic/vue';
import { useGameStore } from "../stores/game";
import { useCharacterStore } from "../stores/character";
const { purchaseSkillRank, refundSkillRank } = useCharacterStore();
import { storeToRefs } from 'pinia'
const { skills } = storeToRefs(useGameStore());

const props = defineProps({
  name: String,
  type: String,
  rank: Number
});

const router = useIonRouter();

const doShowInteractSheet = async () => {
  const buttons = [];
  // If we're under max rank, check if we can purchase.
  if (props.rank !== undefined && props.rank < 3) {
    buttons.push({
      text: 'Purchase Rank',
      data: {
        action: 'purchase'
      }
    });
  }
  // If we're above rank 0, add an option to forget.
  if (props.rank !== undefined && props.rank > 0) {
    buttons.push({
      text: 'Forget Rank',
      role: 'destructive',
      data: {
        action: 'forget'
      }
    });
  }
  // We can always cancel
  buttons.push({
    text: 'Cancel',
    role: 'cancel',
    data: {
      action: 'cancel',
    },
  });

  // Creates the action sheet we modify later.
  const interactSheet = await actionSheetController.create({
    header: `Modify ${props.name}`,
    buttons,
  });

  // Called when the user selects an action from the initial menu.
  interactSheet.onDidDismiss().then(async (ev: any) => {
    if (props.name && ev.data.action === 'forget') {
      refundSkillRank(props.name);
    } else if (ev.data.action === 'purchase' && props.name) {
      // On purchase we show them an additional confirmation screen.
      const newRank = (props.rank ?? 0) + 1;
      const purchaseSheet = await actionSheetController.create({
        header: `${props.name} Rank ${newRank}`,
        subHeader: skills.value.find(s => s.name === props.name)?.powers[newRank - 1], // This line of code gets the mechanic description
        buttons: [
          {
            text: 'Purchase',
            data: {
              action: 'purchase'
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          }
        ]
      });

      purchaseSheet.onDidDismiss().then((purchaseEv) => {
        if (props.name && purchaseEv.data.action === 'purchase') {
          purchaseSkillRank(props.name);
        }
      });

      purchaseSheet.present();
    }
  });

  interactSheet.present();
};

// Create a computed property to determine the padding based on 'type'
const computedPadding = computed(() => {
  if (props.type === 'mastery') return '0';
  if (props.type === 'advanced') return '24px';
  return '56px';
});
</script>

<style scoped>
.step-menu {
  list-style-type:none;
  margin: 0;
  padding-left: 0;

  /** This exists to remove the caret. */
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
   user-select: none;   
}

.step-menu li {
  box-sizing: border-box; 
  float: left;
  background: var(--ion-color-light-tint);
  height: 32px;
  text-align: center;
  padding: 7.5px 7.5px 7.5px 7.5px;
  position: relative;
  margin-left: 10px;

  transition: 0.2s;
  cursor:pointer;
}
.step-menu li:before {
  content: '';
  position: absolute;
  border: 16px solid transparent;
  border-left-color: rgb(18, 18, 18);
  top: 0;
  right: -40px;
}
.step-menu li:after {
  content: '';
  position: absolute;
  border: 16px solid transparent;
  border-left-color: var(--ion-color-light-tint);
  top: 0;
  right: -32px;

  transition: 0.2s;
}
.step-menu li:nth-child(1) {
  z-index:600;
  margin-left: 0;
  padding-left: 16px;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
}
.step-menu li:nth-child(2) {
  z-index:500;
}
.step-menu li:nth-child(3) {
  z-index:400;
}
.step-menu li:nth-child(4) {
  z-index:300;
}
.step-menu li:nth-child(5) {
  z-index:200;      
}
.step-menu li:nth-child(6) {
  z-index:100;
}

.step-menu li.label {
  background: rgba(51,122,183, 0.4);
  color: var(--ion-text-color);
  width: 10em;
}

.step-menu li.label:after {
  border-left-color: rgba(51,122,183, 0.4);
}

.step-menu li.label:hover {
  background: rgba(91,162,223, 0.4);
}

.step-menu li.label:hover:after {
  border-left-color: rgba(91,162,223, 0.4);
}

.step-menu li.advanced:after {
  border-left-color: rgb(255,179,71);
}
.step-menu li.advanced {
  background: rgb( 255,179,71);
}

.step-menu li.mastery {
  background: rgba(150, 111, 214, 0.4);
}
.step-menu li.mastery:after {
  border-left-color: rgba(150, 111, 214, 0.4);
}

.step-menu li.purchased {
  background: var(--ion-color-dark);
}
.step-menu li.purchased:after {
  border-left-color: var(--ion-color-dark);
}
</style>
