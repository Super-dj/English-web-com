<template>
  <button
    @click="handleClick"
    :class="[
      $style.btn,
      {
        [$style.btn_FLUID]: variant === 'fluid',
        [$style.btn_LARGE]: size === 'large',
        [$style.btn_SMALL]: size === 'small',
        [$style.btn_GREEN]: theme === 'green',
        [$style.btn_CANCEL]: theme === 'cancel',
        [$style.btn_DASHED]: theme === 'dashed'
      }
    ]"
  >
    <span :class="$style.btn__copy">
      <slot name="default"></slot>
    </span>
    <slot name="icon-after"></slot>
  </button>
</template>

<script>
export default {
  name: "FTButton",

  props: {
    variant: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: ""
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style module lang="less">
@import "~FTCss/common";

.btn {
  .ms(-1);
  font-size: @ms;
  color: @color-white;
  background: @color-primary-blue;
  height: @rhythm * 5;
  padding: @rhythm (@rhythm * 4);
  border-radius: 4px;
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &__copy {
    display: inline-flex;
    align-items: center;
  }

  svg {
    &:first-child {
      margin-right: @rhythm / 2;
    }

    &:last-child {
      margin-left: auto;
    }
  }

  &:not(:disabled):hover {
    background: @color-secondary-blue;
  }

  &:not(:disabled):active {
    color: fadeout(@color-white, 50%);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  // Variant modifiers
  &_FLUID {
    display: black;
    width: 100%;
    padding-right: @rhythm * 2;
    padding-left: @rhythm * 2;
  }

  // Size modifiers
  &_LARGE {
    .ms(0);
    font-size: @ms;
    height: @rhythm * 6;
  }

  &_SMALL {
    .ms(-2);
    font-size: @ms;
    padding-right: @rhythm * 2;
    padding-left: @rhythm * 2;
    height: @rhythm * 4;
  }

  // Theme modifier
  &_GREEN {
    background: @color-primary-green;

    &:not(:disabled):hover {
      background: @color-secondary-green;
    }
  }

  &_DASHED {
    color: @color-primary-blue;
    background: transparent;
    border: 1px dashed;

    &:not(:disabled):hover {
      background: transparent;
    }

    &:not(:disabled):active {
      color: fadeout(@color-primary-blue, 30%);
    }
  }

  &_CANCEL {
    color: rgba(157, 162, 173, 1);
    background: transparent;
    border: 2px solid #32363d;

    &:not(:disabled):hover {
      background: #32363d;
    }
  }
}
</style>
