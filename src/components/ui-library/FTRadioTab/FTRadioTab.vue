<template>
  <el-radio-group
    v-model="radio"
    :class="['tabs', { light: theme === 'light' }]"
  >
    <el-radio-button v-for="item in list" :key="item.lable" :label="item.value">
      <component :is="item.icon"></component>
      <span v-if="item.label">{{ item.label }}</span>
    </el-radio-button>
  </el-radio-group>
</template>

<script>
export default {
  name: "FTRadioTab",

  data() {
    return {
      radio: this.list[0].value
    };
  },

  props: {
    list: Array,
    theme: {
      type: String,
      default: ""
    }
  },

  watch: {
    radio(curVal) {
      this.$emit("changeRadio", curVal);
    }
  }
};
</script>

<style lang="less">
@import "~FTCss/common";

.el-radio-group.tabs {
  display: flex;
  width: 100%;
  padding-left: 1px;
  padding-right: 1px;

  .el-radio-button {
    flex: 1;
    display: block;
    margin-left: -1px;
    margin-right: -1px;
    color: #d2d3d4;
    box-shadow: inset 0 0 0 2px #414751;

    &:hover {
      postion: relative;
      z-index: 1;
      color: @color-white;
      box-shadow: inset 0 0 0 2px @color-primary-blue !important;
    }

    &:first-child {
      border-radius: 4px 0 0 4px;
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
    }

    &.is-active {
      postion: relative;
      z-index: 1;
      box-shadow: none !important;
      color: @color-white !important;
      background: @color-primary-blue !important;
    }

    &__inner {
      .ms(-1);
      font-size: @ms;
      line-height: @rhythm * 2;
      letter-spacing: 0.3px;
      padding: @rhythm (@rhythm * 2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: inherit !important;
      border: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
    }
  }
}

// Light Theme
.el-radio-group.tabs.light {
  .el-radio-button {
    color: #414751;
    box-shadow: inset 0 0 0 2px #e7e8e9;

    &__inner {
      transition: none;
    }
  }
}
</style>
