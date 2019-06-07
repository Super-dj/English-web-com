<template>
  <div>
    <el-table :data="info">
      <el-table-column prop="id" label="学号" width="120"></el-table-column>
      <el-table-column prop="name" label="名字" width="120"></el-table-column>
      <el-table-column
        prop="specialty"
        label="专业"
        width="220"
      ></el-table-column>
      <el-table-column label="进度" width="120">
        <template slot-scope="scope">
          <el-progress
            :width="44"
            type="circle"
            :percentage="parseInt(scope.row.progress)"
          ></el-progress>
        </template>
      </el-table-column>
      <el-table-column prop="grade" label="成绩" width="120"></el-table-column>
      <el-table-column label="操作" width="140">
        <template slot-scope="scope">
          <el-popover placement="right" width="400" trigger="click">
            <el-table :data="scope.row.info">
              <el-table-column
                width="60"
                prop="chapter"
                label="章节"
              ></el-table-column>
              <el-table-column width="200" prop="url" label="作业">
                <template slot-scope="scope">
                  <el-link type="primary" :href="scope.row.url"
                    >下载查看</el-link
                  >
                </template>
              </el-table-column>
              <el-table-column width="100" label="状态">
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row.status == 1"
                    disabled
                    type="success"
                    size="mini"
                    >已批改</el-button
                  >

                  <el-button
                    v-if="scope.row.status == 0"
                    slot="reference"
                    type="danger"
                    size="mini"
                    @click="handleHomework(scope.row)"
                    >未批改</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <el-button slot="reference" type="text" size="small">
              批改作业
            </el-button>
          </el-popover>

          <el-popover
            placement="top"
            width="160"
            trigger="click"
            :value="visible"
          >
            <p>这是一段内容这是一段内容确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false"
                >取消</el-button
              >

              <el-button
                type="primary"
                size="mini"
                @click="handleDelete(scope.row, scope.$index)"
                >确定</el-button
              >
            </div>
            <el-button
              slot="reference"
              type="text"
              size="mini"
              @click="visible = true"
              >删除</el-button
            >
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { FTApi } from "FTUtils";
import { mapGetters } from "vuex";
import { FTMutationTypes } from "FTConstants";

const { GET_USER_INFO } = FTMutationTypes;
export default {
  name: "FTStudentInfo",
  data() {
    return {
      info: [],
      visible: false,
      input: ""
    };
  },
  computed: {
    ...mapGetters({ _userInfo: GET_USER_INFO })
  },
  methods: {
    getStudentInfo() {
      FTApi.FTGetStudentInfo({ id: this._userInfo.id }).then(res => {
        let { code, data } = res.data;
        if (code == 200) {
          this.info = [...data];
        }
      });
    },
    handleDelete(item, index) {
      FTApi.FTDeleteStudentInfo({
        teachId: this._userInfo.id,
        stuId: item.id
      }).then(res => {
        let { code } = res.data;
        if (code == 200) {
          this.info.splice(index, 1);
          this.$message({ message: "删除成功", type: "success" });
        } else {
          this.$message({ message: "删除失败", type: "error" });
        }
        this.visible = false;
      });
    },
    handleHomework(item) {
      this.$prompt("输入成绩", "录入成绩", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputType: "Number"
      })
        .then(({ value }) => {
          let params = { id: item.id, grade: value };
          FTApi.FTHomeWork(params).then(res => {
            let { code } = res.data;
            if (code == 200) {
              item.status = 1;
              this.$forceUpdate();
            }
          });
        })
        .catch();
    },
    handleGrade() {}
  },
  created() {
    this.getStudentInfo();
  }
};
</script>

<style lang="less"></style>
