<template>
  <el-progress
    :percentage="70"
    :stroke-width="16"
    :show-text="false"
    :class="{ 'is-broken': broken, light: theme === 'light' }"
  ></el-progress>
</template>

<script>
export default {
  name: "FTProgressBar",

  props: {
    broken: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less">
@import "~FTCss/common";

.el-progress-bar {
  &__inner {
    background-image: linear-gradient(269deg, #31b9ff 0%, #2d7dfa 100%);
  }

  &__outer {
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #5a5f69;
  }
}

.el-progress.is-broken {
  .el-progress-bar__inner {
    background: #f24a63;
  }

  .el-progress-bar__outer {
    position: relative;

    &::after {
      content: "!";
      .ms(-3);
      font-size: @ms;
      color: @color-white;
      line-height: 14px;
      text-align: center;
      width: 14px;
      height: 14px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      background: #f24a63;
      border-radius: 50%;
    }
  }
}

// Light Theme
.el-progress.light {
  .el-progress-bar {
    &__outer {
      border: none;
      background: rgba(0, 0, 0, 0.1);
    }
  }

  &.is-broken {
    .el-progress-bar__outer {
      &::after {
        line-height: @rhythm * 2;
        width: @rhythm * 2;
        height: @rhythm * 2;
      }
    }
  }
}
</style>
