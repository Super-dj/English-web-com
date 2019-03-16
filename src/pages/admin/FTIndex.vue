<template>
  <div class="container">
    <el-container>
      <el-header><FTHeader></FTHeader></el-header>
      <el-container class="bespread">
        <el-aside><FTLeftMenu></FTLeftMenu></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { FTHeader, FTLeftMenu } from "FTComponents";
export default {
  name: "FTIndex",
  components: { FTHeader, FTLeftMenu },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "~FTCss/common";
@headerH: 60px;
.container {
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    height: @headerH;
  }

  .bespread {
    .aC;
    top: @headerH;
    .el-aside {
      background-color: #fff;
      color: #333;
      text-align: center;
      line-height: 200px;
      width: 170px !important;
    }

    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
    }
  }
}
</style>
