<template>
  <ul class="step-menu">
    <li role="button" class="label">
      {{ name }}
    </li>
    <li role="button"></li>
    <li role="button"></li>
    <li role="button"></li>
    <li role="button"></li>
    <li role="button"></li>
    <li role="button"></li>
  </ul>
</template>

<script setup lang="ts">
import { IonBadge } from '@ionic/vue';


defineProps({
  name: String,
  color: String,
  score: Number
});
</script>

<style scoped>
.step-menu {
  list-style-type:none;
  margin: 0;
  padding-left: 0;

  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
   user-select: none;   
}

.step-menu li {
  box-sizing: border-box; 
  float: left;
  background: #ddd;
  height: 32px;
  text-align: center;
  padding: 7.5px 2px 2px 7.5px;
  position: relative;
  margin-left: 8px;

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
  border-left-color: #ddd;
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
  color: white;
  width: 8em;
  text-transform: uppercase;
}

.step-menu li.label:hover {
  background: rgba(91,162,223, 0.4);
}

.step-menu li.label:hover:after {
  border-left-color: rgba(91,162,223, 0.4);
}

.step-menu li.label:after {
  border-left-color: rgba(51,122,183, 0.4);
}

.step-menu li.complete {
  background: rgba(51,122,183, 0.4);
  color: white;
}
.step-menu li.complete:after {
  border-left-color: rgba(51,122,183, 0.4);
}
</style>
