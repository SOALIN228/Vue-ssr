import Vue from 'vue'
import App from './App.vue'
import CreateRouter from './router'
import './assets/styles/global.scss'

const router = CreateRouter()
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
