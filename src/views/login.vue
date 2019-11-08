<template>
    <div class="logbox">
        <input type="text" placeholder="用户名" v-model="use" name="" id=""><br/>
         <input type="text" placeholder="密码" v-model="pwd" name="" id=""><br/>
         <button @click="login">登录</button><br/>
         <router-link to="/register">注册</router-link>
         <button @click="fan"> 返回 </button>
    </div>
</template>
<script>
import {login} from '../service/index'
export default {
    data(){
        return{
            use:'',
            pwd:''
        }
    },
    methods:{
        async login(){
            let {use,pwd}=this;
            let result=await login({use,pwd})
            console.log(result)
            if(result&&result.data.code===0){
                alert(result.data.msg)
            }else{
                window.history.back()
            }
        },
        fan(){
            this.$router.go(-1)
        }
    }
}
</script>