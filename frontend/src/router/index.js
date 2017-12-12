import Vue from 'vue'
import Router from 'vue-router'
import BlurUp from '@/components/BlurUp'
import Primitive from '@/components/Primitive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlurUp',
      component: BlurUp
    },
    {
      path: '/Primitive',
      name: 'Primitive',
      component: Primitive
    }
  ]
})
