<template>
  <div class="login">
    <div class="f_bg">
      <h1>雄霸天下</h1>
      <el-form
        label-position="right"
        label-width="80px"
        :model="formLabelAlign"
        class="main"
        :rules="rules"
        ref="formLabelAlign"
      >
        <el-form-item label="用户名称" prop="username">
          <el-input
            v-model.trim="formLabelAlign.username"
            placeholder="请输入用户名称"
            clearable
            auto-complete
          ></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input
            v-model.trim="formLabelAlign.password"
            show-password
            clearable
            placeholder="请输入用户密码"
            autocomplete="new-password"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="logbtn" @click="login">登录</div>
      <p class="reset">
        还没有账号？
        <span @click="register">创建账号</span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import rules from "@/lib/rules";
let loading;
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: "拼命加载中。。。",
    background: "rgba(0,0,0,0.7)"
  });
}

function endLoading() {
  loading.close();
}

export default {
  name: "login",

  data() {
    return {
      formLabelAlign: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur"
          },
          {
            validator: rules.validPwd,
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    startLoading();
    setTimeout(() => {
      endLoading();
    }, 2000);
    // console.log(this.$store.state.loginSuccess)
  },
  methods: {
    ...mapMutations(["loginSuccess"]),
    login() {
      this.$refs.formLabelAlign.validate(valid => {
        if (valid) {
          this.loginSuccess("true");
          sessionStorage.setItem(
            "loginSuccess",
            this.$store.state.loginSuccess
          );
          this.$router.push({ path: "/index" });
          this.$message.success("登录成功");
        }
      });
    },
    register() {
      console.log(111);
      this.$router.push({ path: "/register" });
    }
  }
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
.login {
  text-align: center;
  background-image: url("../assets/img/login_bg.jpg");
  background-size: 100% 100%;
  display: flex;
  align-items: center; /*定义body的元素垂直居中*/
  justify-content: center; /*定义body的里的元素水平居中*/
  .f_bg {
    width: 578px;
    background-image: url("../assets/img/newboxLoginbg.png");
    background-size: 100% 100%;
    text-align: center;
    color: #fff;
    padding: 50px 0;
    .main {
      width: 75%;
      margin: 40px 0 40px 55px;
      .el-form-item__label {
        width: 80px;
        color: #fff;
        font-weight: bold;
      }
    }
    .logbtn {
      width: 280px;
      height: 70px;
      line-height: 70px;
      font-size: 28px;
      margin: 0 auto;
      background-image: url("../assets/img/bg_btn.png");
      background-size: 100% 100%;
      cursor: pointer;
    }
    .reset {
      margin-top: 50px;
      color: #6d8d84;
      span {
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>


