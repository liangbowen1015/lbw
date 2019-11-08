<template>
    <div class="logbox">
        <div class="head">
            注册
        </div>
        <div class="main">
            <input type="text" v-model="use" placeholder="用户名" name="" id=""><br/>
            <input type="text" v-model="pwd" placeholder="密码" name="" id=""><br/>
            <button @click="register">注册</button>
        </div>
    </div>
</template>
<script>
import {register} from '../service/index'
export default {
    data(){
        return{
            use:'',
            pwd:''
        }
    },
    methods:{
        async register(){
            let {use,pwd}=this;
            console.log(use,pwd)
            let result=await register({use,pwd})  //这块不懂
            // console.log(result)
            if(result&&result.data.code===0){
                alert(result.data.msg)
            }else{
                window.history.back()
            }
        },
     
    },
    created(){
        this.register()
    }
}
</script>
<style lang="scss">
    .logbox{
        width: 100%;
        height: 100%;
    }
</style>