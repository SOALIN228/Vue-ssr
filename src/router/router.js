export default [
  {
    path: '/',
    redirect: '/app' // 默认跳转到app
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('../page/todo/todo'),
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter')
      next()
    }
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../page/login/login')
  }
]
