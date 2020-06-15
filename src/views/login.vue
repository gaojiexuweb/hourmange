<template>
  <div class="login">
    <h1>登录页面</h1>
    <button @click="login">登录</button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "error",
  data() {
    return {};
  },
  created() {
    // console.log(this.$store.state.loginSuccess)
  },
  methods: {
    ...mapMutations(["loginSuccess"]),
    login() {
      this.loginSuccess("true");
      sessionStorage.setItem('loginSuccess', this.$store.state.loginSuccess);
      this.$router.push({ path: "/index" });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  text-align: center;
}
</style>


