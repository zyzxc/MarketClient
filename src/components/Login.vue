<template>
  <div class="login" style="margin-top: 60px;">
    <div class="login-head">
      <div class="login-head-a">
        <img src="/static/images/a.jpg" title="" alt=""/>
        <p>我的</p>
      </div>
      <div class="login-head-b">
        商户后台管理
      </div>
    </div>
    <div class="login-con">
      <div class="login-a">
        <form id="loginForm" ref="loginForm">
          <div class="login-b">
            <div class="login-b-a">用户登陆</div>
            <div class="login-b-b">
              <ul>
                <li>
                  <label>用户名：</label><input type="text" id="mobile" v-model="username"/>
                  <h1 id="m-tip"></h1>
                </li>
                <li>
                  <label>密 &nbsp;&nbsp;码：</label><input type="password" v-model="password"/>
                  <h1 id="p-tip"></h1>
                </li>
                <li>
                  <label>用户名：</label><input type="text" style="width: 55px;" v-model="validCode"/>
                  <img type="text" class="code" style="width: 55px"/> <a href="#">看不清楚</a>
                  <h1 id="c-tip"></h1>
                </li>

                <li class="login-x">
                  <div class="login-x-a"><input type="button" style="text-align: center" value="登录"
                                                @click="handleLogin()"/>
                    <div class="x"></div>
                  </div>
                  <div class="login-x-a"><input type="button" style="text-align: center" value="订单查询"/>
                    <div class="x"></div>
                  </div>
                </li>

              </ul>
            </div>
            <div class="login-b-c">
              <a href="#">免费接入</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">忘记登录密码？</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="login-foot">
      我的网络科技有限公司©2018 闽ICP备18042771号
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  import {ERR_OK} from "store/constant"
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        username: '',
        password: '',
        validCode: ''
      }
    },
    computed: {
      ...mapGetters([
        'loginUser'
      ])
    },
    methods: {
      handleLogin() {
        const _self = this;
        axios.post(this.webUrl + 'users/doLogin', {
          username: _self.username,
          password: _self.password
        }).then(res => {
          if (res.data.code == ERR_OK) {
            _self.setLoginUser(res.data.result)
            _self.$router.push('/index/baseinfo')
          }
        })
      },
      _getCaptchaCode() {
        this.$http.get('').then(res => {

        })
      },
      ...mapMutations({
        'setLoginUser': 'ADD_LOGIN_USER'
      })
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~static/stylus/login"


</style>
