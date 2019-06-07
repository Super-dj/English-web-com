<template>
  <div>
    <div :class="$style.flex">
      <div>
        课程名：<span>{{ item.name }}</span>
      </div>
      <div>
        专业：<span>{{ item.specialty }}</span>
      </div>
      <i
        size="mini"
        class="el-icon-s-comment"
        :class="$style.messageIcon"
        @click="showMessageBox"
      ></i>
    </div>
    <div :class="$style.btn">
      <div><input type="text" v-model="content" /></div>
      <el-button
        class="el-icon-s-promotion"
        size="mini"
        :class="$style.btn"
        @click="submitMes(item)"
        >留言</el-button
      >
    </div>
    <FTMessageItem :info="item" :courseId="item.id"></FTMessageItem>
  </div>
</template>

<script>
import { FTApi } from "FTUtils";
export default {
  name: "FTCourseMessage",
  props: {
    courseNo: {
      type: Number
    }
  },
  data() {
    return {
      info: null,
      content: ""
    };
  },
  created() {
    FTApi.FTGetMessage().then(res => {
      this.info = { ...res.data.data };
    });
  }
};
</script>

<style lang="less"></style>
