<template>
  <div>
    <FTHeader></FTHeader>
    <router-view></router-view>
    <FTDiaLog></FTDiaLog>
  </div>
</template>

<script>
import { FTHeader } from "FTComponents/common";
import FTDiaLog from "FTComponents/common/FTDiaLog";

export default {
  name: "FTIndexPage",
  components: { FTHeader, FTDiaLog },
  data() {
    return {};
  }
};
</script>

<style lang="less"></style>
