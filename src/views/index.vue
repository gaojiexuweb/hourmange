<template>
  <div class="index">
    <header>
      <h3>工时管控系统</h3>
      <h3>注销</h3>
    </header>
    <div class="main">
      <aside>
        <el-menu
          :unique-opened="true"
          :router="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height:100%;"
        >
          <div v-for="(item,index) in this.menuList" :key="index">
            <el-submenu :index="item.index" v-if="item.child">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.name}}</span>
              </template>
              <div v-for="(item12,n) in item.child" :key="n">
                <el-submenu :index="item12.index" v-if="item12.child">
                  <template slot="title">{{item12.name}}</template>
                  <el-menu-item
                    :index="item13.path"
                    v-for="(item13,i) in item12.child"
                    :key="i"
                  >{{item13.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item :index="item12.path" v-else>{{item12.name}}</el-menu-item>
              </div>
            </el-submenu>
            <el-menu-item :index="item.path" v-else>{{item.name}}</el-menu-item>
          </div>
        </el-menu>
      </aside>
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
export default {
  name: "index",
  data() {
    return {
      menuList: [
        {
          name: "导航1",
          index: "1",
          path: "/index/1",
          child: [
            {
              name: "选项1",
              index: "1-1",
              path: "/index/11",
              child: [
                {
                  name: "选项1-1",
                  path: "/index/111"
                },
                {
                  name: "选项1-2",
                  path: "/index/112"
                }
              ]
            },
            {
              name: "选项12",
              index: "1-2",
              child: [
                {
                  name: "选项12-12",
                  path: "/index/12"
                },
                {
                  name: "选项12-22",
                  path: "/index/121"
                }
              ]
            },
            {
              name: "选项13",
              path: "/index/13"
            },
            {
              name: "选项14",
              path: "/index/131"
            }
          ]
        },
        {
          name: "导航2",
          index: "2",
          child: [
            {
              name: "选项2",
              path: "/index/2"
            }
          ]
        },
        {
          name: "工时报表",
          path: "/index/statement"
        },
        {
          name: "导航4",
          path: "/index/payment"
        }
      ]
    };
  },
  beforeRouterEnter(to, from, next) {
    console.log(11111);
    // next()
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
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
.index {
  height: 100%;
  header {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 0 20px;
    color: #fff;
    background: #5c656d;
    display: flex;
    justify-content: space-between;
  }
  .main {
    height: calc(100% - 50px);
    display: flex;
    background: #dddddd;
    aside {
      height: 100%;
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
      }
    }
    .body {
      width: calc(100% - 200px);
      height: calc(100% - 50px);
      margin: 0 20px;
      padding: 0;

      border: 1px solid #dddddd;
      .bread {
        padding: 10px;
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
