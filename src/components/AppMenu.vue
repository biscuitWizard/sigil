<template>
  <ion-menu type="push" menu-id="sidebar" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Sigil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item-group>
          <ion-item-divider>
            <ion-label> Online Characters </ion-label>
          </ion-item-divider>
          <ion-item>
            <!-- "ion-justify-content-center" as a class on the ion item should have worked, but it didn't -->
            <!-- So, you know, hacks. -->
            <div style="display: flex; justify-content: center; width: 100%;">
              <ion-button>Login To View</ion-button>
            </div>
          </ion-item>
        </ion-item-group>
        <ion-item-group>
          <ion-item-divider>
            <ion-label> Offline Characters </ion-label>
          </ion-item-divider>
          <ion-item lines="none" button>
            <ion-avatar aria-hidden="true" slot="start">
              <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>Testeroni</ion-label>
          </ion-item>
          <ion-item lines="none" button>
            <ion-avatar aria-hidden="true" slot="start">
              <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>Beefaroni</ion-label>
          </ion-item>
        </ion-item-group>
        <ion-item lines="none" button>
            <ion-avatar aria-hidden="true" slot="start">
              <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>Riggatoni</ion-label>
          </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script setup lang="ts">
import { IonMenu, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonButton, IonIcon, IonAvatar, IonItemGroup, IonItemDivider, } from '@ionic/vue';
</script>