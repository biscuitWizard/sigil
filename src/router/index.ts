import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SkillPage from '../views/SkillPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/skills/:skill_id',
    component: SkillPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
