import layout from '../views/layout.vue'

export default [
    { // 自动跳转路由 
        path: '/',
        redirect: '/index'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register')
    },
    {
        path: '/index',
        alias: '/index_page',
        name: 'index',
        component: layout,
        children: [
            {
                path: 'statement',
                name: 'Statement',
                meta: {
                    title: '报表'
                },
                component: () => import('@/views/statement')
            },
            {
                path: 'payment',
                name: 'Payment',
                meta: {
                    title: '支付'
                },
                component: () => import('@/views/payment'),
                props: {
                    food: 'banana'    //对象模型
                }
            }
        ],
        // 路由独享守卫
        beforeEnter: ((to, from, next) => {
            // if(from.name === 'login') alert ('这是从登录页来的')
            // else alert('这不是从登录页来的')
            next()
        })
    },
    // 动态路由
    // {
    //     path: '/index/:name',  
    //     component: () => import('@/views/index'),
    //     props: true    // 使用传入的name
    // },
    {
        path: '*',
        component: () => import('@/views/error_404.vue')
    }
]