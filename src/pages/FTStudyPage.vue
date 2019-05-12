<template>
  <div :class="$style.container">
    <FTHeader></FTHeader>
    <div :class="$style.content">
      <div :class="$style.left">
        <video
          controls
          src="http://icourse.swu.edu.cn:80/course_def/res_url/L21udC9kYXRhMS91cGxvYWQvaXNhZG1pbi9tYXN0ZXIvMTEvMjAxNy8xMS0wMy/nrKzkuozlsYrigJzlpb3ogIHluIjigJ3mvJTorrLmr5TotZvlhrPotZvop4bpopEv@/01%E6%9D%A8%E9%9B%B7.mp4_yq.mp4?start=0&end=0&catid=1&pid=720"
        ></video>
      </div>
      <div :class="$style.right">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { FTHeader } from "FTComponents/common";
export default {
  name: "FTStudyPage",
  components: {
    FTHeader
  },
  data() {
    return {
      info: {
        list: [
          { name: "aaaa1" },
          { name: "aaaa1" },
          { name: "aaaa1" },
          { name: "aaaa1" },
          { name: "aaaa1" },
          { name: "aaaa1" }
        ]
      }
    };
  }
};
</script>

<style lang="less" module>
.container {
  .content {
    height: 600px;
    display: flex;
    justify-content: center;
    .left {
      > video {
        height: 100%;
      }
    }
    .right {
      width: 400px;
      height: 100%;
      background: #555;
    }
  }
}
</style>
