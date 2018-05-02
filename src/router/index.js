import Vue from 'vue'
import Router from 'vue-router'
import myIndex from '@/views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MyIndex',
      component: myIndex
    }
  ]
})
