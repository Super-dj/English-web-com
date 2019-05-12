<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="999"
    :class="{ light: theme === 'light' }"
  ></el-pagination>
</template>

<script>
export default {
  name: "FTPagination",

  props: {
    theme: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less">
@import "~FTCss/common";

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  .ms(-1);
  font-size: @ms;
  height: @rhythm * 4;
  line-height: @rhythm * 4;
  font-weight: 400;
  letter-spacing: 0.3px;
  min-width: @rhythm * 4;
  margin: 0 (@rhythm / 2);
  background-color: #363a44;
  border-radius: 4px;
}

.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: @color-white;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: @color-primary-blue;
}

.el-pagination.is-background.light .btn-next,
.el-pagination.is-background.light .btn-prev,
.el-pagination.is-background.light .el-pager li {
  color: #5a5f69;
  background-color: #f4f5f6;
}

.el-pagination.is-background.light
  .el-pager
  li:not(.disabled):not(.active):hover {
  color: @color-primary-blue;
}
</style>
