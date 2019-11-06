<template>
  <div class="home">
     <div class="head">
       <input class="ipt" type="text" value="高考志愿填报"> 提问
     </div> 
     <div class="main">
       <div class="sanji">
          <router-link to="/about/shou/guan">关注</router-link>
        <router-link to="/about/shou/tui">推荐</router-link>
        <router-link to="/about/shou/re">热榜</router-link>
       </div>
       <div class="router">
         <router-view/>
       </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
   //这里是三级路由
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
  .head{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid  silver
  }
  .main{
    flex: 1;
    overflow: auto;
  }
  .ipt{
    width: 250px;
    height: 25px;
    border: none;
    border-radius: 4px;
    margin: 10px 10px;
    background:silver
  }
  .sanji{
    display: flex;
    justify-content: space-around;
    line-height: 30px;
    height: 30px;
  }
  a{
    color: black;
    text-decoration: none;
  }
</style>
