<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/index/baseinfo">
      <span class="tab-link">个人基本信息</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/index/goods">
      <span class="tab-link">商品信息</span>
    </router-link>
    <!--    <router-link tag="div" class="tab-item" to="/rank">
          <span class="tab-link">排行</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/search">
          <span class="tab-link">搜索</span>
        </router-link>-->
  </div>
</template>
<script type="text/ecmascript-6">

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~static/stylus/variable"

  .tab
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      position: relative;
      cursor: pointer;
      z-index: 1;
      transition: all .2s ease-in-out;
      text-align center
      .tab-link
        display inline-block
        width: 200px
        height: 44px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: #2d8cf0;
          border-right: 2px solid #2d8cf0;
          background: #363e4f;
</style>
