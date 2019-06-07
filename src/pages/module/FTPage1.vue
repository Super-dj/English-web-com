<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <div :class="$style.noticeInfo">
        <div :class="$style.image">
          <el-carousel :indicator-position="outside" height="400px">
            <el-carousel-item v-for="(item, index) in images" :key="index">
              <img :src="item.imgUrl" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div :class="$style.update">
          <!--<div-->
          <!--v-for="(item, index) in _noticeInfo"-->
          <!--:key="index"-->
          <!--:class="$style.noticeItem"-->
          <!--&gt;-->
          <!--<div :class="$style.title">-->
          <!--{{ item.title }}-->
          <!--</div>-->
          <!--<div :class="$style.content">-->
          <!--{{ item.content.substr(0, 7) + "..." }}-->
          <!--</div>-->
          <!--</div>-->
        </div>
      </div>
      <div :class="$style.sourcesInfo">
        <div
          v-for="(item, index) in sourceInfo"
          :key="index"
          :class="$style.itemInfo"
        >
          <FTCardInfo
            :cardInfo="item"
            @handleClick="_handleClick"
            @handleMore="_handleMore"
          ></FTCardInfo>
        </div>
      </div>
    </div>
    <div :class="$style.content"></div>
  </div>
</template>

<script>
import FTLogin from "FTComponents/common/FTLogin";
import { FTCardInfo } from "FTComponents/ui-library";
import { mapGetters, mapActions } from "vuex";
import { FTMutationTypes } from "FTConstants";

const { GET_NOTICE_INFO, SET_NOTICE_INFO, SHOW_DIALOG } = FTMutationTypes;
export default {
  name: "FTPage1",
  components: { FTCardInfo },
  computed: {
    ...mapGetters({ _noticeInfo: GET_NOTICE_INFO })
  },
  data() {
    return {
      images: [
        {
          imgUrl: "http://www.hevttc.edu.cn/images/1.jpg",
          routeUrl: ""
        },
        {
          imgUrl:
            "http://wx3.sinaimg.cn/large/72cbf277ly1fp4dapkuuij20es08cdg9.jpg"
        },
        {
          imgUrl:
            "http://wx3.sinaimg.cn/large/72cbf277ly1fp4dapkuuij20es08cdg9.jpg"
        }
      ],
      sourceInfo: [
        {
          part: 1,
          cardName: "最新资源",
          cardType: "更多",
          list: [
            { name: "课程：信息管理与信...", time: "2019/1/21", id: 2 },
            {
              name: "文档：Design and Imp...",
              time: "2019/1/21",
              url:
                "http://localhost/api/file/20190531124109Design and Implementation of Information Management System for Multimedia Classroom Based on B_S Structure.pdf"
            },
            {
              name: "文档：Smart Home In...",
              time: "2018/9/21",
              url:
                "http://localhost/api/file/Smart Home Information Management System for Energy-Efficient Networks.pdf"
            },
            {
              name: "文档：Remote Monitor...",
              time: "2018/5/21",
              url:
                "http://localhost/api/file/Remote Monitoring Information Management System for Preventing Performance Degradation of Database"
            }
          ]
        },
        {
          part: 2,
          cardName: "资源排行",
          cardType: "更多",
          list: [
            {
              name: "文档：教学大纲",
              time: "2019/1/21",
              url:
                "http://localhost/api/file/20190531075747专业外语-课程教学大纲.docx"
            },
            { name: "课程：信息管理与信...", time: "2019/1/21", id: 2 },
            {
              name: "文档：Intranet_Extra...",
              time: "2018/9/21",
              url:
                "Intranet_Extranet_Internet-Based Quality Information Management System in Expanded Enterprises.pdf"
            }
          ]
        },
        {
          part: 3,
          cardName: "推荐资源",
          cardType: "更多",
          list: [
            { name: "课程：信息管理与信...", time: "2019/1/21", id: 2 },
            {
              name: "文档：Intranet_Extra...",
              time: "2018/9/21",
              url:
                "Intranet_Extranet_Internet-Based Quality Information Management System in Expanded Enterprises.pdf"
            },
            {
              name: "文档：Smart Home In...",
              time: "2018/9/21",
              url:
                "http://localhost/api/file/Smart Home Information Management System for Energy-Efficient Networks.pdf"
            },
            {
              name: "文档：Remote Monitor...",
              time: "2018/5/21",
              url:
                "http://localhost/api/file/Remote Monitoring Information Management System for Preventing Performance Degradation of Database"
            }
          ]
        },
        {
          part: 4,
          cardName: "共享资源网站",
          cardType: "更多",
          list: [
            { name: "国家精品课资源网", url: "http://www.jingpinke.com/" },
            { name: "网易公开课", url: "https://open.163.com/" },
            { name: "外语教学与研究出版社", url: "http://www.fltrp.com/" }
          ]
        }
      ]
    };
  },

  methods: {
    ...mapActions([SET_NOTICE_INFO, SHOW_DIALOG]),
    _handleClick(data) {
      if (localStorage.userInfo)
        this.$router.push({ name: "study", params: { ...data } });
      else this[SHOW_DIALOG]({ isShow: true, template: FTLogin });
    },
    _handleMore(data) {
      this.$router.push({ name: "page3", params: { ...data } });
    }
  }
};
</script>

<style lang="less" module>
.container {
  .header {
    .noticeInfo {
      .image {
        /*width: 80%;*/
        height: 450px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .update {
        flex-grow: 1;
        /*max-width: 20%;*/
        line-height: 1.2;
        padding: 0 10px;
        /*border: 1px solid #e6e6e6;*/
        margin-bottom: 18px;
        > p {
          padding: 8px 0;
          font-size: 22px;
          line-height: 1.4;
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

<style>
.el-carousel__item > img {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  height: 450px;
  width: 100%;
  margin: 0;
}
</style>
