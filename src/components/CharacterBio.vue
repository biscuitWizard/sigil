<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title class="bio-title">
        <ion-button size="small" fill="outline" class="name-button">
          Character Name
          <ion-icon slot="end" :icon="pencil"></ion-icon>
        </ion-button>
      </ion-card-title>
      <ion-card-subtitle>
        Played by: Looni Macaroni
      </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content class="bio-content">
      <ion-avatar class="avatar">
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-avatar>
      <div class="fields">
        
        <ion-select aria-label="Culture" interface="popover" placeholder="Select Culture" justify="end" >
          <ion-select-option value="apples">Apples</ion-select-option>
          <ion-select-option value="oranges">Oranges</ion-select-option>
          <ion-select-option value="bananas">Bananas</ion-select-option>
        </ion-select>
        <ion-select aria-label="Upbringing" interface="popover" placeholder="Select Upbringing" justify="end" >
          <ion-select-option value="apples">Apples</ion-select-option>
          <ion-select-option value="oranges">Oranges</ion-select-option>
          <ion-select-option value="bananas">Bananas</ion-select-option>
        </ion-select>
        <ion-select aria-label="Origin" interface="popover" placeholder="Select Origin" justify="end" >
          <ion-select-option value="apples">Apples</ion-select-option>
          <ion-select-option value="oranges">Oranges</ion-select-option>
          <ion-select-option value="bananas">Bananas</ion-select-option>
        </ion-select>
        <ion-select aria-label="Training" interface="popover" placeholder="Select Training" justify="end" >
          <ion-select-option value="apples">Apples</ion-select-option>
          <ion-select-option value="oranges">Oranges</ion-select-option>
          <ion-select-option value="bananas">Bananas</ion-select-option>
        </ion-select>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { pencil } from 'ionicons/icons';
import { IonSelectOption, IonCardHeader, IonCardTitle, IonCardSubtitle, IonAvatar, IonSelect, IonButton, IonIcon, IonCard, IonCardContent } from '@ionic/vue';

</script>

<style scoped>
.bio-title {
  display: flex;
  justify-content: center;
}

.bio-title .name-button {
  flex-grow: 1;
  padding-left: 1em;
  padding-right: 1em;
}

.bio-content {
  display: flex;
  justify-content: space-evenly;
}

.bio-content .fields {
  flex-grow: 1;
  flex-direction: column;
  display: flex;
  gap: 0.25em;
}

.bio-content .avatar {
  margin: 0 1em 0 1em;
  width: 150px;
  height: 150px;
}

ion-avatar {
  --border-radius: 4px;
}
</style>
