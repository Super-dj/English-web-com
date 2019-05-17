<template>
  <div>
    <div
      v-for="(item, index) in info"
      :class="$style.item"
      :key="index"
      @click="_chooseCourse(item)"
    >
      <div :class="$style.title">{{ item.name }}</div>
      <div :class="$style.content">
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
