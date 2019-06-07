<template>
  <div>
    <div
      v-for="(item, index) in _noticeInfo"
      :key="index"
      :class="$style.noticeItem"
    >
      <el-collapse>
        <el-collapse-item :name="index">
          <div slot="title" :class="$style.title">
            {{ item.title }}
          </div>
          <div :class="$style.content">
            <span>{{ item.content }}</span>
            <div v-if="item.url" :class="$style.url">
              <el-link type="info" :href="item.url" :underline="false">
                点击下载
              </el-link>
            </div>
            <div :class="$style.time">
              {{ (parseInt(item.create_time) * 1000) | formatDate }}
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { formatTime } from "FTUtils";
import { mapGetters, mapActions } from "vuex";
import { FTMutationTypes } from "FTConstants";

const { GET_NOTICE_INFO, SET_NOTICE_INFO } = FTMutationTypes;
export default {
  name: "FTPage6",
  filters: {
    formatDate(date) {
      return formatTime(new Date(date));
    }
  },
  computed: {
    ...mapGetters({ _noticeInfo: GET_NOTICE_INFO })
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([SET_NOTICE_INFO])
  },
  created() {
    this[SET_NOTICE_INFO]();
  }
};
</script>

<style lang="less" module>
.noticeItem {
  margin: 5px 0 10px 3px;
  box-shadow: #00b982;
  &:hover {
    cursor: pointer;
    color: rgb(255, 208, 75);
  }
  .title {
    font-size: 22px;
    margin-bottom: 12px;
  }
  .content {
    position: relative;
    > span {
      font-size: 18px;
    }
    .url {
      position: absolute;
      right: 180px;
      top: 0;
    }
    .time {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>
