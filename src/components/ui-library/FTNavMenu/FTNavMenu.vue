<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item
      v-for="(item, index) in info"
      :index="index.toString()"
      :key="index"
      :route="item.path"
      >{{ item.lable }}</el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  name: "FTNavMenu",
  props: {
    info: {
      default: () => {},
      type: Array
    }
  },
  data() {
    return {
      activeIndex: "0"
    };
  },
  computed: {
    route() {
      return this.$route;
    }
  },
  watch: {
    route: {
      handler(curVul) {
        if (curVul.path.indexOf("/page1") != -1) this.activeIndex = "0";
        if (curVul.path.indexOf("/page3") != -1) this.activeIndex = "2";
      },
      deep: true
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less"></style>
