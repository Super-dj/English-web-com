<template>
  <div class="aaa">
    <el-divider></el-divider>
    <div
      v-for="(item, index) in info.message"
      :key="index"
      :class="$style.messageItem"
    >
      <div :class="$style.flex">
        <div>
          <span>{{ item.name }}</span
          >：<span>{{ item.content }}</span>
        </div>
        <div>
          <span>{{ item.time }}</span>
        </div>
        <i
          size="mini"
          class="el-icon-s-comment"
          :class="$style.messageIcon"
          @click="showMessageBox(index)"
        ></i>
      </div>
      <div v-if="boxStatus[index]" :class="$style.btn">
        <div><input type="text" v-model="contentVal" /></div>
        <el-button
          size="mini"
          :class="$style.btn"
          @click="submitMes(item, index)"
          >留言</el-button
        >
      </div>
      <FTMessageItem
        :info="item"
        :courseId="courseId"
        @checkItem="_clearBoxStatus()"
      ></FTMessageItem>
    </div>
  </div>
</template>

<script>
import { FTApi } from "FTUtils";
export default {
  name: "FTMessageItem",
  props: {
    info: {
      default: () => {},
      type: Object
    },
    courseId: {
      type: String
    }
  },
  data() {
    return {
      boxStatus: {},
      contentVal: ""
    };
  },
  methods: {
    showMessageBox(index) {
      this._clearBoxStatus();
      this.boxStatus[index] = true;
      this.$forceUpdate();
    },
    _clearBoxStatus() {
      this.boxStatus = [];
      this.$emit("checkItem");
    },
    submitMes(item, index) {
      let params = {
        course: this.courseId,
        id: item.id,
        content: this.contentVal,
        discuss: index
      };
      FTApi.FTAddMessage({ ...params }).then(res => {
        console.log(res.data);
        console.log(res.data.data);
      });
    }
  }
};
</script>

<style lang="less" module>
.flex {
  display: flex;
  align-items: center;
  > div {
    margin-right: 40px;
    color: #aaa;
    > span {
      color: #000;
    }
  }
  .messageIcon {
    &:hover {
      color: rgb(255, 208, 75);
      cursor: pointer;
    }
  }
}
.btn {
  display: flex;
  align-items: center;
}
.messageItem {
  padding: 10px 0 10px 20px;
  border-radius: 20px;
}
</style>
<style lang="less">
.aaa {
  .el-divider--horizontal {
    margin: 5px 0;
  }
}
</style>
