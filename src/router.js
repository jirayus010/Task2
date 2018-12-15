import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import employees from './views/employees.vue'
import graph from './views/graph.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/employees',
      name: 'employees',
      component: employees
    },
    
  ]
})
