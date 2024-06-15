import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import UserView from '@/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signUp',
      component: SignUpView
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignInView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
  ]
})

export default router
