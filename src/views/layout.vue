<template>
  <div class="layout">
    <HeaderBar />
    <div class="main">
      <AsideBar></AsideBar>
      <div class="body">
        <div class="bread">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>工时报表</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <transition name="router">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AsideBar from "./aside";
import HeaderBar from "./header";

export default {
  name: "index",
  data() {
    return {};
  },
  beforeRouterEnter(to, from, next) {
    console.log(11111);
    // next()
  },
  mounted() {},
  methods: {
   
  },
  components: {
    AsideBar,
    HeaderBar
  },
  watch: {
    $route(val) {
      // 路由监听
      // console.log(140, val);
    }
  }
};
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  .main {
    height: calc(100% - 50px);
    width: 100%;
    display: flex;
    background: #dddddd;
    .body {
      width: calc(100% - 240px);
      margin: 0 20px;
      padding: 0;
      border: 1px solid #dddddd;
      .bread {
        padding: 10px;
      }
      .router {
        height: calc(100% -34px);
      }
      .router-enter {
        opacity: 0;
      }
      .router-enter-active {
        transition: opacity 1s ease;
      }
      .router-leave {
        opacity: 1;
      }
    }
  }
}
</style>
