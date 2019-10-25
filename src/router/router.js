import Todo from '../page/todo/todo'
import Login from '../page/login/login'

export default [
  {
    path: '/',
    redirect: '/app' // 默认跳转到app
  },
  {
    path: '/app/:id',
    name: 'app',
    component: Todo,
    props: true,
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter')
      next()
    }
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }
]
