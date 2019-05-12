<template>
  <div :class="$style.container">
    <div :class="$style.title">登录</div>
    <div :class="$style.content">
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
            >重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { FTMutationTypes } from "FTConstants";
const { SET_USER_INFO } = FTMutationTypes;
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
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      loginInfo: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions([SET_USER_INFO]),
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this[SET_USER_INFO](this.loginInfo).then(res => {
            if (res.status) {
              this.$message({
                message: "恭喜你，登录成功",
                type: "success"
              });
            } else {
              this.$message({
                message: "登陆失败",
                type: "warning"
              });
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="less" module>
.container {
  position: relative;
  top: 50px;
  text-align: center;
  .title {
    font-size: 60px;
    margin-bottom: 40px;
  }
  .content {
    margin: 0 auto;
    width: 60%;
  }
}
</style>
