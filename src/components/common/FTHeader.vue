<template>
  <div :class="$style.container">
    <div :class="$style.title">资源管理平台</div>
    <div :class="$style.logout">
      <span :class="$style.tips">
        欢迎<span :class="$style.userName">{{ userName }}</span>
        登录
      </span>
      <el-button
        type="primary"
        icon="el-icon-back"
        size="mini"
        :round="true"
        @click="_loginOut"
      >
        登出
      </el-button>
    </div>
  </div>
</template>

<script>
import { FTApi } from "FTUtils";
export default {
  name: "FTHeader",
  data() {
    return {
      userName: "administer"
    };
  },
  methods: {
    _loginOut() {
      FTApi.FTAdminLoginOut()
        .then(res => {
          if (res.data.code === 0) {
            this.$message({ message: "退出成功", type: "success" });
            this.$router.replace("/login");
          }
        })
        .catch(err => {
          this.$message({ message: "网络错误", type: "error" });
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" module>
.container {
  display: flex;
  justify-content: space-between;
  height: 60px;
  .title {
    font-size: 36px;
  }
  .logout {
    display: flex;
    align-items: center;
    .userName {
      color: #18a500;
      margin: 0 5px;
    }
    .tips {
      font-size: 16px;
      line-height: 28px;
      margin: 0 5px;
    }
  }
}
</style>
