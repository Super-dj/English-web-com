<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox
      v-for="item in list"
      :key="item.value"
      :label="item.value"
      :class="{ light: theme === 'light' }"
      >{{ item.label }}</el-checkbox
    >
  </el-checkbox-group>
</template>

<script>
export default {
  name: "FTCheckboxGroup",

  data() {
    return {
      checkList: []
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

.el-checkbox-group {
  display: flex;
  flex-direction: column;
}

.el-checkbox {
  &:not(:last-child) {
    margin: 0 0 (@rhythm * 1.5);
  }
}
</style>
