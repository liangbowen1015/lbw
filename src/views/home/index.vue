<template>
    <div class="wrap">
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="foot">
            <router-link to="/home/timeline">圈子</router-link>
            <router-link to="/home/my">我的</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
       
    } 
    .main{
            flex: 1
        }

        .foot{
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-around;
            background: pink;
            line-height: 50px;
        }
</style>