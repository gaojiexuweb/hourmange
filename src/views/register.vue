<template>
  <div class="register">
    <div class="f_bg">
      <h1>雄霸天下</h1>
      <el-form
        label-position="right"
        label-width="80px"
        :model="formLabelAlign"
        :rules="rules"
        ref="formLabelAlign"
        class="main"
      >
        <el-form-item label="用户名称" prop="username">
          <el-input
            v-model="formLabelAlign.username"
            placeholder="请输入用户名称"
            clearable
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input
            v-model="formLabelAlign.phone"
            placeholder="请输入手机号码"
            clearable
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formLabelAlign.email" placeholder="请输入邮箱" clearable autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="formLabelAlign.sex" placeholder="请选择性别" style="width:100%">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="famale"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="formLabelAlign.password"
            show-password
            clearable
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="reqpassword">
          <el-input
            v-model="formLabelAlign.reqpassword"
            show-password
            clearable
            placeholder="请确认密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="logbtn" @click="register">注册</div>
      <p class="reset">
        已经有账号了 &nbsp; &nbsp; &nbsp; &nbsp;
        <span @click="login">登录</span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import rules from "@/lib/rules.js";
export default {
  name: "register",
  data() {
    return {
      formLabelAlign: {},
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          {
            validator: rules.validPhone,
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            validator: rules.validIdEmail,
            trigger: "blur"
          }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
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
        ],
        reqpassword: [
          { required: true, message: "请确认密码", trigger: "blur" },
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
  created() {},
  methods: {
    register() {
      this.$refs.formLabelAlign.validate(valid => {
        if (valid) {
          console.log(this.formLabelAlign);
          this.$router.push({ path: "/login" });
          this.$message.success("注册成功");
        }
      });
    },
    login() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
.register {
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


