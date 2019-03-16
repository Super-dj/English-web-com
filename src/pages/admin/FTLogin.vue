<template>
  <div :class="$style.container">
    <div :class="$style.loginBox">
      <el-form
        :model="loginInfo"
        :rules="rules"
        ref="loginInfo"
        label-width="80px"
        size="mini"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginInfo.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginInfo.password"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('loginInfo')"
            style="float: left"
          >
            登录
          </el-button>
          <el-button
            @click="resetForm('loginInfo')"
            style="float: left;margin-left: 20px;"
            >重置</el-button
          >
          <!--<el-button
            @click="
              () => {
                this.registerPanel = true;
              }
            "
          >
            注册</el-button
          >-->
        </el-form-item>
      </el-form>
    </div>

    <div :class="$style.register" v-if="registerPanel">
      <el-form
        :model="register"
        :rules="rules"
        ref="register"
        label-width="80px"
        size="mini"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="register.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="register.password"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="register.checkPass"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="registerForm('register')">
            注册
          </el-button>
          <el-button @click="resetForm('register')">重置</el-button>
          <el-button
            @click="
              () => {
                this.registerPanel = false;
              }
            "
          >
            返回
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { FTApi } from "FTUtils";

export default {
  name: "FTLogin",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.register.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerPanel: false,
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      loginInfo: {
        username: "",
        password: ""
      },
      register: {
        username: "",
        password: "",
        checkPass: ""
      }
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          FTApi.FTAdminLogin(this.loginInfo)
            .then(res => {
              if (res.data.code === 0) {
                this.$message({ message: "登录成功", type: "success" });
                this.$router.replace("/changeBanner");
              } else {
                this.$message({ message: "用户名或密码错误", type: "error" });
                this.resetForm("loginInfo");
              }
            })
            .catch(err => {
              this.$message({ message: "网络错误", type: "error" });
              console.log("登录失败", err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    registerForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          delete this.register.checkPass;
          console.log(this.register);
          FTApi.FTAdminRegister(this.register)
            .then(res => {
              if (res.data.code === 0) {
                this.$message({ message: "注册成功", type: "success" });
                this.registerPanel = false;
              } else {
                this.$message({ message: "注册失败", type: "error" });
                this.resetForm("register");
              }
            })
            .catch(err => {
              this.$message({ message: "网络错误", type: "error" });
              console.log("注册失败", err);
            });
        } else {
          console.log("error register!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" module>
@import "~FTCss/common";

.container {
  .aC;
  background: rgba(22, 22, 22, 0.5);
  .loginBox,
  .register {
    .aC;
    height: 200px;
    width: 300px;
    padding-top: 20px;
    padding-right: 30px;
    background: rgb(200, 200, 200);
    .title {
      height: 80px;
    }
  }
}
</style>
