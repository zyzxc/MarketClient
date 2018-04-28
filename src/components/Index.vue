<template>
  <div>
    <my-header></my-header>
    <div class="layout" ref="layout">
      <div class="layout-slider-bar" style="float: left;">
        <menu-bar></menu-bar>
      </div>
      <div style="margin-left: 200px;height: 100%;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import myHeader from 'components/header/header'
  import myFooter from 'components/footer/footer'
  import MenuBar from 'components/menu-bar/menu-bar'

  const HEADER_HEIGHT = 100
  const FOOTER_HEIGHT = 30

  export default {
    data() {
      return {}
    },
    mounted() {
      this._layoutHeight()
    },
    methods: {
      _layoutHeight() {
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        this.$refs.layout.style.height = `${h - HEADER_HEIGHT - FOOTER_HEIGHT}px`
      }
    },
    components: {
      myHeader,
      MenuBar,
      myFooter
    }
  }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .layout {
    background: #f5f7f9;
    overflow: hidden;
    .layout-slider-bar {
      width: 200px;
      height 100%;
      min-width: 200px;
      max-width: 200px;
      flex: 0 0 200px;
      transition: all .2s ease-in-out;
      position: relative;
      background: #495060;
    }
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
