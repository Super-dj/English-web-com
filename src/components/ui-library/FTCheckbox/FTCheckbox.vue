<template>
  <el-checkbox :class="{ light: theme === 'light' }"><slot></slot></el-checkbox>
</template>

<script>
export default {
  name: "FTCheckbox",

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

.el-checkbox {
  height: @rhythm * 2;

  &__inner {
    width: @rhythm * 2;
    height: @rhythm * 2;
    border: 2px solid #414751;
    border-radius: 4px;
    background: transparent;
  }

  &__label {
    .ms(-2);
    font-size: @ms;
    line-height: @rhythm * 2;
    letter-spacing: 0.3px;
    color: @color-white !important;
    padding-left: 6px;
  }

  &:hover {
    .el-checkbox__inner {
      border-color: @color-primary-blue !important;
    }
  }

  // Light theme
  &.light {
    .el-checkbox__inner {
      border-color: #9da2ad;
    }

    .el-checkbox__label {
      color: #414751 !important;
    }
  }
}

.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: @color-primary-blue;
  border-color: @color-primary-blue;
}

.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: @color-primary-blue;
}
</style>
