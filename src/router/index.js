import Vue from 'vue'
import Router from 'vue-router'
import HomeWrapper from '@/components/home/main.vue'
import Home from '@/components/home/home/home.vue'
import Cart from '@/components/home/cart/cart.vue'
import Cation from '@/components/home/cation/cation.vue'
import Mine from '@/components/home/mine/mine.vue'

import Introduce from '@/components/other/introduce.vue'
import Service from '@/components/other/service.vue'
import Shopkeeper from '@/components/other/Shopkeeper.vue'
import Welfare from '@/components/other/welfare.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeWrapper,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: 'cart',
          name: 'cart',
          component: Cart
        },
        {
          path: 'cation',
          name: 'cation',
          component: Cation
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        }
      ]
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/Shopkeeper',
      name: 'Shopkeeper',
      component: Shopkeeper
    },
    {
      path: '/welfare',
      name: 'welfare',
      component: Welfare
    }
  ]
})
