import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/AppIndex'
import AppCounter from '@/components/AppCounter'
import AppList from '@/components/AppList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppIndex',
      component: AppIndex
    },
    {
      path: '/counter',
      name: 'AppCounter',
      component: AppCounter
    },
    {
      path: '/list',
      name: 'AppList',
      component: AppList
    }
  ]
})
