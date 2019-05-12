<template>
  <el-input placeholder="Placeholder" v-model="value" clearable></el-input>
</template>

<script>
export default {
  name: "FTSearchBox",

  data() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="less">
@import "~FTCss/common";
</style>
