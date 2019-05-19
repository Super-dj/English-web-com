<template>
  <div>
    <div v-if="_userInfo.role == 0">
      <el-table :data="_courseInfo">
        <el-table-column
          prop="id"
          label="课程编号"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="课程名字"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="pre"
          label="课程简介"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="create_time"
          label="选课时间"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="progress"
          label="进度"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="grade"
          label="分数"
          width="120"
        ></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >学习</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-if="_userInfo.role == 1">
      <el-button type="primary" @click="_addCourse">新建课程</el-button>
      <el-table :data="_courseInfo">
        <el-table-column
          prop="id"
          label="课程编号"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="课程名字"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="pre"
          label="课程简介"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          width="120"
        ></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small" @click="handleChange(scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import FTAddCourseInfo from "FTComponents/FTAddCourseInfo";
import { mapGetters, mapActions } from "vuex";
import { FTMutationTypes } from "FTConstants";
const { GET_COURSE_INFO, GET_USER_INFO, SHOW_DIALOG } = FTMutationTypes;
export default {
  name: "FTCourseInfo",
  computed: {
    ...mapGetters({ _courseInfo: GET_COURSE_INFO, _userInfo: GET_USER_INFO })
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([SHOW_DIALOG]),
    _addCourse() {
      this[SHOW_DIALOG]({ isShow: true, template: FTAddCourseInfo });
    },
    handleClick(item) {
      this.$router.push({ name: "study", params: { ...item } });
    },
    handleChange(item) {
      this[SHOW_DIALOG]({
        isShow: true,
        template: FTAddCourseInfo,
        addCourse: { ...item }
      });
    }
  }
};
</script>

<style lang="less"></style>
