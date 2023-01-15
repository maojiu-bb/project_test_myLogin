import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路径模块
import pathArray from './pathArray.js'

// 导入组件
import Login from '@/components/Login/Login.vue'
import Home from '@/components/Home.vue'
import UserInfos from '@/components/Tabs/UserInfos.vue'
import Courses from '@/components/Tabs/Courses.vue'
import FineWorks from '@/components/Tabs/FineWords.vue'
import Settings from '@/components/Tabs/Settings.vue'
import UserDetail from '@/components/UserDetail/UserDetail.vue'
import FrontEnd from '@/components/MyCourses/FrontEnd.vue'
import RearEnd from '@/components/MyCourses/RearEnd.vue'
import BigData from '@/components/MyCourses/BigData.vue'
import AI from '@/components/MyCourses/ArtiInte.vue'
import SoftwareTeat from '@/components/MyCourses/SofewareTest.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 路由重定向
    { path: '/', redirect: '/login' },
    // 登录的路由规则
    { path: '/login', component: Login },
    // 首页的登录规则
    {
      path: '/home',
      component: Home,
      // 重定向
      redirect: '/home/userInfos',
      children: [
        // 定义子路由
        { path: 'userInfos', component: UserInfos },
        {
          path: 'courses',
          component: Courses,
          // 重定向
          redirect: '/home/courses/frontEnd',
          children: [
            // 子路由
            { path: 'frontEnd', component: FrontEnd },
            { path: 'rearEnd', component: RearEnd },
            { path: 'bigData', component: BigData },
            { path: 'ai', component: AI },
            { path: 'softwareTest', component: SoftwareTeat }
          ]
        },
        { path: 'fineWorks', component: FineWorks },
        { path: 'settings', component: Settings },
        { path: 'userDetail/:id', component: UserDetail, props: true }
      ]
    }
  ]
})

// 导航守卫
router.beforeEach((to, from, next) => {
  // 判断是否包含需要访问权限的路由对象
  if (pathArray.includes(to.path)) {
    // 得到  token 字符串，判断是否有 token
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      // 强制跳转到登录页面
      next('/login')
    }
  } else {
    next()
  }
})

export default router
