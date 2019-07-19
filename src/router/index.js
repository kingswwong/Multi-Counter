import Vue from 'vue'
import Router from 'vue-router'
import CounterGroup from '@/components/CounterGroup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CounterGroup',
      component: CounterGroup
    }
  ]
})
