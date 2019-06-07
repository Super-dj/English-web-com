<template>
  <div :class="$style.container">版权信息</div>
</template>

<script>
export default {
  name: "FTCopyRight",
  data() {
    return {};
  }
};
</script>

<style lang="less" module>
.container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 20px;
  color: #ffffff;
  height: 56px;
  background: rgb(84, 92, 100);
  text-align: center;
  line-height: 56px;
}
</style>
