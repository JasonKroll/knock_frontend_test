import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Login from '../components/users/Login.vue'
import Signup from '../components/users/Signup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: App,
    //   props: true
    // },
    {
      path: '/users/login',
      name: 'login',
      component: Login,
      props: true
    },
    {
      path: '/users/signup',
      name: 'signup',
      component: Signup,
      props: true
    }
  ]
})