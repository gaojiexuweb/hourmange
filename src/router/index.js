import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import {setTitle} from '@/lib/util'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const HAS_LOGINED = true
// 路由守位
router.beforeEach((to, from, next) => {
  to.meta && to.meta.title && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'index' })
    else next()
  }
})

// 导航被确认之前，所有的钩子结束，在所有组件内守卫
// router.beforeResolve()

// 后置钩子
router.afterEach((to,from)=>{
  // logining = false
})

export default router
