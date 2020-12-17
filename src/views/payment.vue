<template>
  <div class="about">
    <h1>支付</h1>
    <h1>{{food}}</h1>
    <h1>{{$store.state.menuName}}</h1>
    <button @click="handle1">更改菜单名称</button>
    <button @click="handle2">更改菜单名称</button>
    <input
      type="text"
      v-focus
    >
  </div>
</template>
<script>
import { abandonInfo } from "@/api/user.js";
import { mapActions } from "vuex";
export default {
  name: "Payment",
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  data () {
    return {};
  },
  created () {
    let data = {
      username: "admin",
      password: "111111"
    };
    // abandonInfo(data).then(res => {
    //   console.log(res);
    // });
  },
  methods: {
    ...mapActions(["menuName"]),
    handle1 () {
      this.menuName("测试一");
    },
    handle2 () {
      this.menuName("测试二");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>


