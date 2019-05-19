<template>
  <div>
    <div
      v-for="(item, index) in info"
      :key="`i${index}`"
      :class="$style.infoBox"
    >
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
          @click="showMessageBox"
        ></i>
      </div>
      <div :class="$style.btn">
        <div><input type="text" v-model="content" /></div>
        <el-button
          class="el-icon-s-promotion"
          size="mini"
          :class="$style.btn"
          @click="submitMes(item)"
          >留言</el-button
        >
      </div>
      <FTMessageItem :info="item" :courseId="item.id"></FTMessageItem>
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
  data() {
    return {
      info: null,
      content: ""
    };
  },
  computed: { ...mapGetters({ _userInfo: GET_USER_INFO }) },
  components: { FTMessageItem },
  methods: {
    ...mapActions([GET_MESSAGE_INFO, SHOW_DIALOG]),
    showMessageBox() {},
    submitMes(item) {
      if (localStorage.userInfo) {
        let params = {
          course: item.id,
          id: this._userInfo.id,
          content: this.content
        };
        FTApi.FTAddMessage({ ...params }).then(res => {
          if (res.data.code == 200) {
            FTApi.FTGetMessage().then(res => {
              this.info = { ...res.data.data };
            });
          }
        });
      } else this[SHOW_DIALOG]({ isShow: true, template: FTLogin });
    }
  },
  created() {
    FTApi.FTGetMessage().then(res => {
      this.info = { ...res.data.data };
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
