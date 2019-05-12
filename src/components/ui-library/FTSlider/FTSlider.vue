<template>
  <div class="ft-slider">
    <div class="ft-slider__heading">
      <span>Label</span>
      <span>0</span>
    </div>
    <el-slider v-model="value" :show-tooltip="false"></el-slider>
  </div>
</template>

<script>
export default {
  name: "FTSlider",

  data() {
    return {
      value: 0
    };
  }
};
</script>

<style lang="less">
@import "~FTCss/common";

.el-slider {
  &__runway {
    border-radius: 2px;
    background: #414751;
    margin: @rhythm 0;
  }

  &__bar {
    background: @color-primary-blue;
  }

  &__button {
    width: @rhythm * 2 !important;
    height: @rhythm * 2 !important;
    background: #9da2ad;
    border: 2px solid #262b33;
    transform: none !important;
  }
}

.ft-slider {
  &__heading {
    .ms(-2);
    font-size: @ms;
    line-height: @rhythm * 2;
    display: flex;
    justify-content: space-between;
    margin-bottom: @rhythm * 0.5;
    color: @color-white;
  }
}
</style>
