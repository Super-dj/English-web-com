<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <div :class="$style.noticeInfo">
        <div :class="$style.image">
          <img
            src="http://icourse.swu.edu.cn/uploadfile/2017/1213/20171213033854532.jpg"
            alt=""
          />
        </div>
        <div :class="$style.update">
          <div
            v-for="(item, index) in _noticeInfo"
            :key="index"
            :class="$style.noticeItem"
          >
            <div :class="$style.title">
              {{ item.title }}
            </div>
            <div :class="$style.content">
              {{ item.content.substr(0, 7) + "..." }}
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.sourcesInfo">
        <div
          v-for="(item, index) in sourceInfo"
          :key="index"
          :class="$style.itemInfo"
        >
          <FTCardInfo :cardInfo="item"></FTCardInfo>
        </div>
      </div>
    </div>
    <div :class="$style.content"></div>
  </div>
</template>

<script>
import { FTCardInfo } from "FTComponents/ui-library";
import { mapGetters, mapActions } from "vuex";
import { FTMutationTypes } from "FTConstants";

const { GET_NOTICE_INFO, SET_NOTICE_INFO } = FTMutationTypes;
export default {
  name: "FTPage1",
  components: { FTCardInfo },
  computed: {
    ...mapGetters({ _noticeInfo: GET_NOTICE_INFO })
  },
  data() {
    return {
      sourceInfo: [
        {
          cardName: "最新资源",
          cardType: "更多",
          list: [
            { name: "kecheng1", time: "2019/1/21" },
            { name: "kecheng2", time: "2019/1/21" },
            { name: "kecheng4", time: "2018/9/21" },
            { name: "kecheng5", time: "2018/5/21" },
            { name: "kecheng6", time: "2018/3/21" },
            { name: "kecheng7", time: "2018/1/21" }
          ]
        },
        {
          cardName: "资源排行",
          cardType: "更多",
          list: [
            { name: "kecheng1", time: "2019/1/21" },
            { name: "kecheng2", time: "2019/1/21" },
            { name: "kecheng4", time: "2018/9/21" },
            { name: "kecheng5", time: "2018/5/21" },
            { name: "kecheng6", time: "2018/3/21" },
            { name: "kecheng7", time: "2018/1/21" }
          ]
        },
        {
          cardName: "推荐资源",
          cardType: "更多",
          list: [
            { name: "kecheng1", time: "2019/1/21" },
            { name: "kecheng2", time: "2019/1/21" },
            { name: "kecheng4", time: "2018/9/21" },
            { name: "kecheng5", time: "2018/5/21" },
            { name: "kecheng6", time: "2018/3/21" },
            { name: "kecheng7", time: "2018/1/21" }
          ]
        },
        {
          cardName: "共享资源",
          cardType: "更多",
          list: [
            { name: "共享1", time: "2019/1/21" },
            { name: "共享1", time: "2019/1/21" },
            { name: "共享1", time: "2018/9/21" },
            { name: "共享1", time: "2018/5/21" },
            { name: "共享1", time: "2018/3/21" },
            { name: "共享1", time: "2018/3/21" }
          ]
        }
      ]
    };
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
.container {
  .header {
    .noticeInfo {
      display: flex;
      .image {
        width: 80%;
        > img {
          width: 100%;
        }
      }
      .update {
        flex-grow: 1;
        .noticeItem {
          margin: 5px 0 10px 3px;
          border-bottom: 1px solid #272b33;
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
          }
        }
      }
    }
    .sourcesInfo {
      display: flex;
      justify-content: space-between;
      .itemInfo {
      }
    }
  }
  .content {
  }
}
</style>
