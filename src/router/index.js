import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/home/index.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Post from '../views/post.vue'

import Timeline from '../views/home/timeline'
import My from '../views/home/my'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        redirect: '/home/timeline'
    },
    {
        path: '/login', // 登陆页面
        component: Login
    },
    {
        path: '/post', // 发送朋友圈
        component: Post
    },
    {
        path: '/register', // 注册页面
        component: Register
    },
    {
        path: '/home',
        component: Home,
        children: [{
                path: '/home/timeline', //这是圈子
                component: Timeline,
                meta: {
                    bool: true
                }
            },
            {
                path: '/home/my',
                component: My,
                meta: {
                    bool: true
                }
            }
        ]
    },
    {
        path: '/comment', //评论
        component: null, //这里为什么是null??
        children: [{
                path: '/comment/receive', //收到的评论
                component: null
            },
            {
                path: '/comment/send', //发出的评论
                component: null
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    let islogin = window.sessionStorage.getItem('islogin')
    if (to.meta.bool) {
        if (islogin) {
            next()
        } else {
            next("/login")
        }
    } else {
        next()
    }
})
















export default router