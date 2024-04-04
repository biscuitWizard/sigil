<template>
    <div class="stat-group">
        <ion-button size="small" color="success">
            <div class="stat-group-inner">
                <ion-icon :icon="heart"/>
                <ion-label>
                WT 3
                </ion-label>
            </div>
        </ion-button>
        <ion-button size="small" color="success">
            <div class="stat-group-inner">
                <ion-icon :icon="sunny"/>
                <ion-label>
                    Fatigue 3
                </ion-label>
            </div>
        </ion-button>
        <ion-button size="small" color="success">
            <div class="stat-group-inner">
                <ion-icon :icon="bonfire"/>
                <ion-label>
                    Fervor 3
                </ion-label>            
            </div>
        </ion-button>
    </div>
</template>
  
<script setup lang="ts">
import { heart, sunny, bonfire } from 'ionicons/icons';
import { IonButton, IonIcon, IonLabel } from '@ionic/vue';

//   defineProps({
//   });
</script>
  
<style scoped>
.stat-group {
  display: flex;
  justify-content: center; /* Center the label group */
  width: 100%;
}

.stat-group-inner {
    display: flex;
    width: 100%;
    justify-content: space-between;
    
}

.stat-group .button {
  flex-grow: 1;
  
  /* Spacing between labels */
  margin-left: 1px;
  margin-right: 1px;
  --border-radius: 0;
}

.stat-group .button:first-child {
  --border-radius: 1em 0 0 1em;
}

.stat-group .button:last-child {
  --border-radius: 0 1em 1em 0;
}
</style>
  