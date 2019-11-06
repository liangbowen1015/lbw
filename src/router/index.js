import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
    //这里是配置的路由路径
const routes = [{
        path: '/',
        redirect: '/about'
    },
    {
        path: '/about',
        name: 'about',
        redirect: "/about/shou",
        component: () =>
            import ('../views/About.vue'),
        children: [{
                path: '/about/shou',
                name: 'shou',
                redirect: "/about/shou/guan",
                component: () =>
                    import ('../components/first/shou.vue'),
                children: [{
                        path: '/about/shou/guan',
                        name: 'guan',
                        component: () =>
                            import ('../components/second/guan.vue'),
                    },
                    {
                        path: '/about/shou/tui',
                        name: 'tui',
                        component: () =>
                            import ('../components/second/tui.vue'),
                    },
                    {
                        path: '/about/shou/re',
                        name: 're',
                        component: () =>
                            import ('../components/second/re.vue'),
                    },
                ]
            },
            {
                path: '/about/xiang',
                name: 'xiang',
                component: () =>
                    import ('../components/first/xiang.vue'),
            },
            {
                path: '/about/da',
                name: 'da',
                component: () =>
                    import ('../components/first/da.vue'),
            },
            {
                path: '/about/xiao',
                name: 'xiao',
                component: () =>
                    import ('../components/first/xiao.vue'),
            },
            {
                path: '/about/wo',
                name: 'wo',
                component: () =>
                    import ('../components/first/wo.vue'),
            },
            {
                path: '/detail',
                name: 'detail',
                component: () =>
                    import ('../components/Detail/detail.vue'),
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router