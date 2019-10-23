import Todo from '../page/todo/todo'
import Login from '../page/login/login'

export default [
  {
    path: '/',
    redirect: '/app' // 默认跳转到app
  },
  {
    path: '/app/:pid',
    // props: true, // 通过props 方式传给页面，在Todo 中声明pid 就可以获取到
    name: 'app', // 可以根据name 进行页面跳转
    component: Todo,
    meta: { // 每个路由存储的数据
      title: 'this is app',
      description: 'asd'
    }
    // children: [ // 子路由
    //   {
    //     path: 'xxx', // 不用加/
    //     name: 'xxx',
    //     component: Login
    //   }
    // ]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }
]
