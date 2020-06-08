<template>
  <div class="about">
    <h1>支付</h1>
    <h1>{{food}}</h1>
  </div>
</template>
<script>
import api from "@/api/user.js";
export default {
  name: "Payment",
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  data() {
    return {};
  },
  created() {
    let data = {
      username: "admin",
      password: "111111"
    };
    api.abandonInfo(`/api-auth/oauth/token`, data, "post").then(res => {
      console.log(res);
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>


