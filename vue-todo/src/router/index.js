import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CriarProduto',
    component: () => import('../views/CriarProduto.vue')
  },
  {
    path: '/produtos',
    name: 'Produtos',
  
    component: () => import('../views/Produtos.vue')
  },
  {
    path: '/edit/:id',
    name: 'EditarProduto',
    component: () => import('../views/EditarProduto.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
