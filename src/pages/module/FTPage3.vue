<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "FTPage3",
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log(this.$route);
  }
};
</script>

<style lang="less"></style>
