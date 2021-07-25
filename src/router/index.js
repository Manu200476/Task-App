import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { userRoute: true },
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: () => import('../views/Task.vue'),
    meta: { userRoute: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/singup',
    name: 'SingUp',
    component: () => import('../views/SingUp.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.userRoute) {
    if (store.getters.checkUser) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
