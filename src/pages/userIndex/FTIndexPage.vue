<template>
  <div :class="$style.container">
    <FTHeader></FTHeader>
    <router-view></router-view>
    <FTCopyRight></FTCopyRight>
    <FTDiaLog></FTDiaLog>
  </div>
</template>

<script>
import { FTHeader } from "FTComponents/common";
import FTCopyRight from "FTComponents/common/FTCopyRight";
import FTDiaLog from "FTComponents/common/FTDiaLog";

export default {
  name: "FTIndexPage",
  components: { FTHeader, FTDiaLog, FTCopyRight },
  data() {
    return {};
  }
};
</script>

<style lang="less" module>
.container {
  position: relative;
}
</style>
