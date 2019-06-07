<template>
  <div>
    <div :class="$style.content">
      <FTRate
        :disable="true"
        :rota="{ type: 'all', value }"
        :class="$style.title"
      >
        <div>课程名：<span>专业外语</span></div>
        <div>教师：<span>教师1</span></div>
        <div>专业：<span>信息管理与信息系统</span></div>
      </FTRate>
      <FTRate
        :class="$style.item"
        :rota="{ type: 'content', value: value1 }"
        @rotaValue="handleRota"
      >
        <div>内容评价 <span>(包括视频资源的准确性和对自己的帮助)</span></div>
      </FTRate>
      <FTRate
        :class="$style.item"
        :rota="{ type: 'source', value: value2 }"
        @rotaValue="handleRota"
      >
        <div>资源评价<span>(对课程提供的文档学习资源内容评价)</span></div>
      </FTRate>
      <FTRate
        :class="$style.item"
        :rota="{ type: 'homework', value: value3 }"
        @rotaValue="handleRota"
      >
        <div>作业评价<span>(对每门课程的习题进行评价)</span></div>
      </FTRate>
      <div>
        <el-button
          type="primary"
          size="mini"
          @click="sureSubmit"
          :disabled="disableBtn"
          >提交</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import FTRate from "FTComponents/common/FTRate";
export default {
  name: "FTPage5",
  components: {
    FTRate
  },
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 0,
      disableBtn: false
    };
  },
  computed: {
    value() {
      return (this.value1 + this.value2 + this.value3) / 3;
    }
  },
  methods: {
    handleRota(value) {
      switch (value.type) {
        case "content": {
          this.value1 = value.value;
          break;
        }
        case "source": {
          this.value2 = value.value;
          break;
        }
        case "homework": {
          this.value3 = value.value;
          break;
        }
      }
      console.log(value);
    },
    sureSubmit() {
      this.$message({ message: "评价成功", type: "success" });
      this.disableBtn = true;
    }
  }
};
</script>

<style lang="less" module>
.content {
  margin: 10px 0;
  padding: 10px 20px;
  border: 1px solid #272b33;
  border-radius: 4px;
  .title {
    > div {
      color: #aaa;
      span {
        color: #000;
      }
    }
  }
  .item {
    position: relative;
    left: 30px;
    width: 70%;
    > div {
      color: #000;
      span {
        color: #aaa;
        font-size: 12px;
      }
    }
  }
}
</style>
