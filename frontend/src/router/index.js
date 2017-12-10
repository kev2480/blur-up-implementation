import Vue from 'vue'
import Router from 'vue-router'
import BlurUp from '@/components/BlurUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlurUp',
      component: BlurUp
    }
  ]
})
