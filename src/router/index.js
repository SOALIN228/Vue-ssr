import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

export default () => {
  return new Router({
    routes,
    mode: 'history', // 使用history 模式
    linkActiveClass: 'active-link', // 路径部分匹配或完全匹配
    linkExactActiveClass: 'exact-active-link', // 路径完全匹配
    scrollBehavior (to, from, savedPosition) { // 控制每次进入页面的滚动
      return { x: 0, y: 0 }
    },
    fallback: true // 默认为true，当浏览器不支持history 路由回退到hash 模式
  })
}
