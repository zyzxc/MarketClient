// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


Vue.config.productionTip = false
Vue.prototype.webUrl = 'http://localhost:3000/'

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else if (to.meta.requireAuth) {
    if (sessionStorage.getItem('ISLOGIN')) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
