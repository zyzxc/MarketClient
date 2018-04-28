<template>
  <div class="head">
    <div class="headL">
      <img class="headLogo">
    </div>
    <div class="headR">
      <span style="color:#FFF">欢迎：{{username}}</span> <a @click="loginOut">安全退出</a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        username: 'admin'
      }
    },
    methods: {
      loginOut() {
        this.setToken("")
        localStorage.removeItem('MARKETSESSION')
        this.$router.push('/login')
      },
      ...mapMutations({
        'setToken': 'SET_TOKEN'
      })
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .head {
    width: 100%;
    height: 100px;
    background-color: #4390b9;
    .headL {
      width: 440px;
      height: 100%;
      text-align: center;
      float: left;
      display: inline-block;
      .headLogo {
        padding-top: 28px;
      }
    }
    .headR {
      width: 400px;
      height: 100%;
      display: inline-block;
      float: right;
      text-align: right;
      margin-top: 10px
      margin-right: 30px;
      a {
        color: #fff
        text-decoration: underline
        cursor: pointer
        margin-left: 20px
      }
    }
  }
</style>
