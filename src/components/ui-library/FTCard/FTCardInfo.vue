<template>
  <el-card class="box-card">
    <div v-if="cardInfo.cardName" slot="header" class="clearfix">
      <span>{{ cardInfo.cardName }}</span>
      <el-button style="float: right; padding: 3px 0" type="text">{{
        cardInfo.cardType
      }}</el-button>
    </div>
    <div v-for="(item, index) in cardInfo.list" :key="index" class="text item">
      {{ item.name }}
      <span class="time">{{ item.time }}</span>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "FTCardInfo",
  props: {
    cardInfo: {
      default: () => {},
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  cursor: pointer;
  &:hover {
    color: rgb(255, 208, 75);
  }
  .time {
    float: right;
  }
}

.clearfix {
  text-align: left;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 280px;
}
</style>
