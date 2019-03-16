<template>
  <div :class="$style.container">
    <el-menu default-active="/changeBanner" router>
      <el-submenu index="1">
        <template slot="title">
          <span>资源替换</span>
        </template>
        <el-menu-item index="/changeBanner">
          banner替换
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/a">
        <span slot="title">个人信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "FTLeftMenu",
  data() {
    return {
      a: { path: "/" }
    };
  },
  methods: {}
};
</script>

<style lang="less" module>
.container {
}
</style>
