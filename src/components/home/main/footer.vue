<template>
  <div id="footer" class="footer">
      <!-- <router-view class="wrapper"></router-view> -->
      <ul class="footer">
        <router-link :tag="'li'" :to="{name:'home'}">
            <span class="iconfont icon-shouye"></span>
            <span>首页</span>
        </router-link>
        <router-link :tag="'li'" :to="{name:'cation'}">
           <span class="iconfont icon-faxian1"></span> 
           <span>发现</span>
        </router-link>
        <router-link :tag="'li'" :to="{name:'cart'}">
            <span class="span" @click="showAlert">
            <span class="iconfont iconfont icon-gouwuche"></span>
            <span>购物车</span>  
            </span>
        </router-link>
        <router-link :tag="'li'" :to="{name:'mine'}">
            <span class="iconfont icon-wode2"></span>
            <span>我的</span>
        </router-link>
     </ul>
  </div>
</template>

<script>
    export default {
        name: 'footers',
         methods: {
    showAlert() {
      this.$createDialog({
        type: 'alert',
        title: '提示',
        content: '请先登入您的账户'
      }).show()
    }
  }
    }
</script>

<style scoped>
.footer{
    width: 100%;
    display: flex;
    border-top: 0.01rem solid #ccc;
    align-items: center;
    height: 1.04rem;
}
.footer li{
    flex:1;
    text-align: center;
    font-size: 0.28rem;
}
.footer li span,.span{
    display: block;
    padding: 0.02rem 0;  
    background-color: #fff; 
    color: #000;
}
.iconfont{
    font-size: 0.4rem;
}
.router-link-exact-active{
    color: red;
}
</style>

