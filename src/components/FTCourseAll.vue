<template>
  <div>
    <div :class="$style.pre">
      <p>课程简介</p>
      &nbsp;&nbsp;&nbsp;&nbsp;本门《专业外语》是为本校各专业开设的课程，本系列课程为大三学生经过了基础英语及本专业课程的学习之后，为进一步提高他们的阅读、翻译有关专业文献和科技英语的写作能力而开设的课程。<br />
      &nbsp;&nbsp;&nbsp;&nbsp;其中的课程教学，不仅可以使学生们熟悉和掌握改专业常用的专业词汇、词组及其用法，还能进一步巩固专业知识的学习，同时培养了学生科技英语的翻译、写作能力。对课程的学习将为学生学习新的科学知识与技术、查阅本该业英文文献、掌握国际上本专业发展动态打好语言基础。
    </div>
    <div
      v-for="(item, index) in info"
      :class="$style.item"
      :key="index"
      @click="_chooseCourse(item)"
    >
      <div :class="$style.title">{{ item.name }}</div>
      <div :class="$style.content">
        <div>
          专业：<span>{{item.specialty}}</span>
        </div>
        <div :class="$style.name">
          教师：<span>{{ item.teacherName }}</span>
        </div>
        <div :class="$style.num">
          课时：<span>{{ item.amount }}</span
          >课时
        </div>
        <div :class="$style.time">
          创建时间：<span>{{ item.createTime | formatTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FTLogin from "FTComponents/common/FTLogin";
import { FTApi, formatTime } from "FTUtils";
import { mapActions } from "vuex";
import { FTMutationTypes } from "FTConstants";

const { SHOW_DIALOG } = FTMutationTypes;
export default {
  name: "FTCourseAll",
  filters: {
    formatTime(date) {
      return formatTime(new Date(parseInt(date) * 1000));
    }
  },
  data() {
    return {
      info: {}
    };
  },
  methods: {
    ...mapActions([SHOW_DIALOG]),
    _chooseCourse(info) {
      if (localStorage.userInfo)
        this.$router.push({ name: "study", params: { ...info } });
      else this[SHOW_DIALOG]({ isShow: true, template: FTLogin });
    }
  },
  created() {
    FTApi.FTGetChapterInfo().then(res => {
      let { code, data } = res.data;
      if (code == 200) {
        this.info = [...data];
      }
    });
    // FTApi.FTAddCourseInfo();
  }
};
</script>

<style lang="less" module>
.pre {
  line-height: 1.2;
  padding: 0 10px 15px;
  border: 1px solid #e6e6e6;
  margin: 18px 0;
  > p {
    padding: 8px 0;
    font-size: 22px;
    line-height: 1.4;
    text-align: center;
  }
}
.item {
  border: 2px solid #999999;
  border-radius: 12px;
  margin: 5px 0;
  padding: 15px 0 15px 15px;
  &:hover {
    border-color: rgb(255, 208, 75);
    cursor: pointer;
  }
  .title {
    font-size: 24px;
  }
  .content {
    margin-top: 10px;
    display: flex;
    > div {
      color: #aaa;
      margin-right: 15px;
      > span {
        color: #000;
      }
    }
    .name {
    }
    .num {
    }
    .time {
    }
  }
}
</style>
