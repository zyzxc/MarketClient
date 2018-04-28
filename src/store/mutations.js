import * as types from './mutation-types'

const mutations = {
  [types.ADD_LOGIN_USER](state, user) {
    sessionStorage.setItem('USERINFO', user)
    sessionStorage.setItem('ISLOGIN', true)
    state.loginUser = user
    state.isLogin = true
  }
}

export default mutations

