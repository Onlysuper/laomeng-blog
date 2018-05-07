import Vue from 'vue'
import Router from 'vue-router'
import myIndex from '@/views/index'
import myHome from '@/views/home'
import myAbout from '@/views/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MyIndex',
      component: myIndex,
      children: [
        {
          path: '',
          component: myHome
        },
        {
          path: 'about',
          component: myAbout
        }
      ]
    }
  ]
})
