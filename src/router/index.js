import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'
import ProfileView from '../views/ProfileView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/movie/:id',
      name: 'movieView',
      component: MovieView,
    },
    {
      path: '/profile',
      name: 'profileView',
      component: ProfileView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/register',
      name: 'registerView',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'loginView',
      component: LoginView,
    },
  ],
})

export default router
