<template>
  <div class="home">
    <div class="box" @click="dian(item,index)" v-for="(item,index) in list" :key="index">
      <p>
        {{item.p}}
      </p>
      <h4>{{item.h}}</h4>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
   
  },
  data(){
    return {
      list:[
        {
          p:"陈满蒙在插百货商场出包豪斯1",
          h:"雪白的韩三春场比赛的差多少笔",
          span:"赛地擦擦岁从萨比对错擦啥白山参",
        },
         {
          p:"陈满蒙在插百货商场出包豪斯2",
          h:"雪白的韩三春场比赛的差多少笔",
          span:"赛地擦擦岁从萨比对错擦啥白山参",
        },
         {
          p:"陈满蒙在插百货商场出包豪斯3",
          h:"雪白的韩三春场比赛的差多少笔",
          span:"赛地擦擦岁从萨比对错擦啥白山参",
        }
      ]
    }
  },
  methods:{
    dian(item,index){
      this.$router.push({
        name : "detail",
        params : {
          item : item
        }
      })
    }
  }
}
</script>


<style lang="scss">
  .home{
    width: 100%;
    height: 100%;
    list-style: none;
  }
  p{
    color: silver;
    font-size: 16px
  }
  .box{
    width: 100%;
    height: 100px;
    border: 3px solid silver;
    margin-top: 20px;
  }
</style>