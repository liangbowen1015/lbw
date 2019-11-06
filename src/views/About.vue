<template>
  <div class="home">
      <div class="main">
         <router-view/>
      </div>
      <div class="foot">
        <router-link to="/about/shou">首页</router-link>
        <router-link to="/about/xiang">想法</router-link>
        <router-link to="/about/da">大学</router-link>
        <router-link to="/about/xiao">消息</router-link>
        <router-link to="/about/wo">我的</router-link>
      </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
   //这里是二级路由
  }
}
</script>
<style lang="scss">
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column
  }
  .main{
    flex: 1
  }
  .foot{
    display: flex;
    justify-content: space-around;
    height:50px;
    line-height:50px;
    border-top: 1px solid #000;
  }
</style>
