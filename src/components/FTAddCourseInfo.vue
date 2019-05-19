<template>
  <div class="container">
    <el-form :label-width="labelWidth" inline>
      <el-form-item label="课程名">
        <el-input v-model="form.courseName"></el-input>
      </el-form-item>
      <el-form-item label="课程学科">
        <el-input v-model="form.specialty"></el-input>
      </el-form-item>
      <el-form-item label="是否推荐">
        <el-select v-model="form.coursePart" placeholder="请选择">
          <el-option label="是" value="1"> </el-option>
          <el-option label="否" value="0"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="课程简介">
        <el-input v-model="form.pre" type="textarea"></el-input>
      </el-form-item>
      <div @click="_addItem('video')">
        <el-divider content-position="left">添加视频</el-divider>
      </div>
      <div v-for="(item, index) in form.video" :key="`v${index}`">
        <el-form-item label="章节">
          <el-input v-model="item.chapter"></el-input>
        </el-form-item>
        <el-form-item label="名字">
          <el-input v-model="item.title"></el-input>
        </el-form-item>
        <el-form-item label="文件">
          <div @click="handleIndex(index, 'video')">
            <el-upload
              :action="uploadFiles"
              :show-file-list="false"
              :http-request="devUpload"
            >
              <span v-if="item.url">{{ item.title }}</span>
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </el-form-item>
      </div>
      <div @click="_addItem('homework')">
        <el-divider content-position="left">添加作业</el-divider>
      </div>
      <div v-for="(item, index) in form.homework" :key="`h${index}`">
        <el-form-item label="章节">
          <el-input v-model="item.chapter"></el-input>
        </el-form-item>
        <el-form-item label="名字">
          <el-input v-model="item.title"></el-input>
        </el-form-item>
        <el-form-item label="文件">
          <div @click="handleIndex(index, 'homework')">
            <el-upload
              :action="uploadFiles"
              :show-file-list="false"
              :http-request="devUpload"
            >
              <span v-if="item.url">
                {{ item.title }}
              </span>
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </el-form-item>
      </div>
      <div @click="_addItem('doc')">
        <el-divider content-position="left">添加文档</el-divider>
      </div>
      <div v-for="(item, index) in form.doc" :key="`d${index}`">
        <el-form-item label="章节">
          <el-input v-model="item.chapter"></el-input>
        </el-form-item>
        <el-form-item label="名字">
          <el-input v-model="item.title"></el-input>
        </el-form-item>
        <el-form-item label="文件">
          <div @click="handleIndex(index, 'doc')">
            <el-upload
              :action="uploadFiles"
              :show-file-list="false"
              :http-request="devUpload"
            >
              <span v-if="item.url">
                {{ item.title }}
              </span>
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{ btnCont }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { FTMutationTypes, FTServerApi } from "FTConstants";
import axios from "axios";
import { FTApi } from "FTUtils";

const { GET_USER_INFO, GET_DIALOG_STATUS, SET_CHAPTER_INFO } = FTMutationTypes;
const { HOST_ADDRESS } = FTServerApi;
export default {
  name: "FTAddCourseInfo",
  computed: {
    ...mapGetters({ _userInfo: GET_USER_INFO, _courseInfo: GET_DIALOG_STATUS }),
    _courseStatus() {
      return this._courseInfo.addCourse;
    }
  },
  data() {
    return {
      labelWidth: "80px",
      btnCont: "立即创建",
      uploadFiles: HOST_ADDRESS + "/user/update",
      videoUrl: [],
      docUrl: [],
      homeworkUrl: [],
      fileIndex: 0,
      fileType: "",
      form: {
        id: 0,
        courseName: "",
        coursePart: "0",
        specialty: "",
        pre: "",
        video: [],
        doc: [],
        homework: []
      }
    };
  },
  watch: {
    _userInfo: {
      handler(curVal) {
        let { id } = curVal;
        this.form.id = id;
      },
      deep: true,
      immediate: true
    },
    _courseStatus: {
      handler(curVal) {
        if (Object.keys(curVal).length) {
          this.btnCont = "修改";
          this[SET_CHAPTER_INFO](curVal.id).then(res => {
            if (Object.keys(res.data)) {
              // this.info = { ...res.data };
              // this.defaultUrl = res.data.list[0].url;
              console.log(res.data);
              let {
                doc,
                homework,
                video,
                pre,
                name,
                id,
                specialty,
                coursePart
              } = res.data;
              this.form.courseId = id;
              this.form.courseName = name;
              this.form.coursePart = coursePart;
              this.form.specialty = specialty;
              this.form.pre = pre;
              this.form.video = video;
              this.form.doc = doc;
              this.form.homework = homework;
            }
          });
        } else {
          this.btnCont = "立即创建";
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    ...mapActions([SET_CHAPTER_INFO]),
    devUpload(fileObj) {
      let param = new FormData();
      param.append("file", fileObj.file);
      axios.post(this.uploadFiles, param).then(res => {
        let { data, code } = res.data;
        if (code == 200) {
          this.form[this.fileType][this.fileIndex].url = `${HOST_ADDRESS}/${
            data.url
          }`;
        }
      });
    },
    handleIndex(index, type) {
      this.fileIndex = index;
      this.fileType = type;
    },
    onSubmit() {
      FTApi.FTAddCourseInfo(this.form).then(res => {
        console.log(res);
      });
    },
    _addItem(type) {
      this.form[type].push({
        title: "",
        chapter: "",
        url: ""
      });
    }
  }
};
</script>

<style lang="less">
.container {
  .el-input {
    width: 200px;
  }
  .el-textarea {
    width: 700px !important;
  }
}
</style>
