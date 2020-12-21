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
        <div
          v-for="(item,index) in this.menuList"
          :key="index"
        >
          <el-submenu
            :index="item.index"
            v-if="item.child"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <div
              v-for="(item12,n) in item.child"
              :key="n"
            >
              <el-submenu
                :index="item12.index"
                v-if="item12.child"
              >
                <template slot="title">{{item12.name}}</template>
                <el-menu-item
                  :index="item13.path"
                  v-for="(item13,i) in item12.child"
                  :key="i"
                >{{item13.name}}</el-menu-item>
              </el-submenu>
              <el-menu-item
                :index="item12.path"
                v-else
              >{{item12.name}}</el-menu-item>
            </div>
          </el-submenu>
          <el-menu-item
            :index="item.path"
            v-else
          >
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
  data () {
    return {
      isCollapse: false,
      menuList: [
        {
          name: "用户管理",
          index: "1",
          child: [
            {
              name: "用户管理",
              index: "1-1",
              child: [
                {
                  name: "用户信息",
                  path: "/index/information"
                },
                {
                  name: "用户账号",
                  path: "/index/account"
                }
              ]
            },
            {
              name: "角色管理",
              index: "1-2",
              child: [
                {
                  name: "超级管理",
                  path: "/index/super"
                },
                {
                  name: "普通管理",
                  path: "/index/role"
                }
              ]
            },
            {
              name: "菜单管理",
              path: "/index/menu"
            },
            {
              name: "权限管理",
              path: "/index/author"
            }
          ]
        },
        {
          name: "系统日志",
          index: "2",
          child: [
            {
              name: "登录日志",
              path: "/index/authLog"
            },
            {
              name: "操作日志",
              path: "/index/sysLog"
            }
          ]
        },
        {
          name: "工时报表",
          index: "3",
          path: "/index/statement"
        },
        {
          name: "支付报表",
          index: "4",
          path: "/index/payment"
        },
        {
          name: "地图展示",
          index: "5",
          child: [
            {
              name: "地图1",
              path: "/index/mapC"
            },
            {
              name: "地图2",
              path: "/index/mapT"
            }
          ]
        },
        {
          name: "组件管理",
          index: "6",
          child: [
            {
              name: "全选组件",
              path: "/index/select"
            },
            {
              name: "步骤条",
              path: "/index/step"
            },
            {
              name: "图片弹窗",
              path: "/index/img"
            },
            {
              name: "echarts",
              path: "/index/echarts"
            },
            {
              name: "进度条",
              path: "/index/process"
            },
            {
              name: "echarts地图",
              path: "/index/eMap"
            },

          ]
        }
      ]
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
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


