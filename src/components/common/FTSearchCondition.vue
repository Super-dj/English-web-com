<template>
  <div :class="$style.container">
    <el-form :inline="true" :model="formInline" :class="$style.formGroup">
      <el-form-item label="标题" style="display: flex">
        <el-input v-model="formInline.user" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="类别" style="display: flex">
        <el-select v-model="formInline.region" placeholder="请选择类别">
          <el-option label="情人节" value="qingrenjie"></el-option>
          <el-option label="春节" value="chunjie"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FTSearchCondition",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.formInline);
    }
  }
};
</script>

<style lang="less" module>
.container {
  background: #ffffff;
  .formGroup {
    display: flex;
  }
}
</style>
