import Vue from 'vue'
import VueRouter from 'vue-router'
import vInstructions from '@/pages/instructions.vue'
import vSearch from '@/pages/search/search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Instructions',
    component: vInstructions
  },
  {
    path: '/busca',
    name: 'Search',
    component: vSearch
  }
]

const router = new VueRouter({
  mode: 'history',
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes
})

export default router
