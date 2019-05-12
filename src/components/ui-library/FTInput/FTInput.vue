<template>
  <el-input
    placeholder="Placeholder"
    v-model="value"
    :class="{ light: theme === 'light' }"
  ></el-input>
</template>

<script>
export default {
  name: "FTInput",

  data() {
    return {
      value: ""
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

.el-input {
  &__inner {
    .ms(-1);
    font-size: @ms;
    line-height: @rhythm * 3;
    letter-spacing: 0.3px;
    color: @color-white;
    background: transparent;
    border: 2px solid #414751;
    border-radius: 4px;

    &::placeholder {
      color: #7e838e;
    }

    &:hover {
      border-color: #5a5f69;
    }

    &:focus {
      border-color: @color-primary-blue !important;
    }
  }

  &.light {
    .el-input__inner {
      color: #1b1e24;
      border-color: #e7e8e9;

      &::placeholder {
        color: #9da2ad;
      }

      &:hover {
        border-color: #d2d3d4;
      }
    }
  }
}
</style>
