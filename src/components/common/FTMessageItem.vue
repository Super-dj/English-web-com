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
          <span>{{ (parseInt(item.time) * 1000) | formatDate }}</span>
        </div>
        <i
          size="mini"
          class="el-icon-s-comment"
          :class="$style.messageIcon"
          @click="showMessageBox(index)"
        ></i>
        <i
          v-show="
            (_userInfo && item.id == _userInfo.id) ||
              (_userInfo && _userInfo.role)
          "
          size="mini"
          class="el-icon-delete-solid"
          :class="$style.messageIcon"
          @click="delMessage(index)"
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
import FTLogin from "FTComponents/common/FTLogin";
import { formatTime } from "FTUtils";
import { FTApi } from "FTUtils";
import { mapGetters, mapActions } from "vuex";
import { FTMutationTypes } from "FTConstants";
const { GET_USER_INFO, SHOW_DIALOG } = FTMutationTypes;
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
  computed: {
    ...mapGetters({ _userInfo: GET_USER_INFO })
  },
  data() {
    return {
      boxStatus: {},
      contentVal: ""
    };
  },
  filters: {
    formatDate(date) {
      return formatTime(new Date(date));
    }
  },
  methods: {
    ...mapActions([SHOW_DIALOG]),
    showMessageBox(index) {
      if (this.boxStatus[index])
        this.boxStatus[index] = this.boxStatus[index] ? false : true;
      else {
        this._clearBoxStatus();
        this.boxStatus[index] = true;
      }

      this.$forceUpdate();
    },
    delMessage(index) {
      let params = { id: index }; //messageId
      FTApi.FTDeleteMessage({ ...params }).then(res => {
        if (res.data.code == 200) {
          this.$emit("refreshInfo");
        }
      });
    },
    _clearBoxStatus() {
      this.boxStatus = {};
      this.$emit("checkItem");
    },
    submitMes(item, index) {
      if (!this._userInfo) {
        this[SHOW_DIALOG]({ isShow: true, template: FTLogin });
        return;
      }
      let params = {
        course: this.courseId,
        id: this._userInfo.id,
        content: this.contentVal,
        discuss: index
      };
      FTApi.FTAddMessage({ ...params }).then(res => {
        if (res.data.code == 200) {
          this.$emit("refreshInfo");
          this.contentVal = "";
        }
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
    margin-right: 20px;
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
