<template>
  <el-switch
    :width="32"
    v-model="value"
    :class="{ light: theme === 'light' }"
  ></el-switch>
</template>

<script>
export default {
  name: "FTSwitch",

  data() {
    return {
      value: false
    };
  },

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

.el-switch {
  line-height: @rhythm * 2;
  height: @rhythm * 2;

  &__core {
    width: 32px;
    height: @rhythm * 2;
    border: none;
    background: #414751;

    &::after {
      top: 2px;
      left: 2px;
      width: 12px;
      height: 12px;
    }
  }

  &.is-checked {
    .el-switch__core {
      background-color: @color-primary-blue !important;
    }

    .el-switch__core::after {
      margin-left: -14px;
    }
  }
}

// Light Theme
.el-switch.light {
  .el-switch__core {
    background: #9da2ad;
  }
}
</style>
