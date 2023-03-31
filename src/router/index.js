// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: '/characters',
        name: 'Characters',
        component: () => import('@/views/CharactersView.vue'),
      },
      {
        path: '/locations',
        name: 'Locations',
        component: () => import('@/views/LocationsView.vue'),
      },
      {
        path: '/episodes',
        name: 'Episodes',
        component: () => import('@/views/EpisodesView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
