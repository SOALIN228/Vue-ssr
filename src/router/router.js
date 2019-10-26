export default [
  {
    path: '/',
    redirect: '/app' // 默认跳转到app
  },
  {
    path: '/app/:id',
    name: 'app',
    component: () => import('../page/todo/todo'),
    props: true,
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
