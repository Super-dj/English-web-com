<template>
  <el-radio-group v-model="radio">
    <el-radio
      v-for="item in list"
      :key="item.value"
      :label="item.value"
      :class="{ light: theme === 'light' }"
      >{{ item.label }}</el-radio
    >
  </el-radio-group>
</template>

<script>
export default {
  name: "FTRadioGroup",

  data() {
    return {
      radio: null
    };
  },

  props: {
    list: Array,
    theme: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less">
@import "~FTCss/common";

.el-radio-group:not(.tabs) {
  display: flex;
  flex-direction: column;
}

.el-radio {
  height: @rhythm * 2;

  &:not(:last-child) {
    margin: 0 0 (@rhythm * 1.5);
  }

  &__inner {
    width: @rhythm * 2;
    height: @rhythm * 2;
    border: 2px solid #414751;
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
    .el-radio__inner {
      border-color: @color-primary-blue !important;
    }
  }

  &.light {
    .el-radio__inner {
      border-color: #9da2ad;
    }

    .el-radio__label {
      color: #414751 !important;
    }
  }
}

.el-radio__input.is-checked .el-radio__inner,
.el-radio__input.is-indeterminate .el-radio__inner {
  background-color: @color-primary-blue;
  border-color: @color-primary-blue;
}

.el-radio__input.is-focus .el-radio__inner {
  border-color: @color-primary-blue;
}
</style>
