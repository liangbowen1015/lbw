<template>
  <div class="home">
     <div class="box">
       {{ this.$route.params.item.p }}
      </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  created(){
     console.log(this.$route)
  },
  methods:{
    aa(){
      console.log(this.$route)
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

  .box{
    width: 100%;
    height: 100px;
    border: 3px solid silver;
    margin-top: 20px;
  }
</style>
