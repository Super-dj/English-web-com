<template>
  <FTPage4 :courseId="parseInt(courseId)" :class="$style.sss"></FTPage4>
</template>

<script>
import FTPage4 from "FTPages/module/FTPage4";
export default {
  name: "FTMessageInfo",
  components: {
    FTPage4
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" module>
.sss {
  width: 100%;
}
</style>
