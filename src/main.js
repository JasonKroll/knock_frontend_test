import Vue from 'vue'
// import VueRouter from 'vue-router';
import App from './App.vue'
import myheader from './myheader.vue'

// Vue.use(VueRouter);

// const routes = [
//   { path: '/', component : App},
//   { path: '/map/:mapID', component : WebMap}
// ];

Vue.component('myheader', myheader)

new Vue({
  el: '#app',
  render: h => h(App)
})
