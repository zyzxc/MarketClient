import * as types from './mutation-types'

export const isLogin = function ({commit, state}) {
  if (!state.isLogin) {
    state.isLogin = sessionStorage.getItem('ISLOGIN')
    state.loginUser = sessionStorage.getItem('USERINFO')
  }
  return state.isLogin
}
