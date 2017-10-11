import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HomePage'
import TestPage from './components/TestPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test-page',
      name: 'test-page',
      component: TestPage
    }
  ]
})
