<template>
  <div class="container">
    <div class="solt">
      <slot></slot>
    </div>
    <el-rate :disabled="disable" v-model="value" @change="handleChange">
    </el-rate>
  </div>
</template>

<script>
export default {
  name: "FTRate",
  props: {
    rota: {
      type: Object,
      default: () => {}
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    value() {
      return this.rota.value || 0;
    }
  },
  methods: {
    handleChange(value) {
      this.$emit("rotaValue", { type: this.rota.type, value: value });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  .solt {
    display: flex;
    > div {
      margin-right: 15px;
    }
  }
}
</style>
