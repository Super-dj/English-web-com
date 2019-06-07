<template>
  <div>
    <div v-for="(item, index) in info" :key="index" :class="$style.infoBox">
      <div :class="$style.flex">
        <div>
          课程名：<span>{{ item.name }}</span>
        </div>
        <div>
          专业：<span>{{ item.specialty }}</span>
        </div>
        <i
          size="mini"
          class="el-icon-s-comment"
          :class="$style.messageIcon"
          @click="showMessageBox(index)"
        ></i>
      </div>
      <div v-if="boxStatus[index]" :class="$style.btn">
        <div><input type="text" v-model="content" /></div>
        <el-button
          class="el-icon-s-promotion"
          size="mini"
          :class="$style.btn"
          @click="submitMes(item)"
          >留言</el-button
        >
      </div>
      <FTMessageItem
        :info="item"
        :courseId="item.id"
        @checkItem="_clearBoxStatus"
        @refreshInfo="refreshInfo"
      ></FTMessageItem>
    </div>
  </div>
</template>

<script>
import FTMessageItem from "FTComponents/common/FTMessageItem";
import FTLogin from "FTComponents/common/FTLogin";
import { FTApi } from "FTUtils";
import { mapActions, mapGetters } from "vuex";
import { FTMutationTypes } from "FTConstants";
const { GET_MESSAGE_INFO, GET_USER_INFO, SHOW_DIALOG } = FTMutationTypes;
export default {
  name: "FTPage4",
  props: {
    courseId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      info: {},
      boxStatus: {},
      content: ""
    };
  },
  computed: { ...mapGetters({ _userInfo: GET_USER_INFO }) },
  components: { FTMessageItem },
  methods: {
    ...mapActions([GET_MESSAGE_INFO, SHOW_DIALOG]),
    showMessageBox(index) {
      this.boxStatus[index] = this.boxStatus[index] ? false : true;
      this.$forceUpdate();
    },
    _clearBoxStatus() {
      this.boxStatus = {};
      this.$emit("checkItem");
    },
    submitMes(item) {
      if (localStorage.userInfo) {
        let params = {
          course: item.id,
          id: this._userInfo.id,
          content: this.content
        };
        FTApi.FTAddMessage({ ...params }).then(res => {
          if (res.data.code == 200) {
            this.refreshInfo();
            this.content = "";
          }
        });
      } else this[SHOW_DIALOG]({ isShow: true, template: FTLogin });
    },
    refreshInfo() {
      FTApi.FTGetMessage()
        .then(res => {
          if (this.courseId) {
            this.info[this.courseId] = {
              ...res.data.data[this.courseId]
            };
          } else this.info = { ...res.data.data };
        })
        .then(() => {
          this.$forceUpdate();
        });
    }
  },
  created() {
    FTApi.FTGetMessage().then(res => {
      if (this.courseId) {
        if (!res.data.data[this.courseId]) {
          this.info[this.courseId] = {
            id: this.courseId,
            name: this.$store.state[3].chapterInfo[this.courseId].name
          };
        } else this.info[this.courseId] = { ...res.data.data[this.courseId] };
      } else this.info = { ...res.data.data };
      this.$forceUpdate();
    });
  }
};
</script>

<style lang="less" module>
.infoBox {
  position: relative;
  margin: 20px 0;
  border: 2px solid #999999;
  border-radius: 20px;
  padding: 20px 0 0 30px;
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
    padding: 10px 0 10px 10px;
    margin: 10px 0 5px 20px;
    border: 2px solid #999999;
    border-radius: 20px;
  }
}
</style>
