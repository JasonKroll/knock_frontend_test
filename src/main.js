import Vue from 'vue'
// import VueRouter from 'vue-router';
import router from './routes'
import App from './App.vue'
import myheader from './myheader.vue'
import authfields from './components/users/authfields.vue'

Vue.component('myheader', myheader)
Vue.component('authfields', authfields)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
