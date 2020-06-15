<template>
  <div class="asideBar">
    <aside>
      <el-menu
        :unique-opened="true"
        :router="true"
        :collapse="isCollapse"
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
              <span slot="title">{{item.name}}</span>
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
          <el-menu-item :index="item.path" v-else>
            <i class="el-icon-setting"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </aside>
  </div>
</template>
<script>
export default {
  name: "asideBar",
  data() {
    return {
      isCollapse: false,
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.asideBar {
  aside {
    height: 100%;
    overflow-x: hidden;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    }
  }
}
</style>


