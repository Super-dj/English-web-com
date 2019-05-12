<template>
  <div>
    <div :class="$style.container">
      <div :class="$style.title" @click="_backIndex">
        《专业外语》精品课程信息网
      </div>
      <div :class="$style.right">
        <div v-if="_userInfo" :class="$style.logout">
          <span :class="$style.tips">
            欢迎<span :class="$style.userName">{{ _userInfo.name }}</span>
            登录
          </span>
          <el-button
            type="primary"
            icon="el-icon-back"
            size="mini"
            :round="true"
            @click="_personInfo"
          >
            个人中心
          </el-button>
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
        <div v-else>
          <el-button size="mini" @click="_login">登录</el-button>
          <el-button size="mini" @click="_forget">忘记密码</el-button>
        </div>
        <FTInput theme="light" :class="$style.searchBar"></FTInput>
      </div>
    </div>
    <FTNavMenu :info="listInfo"></FTNavMenu>
  </div>
</template>

<script>
import FTLogin from "FTComponents/common/FTLogin";
import { FTNavMenu, FTInput } from "FTComponents/ui-library";
import { FTMutationTypes } from "FTConstants";
const { SHOW_DIALOG, GET_USER_INFO, LOGOUT } = FTMutationTypes;
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FTHeader",
  components: { FTNavMenu, FTInput },
  data() {
    return {
      userName: "administer",
      listInfo: [
        { lable: "首页", path: "/page1" },
        { lable: "大讲堂", path: "/page2" },
        { lable: "课程", path: "/page3" },
        { lable: "论坛", path: "/page4" }
      ]
    };
  },
  computed: {
    ...mapGetters({ _userInfo: GET_USER_INFO })
  },
  methods: {
    ...mapActions([SHOW_DIALOG, LOGOUT]),
    _loginOut() {
      this[LOGOUT]().then(() => {
        this.$router.push({ path: "/page1" });
      });
    },
    _personInfo() {
      this.$router.push({ path: "/personalInfo" });
    },
    _login() {
      this[SHOW_DIALOG]({ isShow: true, template: FTLogin });
    },
    _forget() {
      this[SHOW_DIALOG]({ isShow: true });
    },
    _backIndex() {
      this.$router.push({ path: "/page1" });
    }
  }
};
</script>

<style lang="less" module>
.container {
  display: flex;
  justify-content: space-between;
  .title {
    margin: auto 0;
    font-size: 36px;
    cursor: pointer;
  }
  .right {
    display: flex;
    flex-direction: column;
    .logout {
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
    .searchBar {
      margin: 5px 0;
    }
  }
}
</style>
