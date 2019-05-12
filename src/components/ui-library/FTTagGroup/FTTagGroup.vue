<template>
  <div :class="['ft-tag-group', { light: theme === 'light' }]">
    <el-tag v-for="tag in list" :key="tag.name" closable>{{ tag.name }}</el-tag>
  </div>
</template>

<script>
export default {
  name: "FTTagGroup",

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

.el-tag {
  .ms(-2);
  font-size: @ms;
  color: #9da2ad;
  background: #363a44;
  border: none;
  padding-right: @rhythm * 2.25;
  padding-left: @rhythm * 2.25;
  padding-top: 1px;
  position: relative;

  &:hover {
    background: #414751;
  }

  & > &__close {
    position: absolute;
    top: 2px;
    right: 2px;
    color: inherit;
    opacity: 0;

    &:hover {
      background: transparent;
    }
  }

  &:hover > &__close {
    opacity: 1;
  }
}

.ft-tag-group {
  .el-tag {
    &:not(:last-child) {
      margin-right: @rhythm;
    }
  }
}

// Light Theme
.ft-tag-group.light {
  .el-tag {
    color: #414751;
    background: #f4f5f6;

    &:hover {
      background: #e7e8e9;
    }

    & > .el-tag__close {
      &:hover {
        color: #414751;
      }
    }
  }
}
</style>
