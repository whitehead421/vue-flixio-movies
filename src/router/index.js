import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      alert('You must be logged in to see this page.')
      next('/')
    }
  } else {
    next()
  }
})

export default router
