<template>
    <div class="timeline">
        <div class="top">
            <router-link to="/post">
            <img class="imgone" src="../../assets/1.jpg" alt="">
            </router-link>
            <input type="text" placeholder="请搜索" name="" id="">
        </div>
        <div class="main">
            <transition-group>
            <!-- <li v-for="item in list" :key="item.dynamicid">
                <div class="maintop">
                    <img src="../../assets/1.jpg" alt="">
                </div>
            </li> -->
            </transition-group>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .timeline{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column
    }
    .top{
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #000;
    }
    .imgone{
        width: 40px;
        height: 30px;
        line-height: 50px;
        align-items: center
    }
    .main{
        flex: 1;
    }
</style>