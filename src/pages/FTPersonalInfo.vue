<template>
  <div :class="$style.container">
    <div :class="$style.left">
      <div :class="$style.personInfo">
        <div>学号：{{ _userInfo.id }}</div>
        <div>姓名：{{ _userInfo.name }}</div>
        <div>性别：{{ _userInfo.sex == 1 ? "女" : "男" }}</div>
        <div :class="$style.headerUrl">
          头像：<img :src="_userInfo.hearderUrl" alt="" />
        </div>
      </div>
      <div :class="$style.handleist">
        <el-col>
          <el-menu
            :default-active="active"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
            @select="selectItem"
          >
            <el-menu-item index="1" route="/personalInfo/change">
              <span slot="title">修改个人信息</span>
            </el-menu-item>
            <el-menu-item index="2" route="/personalInfo/pwd">
              <span slot="title">修改密码</span>
            </el-menu-item>
            <el-menu-item
              index="3"
              route="/personalInfo/course"
              v-if="_userInfo.role"
            >
              <span slot="title">课程管理</span>
            </el-menu-item>
            <el-menu-item
              index="4"
              route="/personalInfo/message"
              v-if="_userInfo.role"
            >
              <span slot="title">评论管理</span>
            </el-menu-item>
            <el-menu-item
              index="5"
              route="/personalInfo/student"
              v-if="_userInfo.role"
            >
              <span slot="title">学生管理</span>
            </el-menu-item>
            <el-menu-item index="3" route="/personalInfo/course" v-else>
              <span slot="title">查看课程信息</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
    </div>
    <div :class="$style.right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { FTMutationTypes } from "FTConstants";

const { GET_USER_INFO, SET_COURSE_INFO } = FTMutationTypes;
export default {
  name: "FTPersonalInfo",
  computed: {
    ...mapGetters({ _userInfo: GET_USER_INFO })
  },
  data() {
    return {
      active: "1"
    };
  },
  watch: {
    active(curVal) {
      if (curVal === "1") {
        this.$router.push({ path: "change" });
      }
    }
  },
  methods: {
    ...mapActions([SET_COURSE_INFO]),
    selectItem(index) {
      this.active = index;
      if (index == "3") {
        this[SET_COURSE_INFO]({
          id: this._userInfo.id,
          role: this._userInfo.role
        });
      }
    }
  }
};
</script>

<style lang="less" module>
.container {
  display: flex;
  .left {
    position: absolute;
    top: 148px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    border: 1px solid #272b33;
    .personInfo {
    }
    .headerUrl {
      > img {
        height: 60px;
      }
    }
    .handleist {
      width: 201px;
      height: 100%;
      background: rgb(84, 92, 100);
    }
  }
  .right {
    position: relative;
    margin-left: 210px;
    min-height: 739px;
  }
}
</style>
