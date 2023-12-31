import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView  from '../views/ProductView.vue'
import TodoView  from '../views/TodoView.vue'
import ItemView from '../views/ItemView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/Product',
      name : 'Product',
      component: ProductView
    },
    {
      path:'/Todo',
      name : 'Todo',
      component: TodoView
    },
    {
      path:'/Product/:id',
      component: ItemView
    }
  ]
})

export default router
