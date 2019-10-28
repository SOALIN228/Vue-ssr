import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import CreateStore from './store'
import CreateRouter from './router'
import './assets/styles/global.scss'

Vue.use(Router)
Vue.use(Vuex)

const router = CreateRouter()
const store = CreateStore()
store.registerModule('newModule', {
  state: {
    text: 'newModule'
  }
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach')
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
