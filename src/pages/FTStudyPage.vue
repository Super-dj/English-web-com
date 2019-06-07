<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <div :class="$style.breadcrumb">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/page3' }">课程</el-breadcrumb-item>
          <el-breadcrumb-item>信息管理与信息系统</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div :class="$style.preInfo">
        <div :class="$style.title">{{ info.name }}</div>
        <div :class="$style.info">
          <div>
            <i class="el-icon-edit"></i>专业：<span>{{ info.specialty }}</span>
          </div>
          <div>
            <i class="el-icon-edit"></i>更新时间：<span>2019.5.10</span>
          </div>
        </div>
        <div :class="$style.pre">
          <i class="el-icon-edit"></i>简介：<br />
          <div>{{ info.pre }}</div>
        </div>
        <div :class="$style.dagang">
          <i class="el-icon-edit"></i>教学大纲：
          <a
            href="http://localhost/api/file/20190531075747专业外语-课程教学大纲.docx"
            target="_blank"
            >下载查看</a
          >
        </div>
      </div>
    </div>
    <div :class="$style.sss">
      <div :class="$style.nav">
        <el-button :type="part == 0 ? 'primary' : ''" @click="_handlerClick(0)">
          视频
        </el-button>
        <el-button :type="part == 1 ? 'primary' : ''" @click="_handlerClick(1)">
          文档
        </el-button>
        <el-button :type="part == 2 ? 'primary' : ''" @click="_handlerClick(2)">
          作业
        </el-button>
        <el-button :type="part == 3 ? 'primary' : ''" @click="_handlerClick(3)">
          讨论
        </el-button>
      </div>
      <div v-show="part === 0" :class="$style.content">
        <div :class="$style.left">
          <video
            controls
            :src="defaultUrl"
            @canplay="onloadVideo"
            @timeupdate="playVideo"
            ref="video"
          ></video>
        </div>
        <div :class="$style.right">
          <div :class="$style.chapterList">
            <div
              v-for="(item, index) in info.video"
              :key="index"
              :class="$style.chapterItem"
              @click="_handleChapter(item, index)"
            >
              <div :class="$style.chapterNo">{{ item.chapter }}</div>
              <div :class="$style.chapterName">{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="part === 1" :class="$style.content" style="display: block">
        <div
          v-for="(item, index) in info.doc"
          v-if="chapter == item.chapter"
          :class="$style.doc"
          :key="index"
        >
          <i class="el-icon-document"></i>
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </div>
      </div>
      <div v-show="part === 2" :class="$style.content" style="display: block">
        <el-upload
          class="imgUpload"
          :action="uploadIMG"
          :show-file-list="false"
          :http-request="devUpload"
        >
          <el-button type="primary">上传作业</el-button>
          <!--<img v-if="imageBigUrl" :src="imageBigUrl" class="avatar" />-->
          <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
        </el-upload>
        <div
          v-for="(item, index) in info.homework"
          v-if="chapter == item.chapter"
          :class="$style.homework"
          :key="index"
        >
          <i class="el-icon-document"></i>
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </div>
      </div>
      <div v-show="part === 3" :class="$style.content" style="display: block">
        <FTPage4 :courseId="parseInt(courseId)"></FTPage4>
      </div>
    </div>
  </div>
</template>

<script>
import FTPage4 from "FTPages/module/FTPage4";
import { mapActions, mapGetters } from "vuex";
import { FTMutationTypes, FTServerApi } from "FTConstants";
import axios from "axios";
import { FTApi } from "FTUtils";

const { SET_CHAPTER_INFO, GET_USER_INFO } = FTMutationTypes;
const { HOST_ADDRESS } = FTServerApi;
export default {
  name: "FTStudyPage",
  components: {
    FTPage4
  },
  data() {
    return {
      defaultUrl: "",
      info: {},
      part: 0,
      uploadIMG: HOST_ADDRESS + "/user/update",
      chapter: 1,
      videoDuration: 0,
      videoCurrent: 0
    };
  },
  computed: {
    ...mapGetters({ _userInfo: GET_USER_INFO }),
    courseId() {
      return this.$route.params.id;
    }
  },
  watch: {
    courseId: {
      handler() {
        this[SET_CHAPTER_INFO](this.courseId).then(res => {
          if (Object.keys(res.data)) {
            this.info = { ...res.data };
            this.defaultUrl = res.data.video[0].url;
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions([SET_CHAPTER_INFO]),
    _handleChapter(item, index) {
      let { url } = item;
      this.defaultUrl = url;
      this.chapter = index + 1;
    },
    _handlerClick(num) {
      this.part = num;
    },
    devUpload(fileObj) {
      let param = new FormData();
      param.append("file", fileObj.file);
      axios.post(this.uploadIMG, param).then(res => {
        console.log(res);
        let { data, code } = res.data;
        if (code == 200) {
          let params = {
            cid: this.courseId,
            sid: this._userInfo.id,
            chapter: this.chapter,
            url: `${HOST_ADDRESS}/${data.url}`
          };
          FTApi.FTAddHomeWork(params).then(res => {
            let { code } = res.data;
            if (code == 200) {
              this.$message({ message: "提交成功", type: "success" });
            } else {
              this.$message({ message: "提交失败", type: "error" });
            }
          });
        }
      });
    },
    onloadVideo() {
      this.videoDuration = Math.floor(this.$refs.video.duration);
    },
    playVideo() {
      let time = this.$refs.video.currentTime;
      if (Math.floor(time) != this.videoCurrent) {
        this.videoCurrent = Math.floor(time);
        if (this.videoCurrent == this.videoDuration) {
          let params = {
            courseId: this.courseId,
            stuId: this._userInfo.id,
            progress:
              Math.random(100 / this.info.video.length + this.info.doc.length) *
              100
          };
          FTApi.FTVideoStop(params).then(res => {
            let { code } = res.data;
            if (code == 200) {
              this.$message({ message: "学习完成", type: "success" });
            }
          });
        }
      }
    }
  },
  mounted() {}
};
</script>

<style lang="less" module>
.container {
  .header {
    .breadcrumb {
      margin: 10px 0;
    }
    .preInfo {
      background: #f5f5f5;
      border-top: 1px solid #e9e9e9;
      padding: 0 30px;
      .title {
        font-size: 16px;
        line-height: 4;
      }
      .info {
        display: flex;
        color: #999;
        margin-bottom: 10px;
        > div {
          margin-right: 30px;
          > span {
            color: #272b33;
          }
        }
      }
      .pre {
        color: #999;
        > div {
          color: #272b33;
          width: 100%;
          margin-top: 5px;
        }
      }
      .dagang{
        color: #999;
        margin-top: 10px;
      }
    }
  }
  .sss {
    display: flex;
    margin-top: 20px;
    .nav {
      display: flex;
      flex-direction: column;
      > button {
        margin: 0 10px;
      }
    }
    .content {
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: center;
      .left {
        > video {
          min-width: 850px;
          max-width: 900px;
          height: 100%;
        }
      }
      .right {
        flex-grow: 1;
        min-width: 200px;
        padding: 0 15px;
        height: 100%;
        background: #f5f7fa;
        overflow-y: scroll;
        .chapterList {
          .chapterItem {
            display: flex;
            margin: 10px 0;
            cursor: pointer;
            &:hover {
              color: rgb(255, 208, 75);
            }
            .chapterNo {
              margin-right: 15px;
            }
            .chapterName {
            }
          }
        }
      }
      .doc {
        margin-left: 7px;
        font-size: 18px;
        padding: 10px 0 10px 10px;
        > a {
        }
      }
      .homework {
        margin-left: 7px;
        margin-top: 6px;
        font-size: 18px;
        padding: 10px 0 10px 10px;
        > a {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
