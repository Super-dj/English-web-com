<template>
  <el-dropdown trigger="click" @visible-change="onVisibleChange">
    <span :class="{ active: isDropdownOpen }" class="el-dropdown-trigger">
      Dropdown List
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>Action 1</el-dropdown-item>
      <el-dropdown-item>Action 2</el-dropdown-item>
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item disabled>Action 4</el-dropdown-item>
      <el-dropdown-item divided>Action 5</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "FTDropdown",

  data() {
    return {
      isDropdownOpen: false
    };
  },

  methods: {
    onVisibleChange(e) {
      this.isDropdownOpen = e;
      return this.isDropdownOpen;
    }
  }
};
</script>

<style lang="less">
@import "~FTCss/common";

.el-dropdown {
  display: inline-flex;
}

.el-dropdown-trigger {
  .ms(-1);
  font-size: @ms;
  line-height: @rhythm * 3;
  color: #d2d3d4;
  height: @rhythm * 4;
  padding: (@rhythm * 0.5) (@rhythm * 2);
  box-shadow: inset 0 0 0 2px #414751;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  > i {
    color: #7e838e;
  }

  &:hover {
    box-shadow: inset 0 0 0 2px #5a5f69;

    > i {
      color: @color-white;
    }
  }

  > i {
    transition: transform 0.25s;
  }

  &.active {
    box-shadow: inset 0 0 0 2px @color-primary-blue;

    > i {
      color: @color-white;
      transform: rotate(180deg);
    }
  }
}
</style>
