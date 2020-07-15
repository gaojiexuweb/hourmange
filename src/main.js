import Vue from 'vue'
import App from './App.vue'
import _ from "lodash"
import VueAMap from 'vue-amap';
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/common.scss'

Vue.use(VueAMap);
Vue.use(ElementUI);
Vue.config.productionTip = false

VueAMap.initAMapApiLoader({
  key: 'b1b7805d745f987f5009fb39bb5dd888',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale',
    'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor',
    'AMap.Geocoder'],
  // 默认高德 sdk 版本为 1.4.4
  // v:  "^0.5.10",
});

// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
