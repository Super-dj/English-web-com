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
      </div>
    </div>
    <div :class="$style.sss">
      <div :class="$style.nav">
        <el-button :type="part == 0 ? 'primary' : ''" @click="_handlerClick(0)"
          >视频</el-button
        >
        <el-button :type="part == 1 ? 'primary' : ''" @click="_handlerClick(1)"
          >文档</el-button
        >
        <el-button :type="part == 2 ? 'primary' : ''" @click="_handlerClick(2)"
          >作业</el-button
        >
      </div>
      <div v-show="part === 0" :class="$style.content">
        <div :class="$style.left">
          <video controls :src="defaultUrl"></video>
        </div>
        <div :class="$style.right">
          <div :class="$style.chapterList">
            <div
              v-for="(item, index) in info.list"
              :key="index"
              :class="$style.chapterItem"
              @click="_handleChapter(item)"
            >
              <div :class="$style.chapterNo">{{ item.chapter }}</div>
              <div :class="$style.chapterName">{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="part === 1" :class="$style.content" style="display: block">
        <div v-for="(item, index) in info.doc" :key="index">
          <a :href="item.url">{{ item.title }}</a>
        </div>
      </div>
      <div v-show="part === 2" :class="$style.content" style="display: block">
        <div v-for="(item, index) in info.homework" :key="index">
          <a :href="item.url">{{ item.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { FTMutationTypes } from "FTConstants";
const { SET_CHAPTER_INFO } = FTMutationTypes;
export default {
  name: "FTStudyPage",
  components: {},
  data() {
    return {
      defaultUrl: "",
      info: {},
      part: 0
    };
  },
  computed: {
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
            this.defaultUrl = res.data.list[0].url;
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions([SET_CHAPTER_INFO]),
    _handleChapter(item) {
      let { url } = item;
      this.defaultUrl = url;
    },
    _handlerClick(num) {
      this.part = num;
    }
  }
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
    }
  }
}
</style>
