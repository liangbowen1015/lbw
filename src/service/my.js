import axios from 'axios'

//用户注册
export let register = params => {
        return axios.post('/api/user/register', params),
            console.log(params)
    }
    //用户登录
export let login = params => {
    return axios.post('/api/user/login', params)
}