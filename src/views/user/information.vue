<template>
  <div class="information">
    <div class="lodash">
      <h3>lodash 使用</h3>
      <ul>
        <li>
          <el-button type="primary" @click="testThrottle">节流</el-button>
        </li>
        <li>
          <el-button type="primary" @click="testDebounce">防抖</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "information",
  data() {
    return {};
  },
  methods: {
    // 节流
    testThrottle: _.throttle(
      function() {
        console.log("throttle");
      },
      5000,
      {
        leading: true,
        trailing: false
      }
    ),

    //  防抖
    testDebounce: _.debounce(
      function() {
        console.log("debounce");
      },
      2000,
      {
        leading: true,
        trailing: false
      }
    )
  }
};
</script>
<style lang="scss" scoped>
.information {
  background: #ffffff;
  padding: 20px;
  box-sizing: border-box;
    .lodash {
      ul{
          list-style: none;
          li{
              margin: 5px 0;
          }
      }
    }
}
</style>


