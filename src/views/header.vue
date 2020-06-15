<template>
  <div class="header">
    <h3>工时管控系统</h3>
    <h3 @click="loginOut" style="cursor:pointer;">注销</h3>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  name: "headerBar",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["loginSuccess"]),
    loginOut() {
      this.$confirm("确定退出？", "提示", {
        type: "warning"
      }).then(() => {
        sessionStorage.removeItem("loginSuccess");
        this.loginSuccess(null);
        this.$router.push({ path: "/login" });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 0 20px;
  color: #fff;
  background: #5c656d;
  display: flex;
  justify-content: space-between;
}
</style>


