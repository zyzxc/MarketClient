import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import Login from 'components/Login'
import Index from 'components/Index'
import Goods from 'components/goods/goods'
import BaseInfo from 'components/baseinfo/baseinfo'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: "Index",
      meta: {
        requireAuth: true,
      },
      component: Index,
      children: [
        {
          path: "/index/baseinfo", meta: {
            requireAuth: true,
          }, component: BaseInfo
        },
        {
          path: "/index/goods", meta: {
            requireAuth: true,
          }, component: Goods
        }
      ]
    }
  ]
})
