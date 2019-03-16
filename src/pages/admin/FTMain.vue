<template>
  <div :class="$style.container">
    <router-view name="mainPage"></router-view>
  </div>
</template>

<script>
export default {
  name: "FTMain",
  data() {
    return {};
  }
};
</script>

<style lang="less" module>
.container {
  position: relative;
}
</style>
