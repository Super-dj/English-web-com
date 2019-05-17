<template>
  <div>
    <el-form :model="form" size="mini" :rules="rules" ref="submitForm">
      <el-form-item label="原密码" :label-width="formLabelWidth" prop="oldPwd">
        <el-input v-model="form.oldPwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" :label-width="formLabelWidth" prop="newPwd">
        <el-input v-model="form.newPwd" type="password"></el-input>
      </el-form-item>
      <el-form-item
        label="确认密码"
        :label-width="formLabelWidth"
        prop="surePwd"
      >
        <el-input v-model="form.surePwd" type="password"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="sureChange">确 定</el-button>
      <el-button @click="resetForm">重置</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { FTMutationTypes } from "FTConstants";
const { GET_USER_INFO, CHANGE_PWD, LOGOUT } = FTMutationTypes;
export default {
  name: "FTChangePwd",
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else if (value === this.form.oldPwd) {
        callback(new Error("新旧密码不能相同"));
      } else {
        if (this.form.newPwd !== "") {
          this.$refs.submitForm.validateField("surePwd");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.newPwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      formLabelWidth: "150px",
      form: {
        oldPwd: "",
        newPwd: "",
        surePwd: ""
      },
      rules: {
        oldPwd: [{ required: true, message: "请输入原密码", trigger: "blur" }],
        newPwd: [
          {
            validator: validatePass,
            required: true,
            trigger: "blur"
          }
        ],
        surePwd: [
          {
            validator: validatePass2,
            required: true,
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters({ _userInfo: GET_USER_INFO })
  },
  methods: {
    ...mapActions([CHANGE_PWD, LOGOUT]),
    sureChange() {
      this.$refs.submitForm.validate(valid => {
        console.log(valid);
        if (valid) {
          this.form = {
            ...this.form,
            id: this._userInfo.id,
            role: this._userInfo.role
          };
          this[CHANGE_PWD](this.form).then(res => {
            console.log(res);
            let { code } = res.data;
            if (code == "200") {
              this.$message({
                message: "修改成功,请重新登录",
                type: "success"
              });
              setTimeout(() => {
                this[LOGOUT]().then(() => {
                  this.$router.push({ path: "/page1" });
                });
              }, 3000);
            } else {
              this.$message({ message: "修改失败", type: "error" });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.submitForm.resetFields();
    }
  }
};
</script>

<style lang="less"></style>
