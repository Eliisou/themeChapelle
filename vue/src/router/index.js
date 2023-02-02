import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TypeView from '../views/TypeView.vue';
import DemarcheDistView from '../views/DemarcheDistView.vue';
import DocView from '../views/DocView.vue';
import EventsView from '../views/EventsView.vue';
import ListDemarchesView from '../views/ListDemarchesView.vue';
import NewsView from '../views/NewsView.vue';
import ServicesView from '../views/ServicesView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/type',
      name: 'type',
      component: TypeView,
    },
    {
      path: '/demarcheDistance',
      name: 'demarcheDistance',
      component: DemarcheDistView,
    },
    {
      path: '/flash-info',
      name: 'doc',
      component: DocView,
    },
    {
      path: '/agenda',
      name: 'events',
      component: EventsView,
    },
    {
      path: '/liste-des-demarches',
      name: 'listDemarches',
      component: ListDemarchesView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    
  
  ],
});


export default router;