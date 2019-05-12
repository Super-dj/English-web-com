<template>
  <div class="dialogBox">
    <el-dialog
      :visible="_dialogInfo.status"
      :show-close="false"
      :width="options._width"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <component :is="_dialogInfo.template"></component>
      <div class="closeIconBox" @click="handleClose">
        <!--<div class="closeIconBox" @click="handleClose" v-show="canShowClose">-->
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { FTMutationTypes } from "FTConstants";
const {
  SHOW_DIALOG,
  GET_DIALOG_STATUS
  // GET_CAN_CLOSE_PAY, GET_EMIT
} = FTMutationTypes;
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FTDiaLog",
  props: {
    options: {
      default: () => {
        return {
          _width: "880px",
          _type: "signIn"
        };
      },
      type: Object
    }
  },
  computed: {
    ...mapGetters({ _dialogInfo: GET_DIALOG_STATUS })
    // canShowClose() {
    //   return (
    //     typeof this.emitType !== "string" ||
    //     this.emitType.indexOf("fixedDialog") === -1 ||
    //     this.emitType.indexOf("fixedDialog=true") === -1
    //   );
    // }
  },
  methods: {
    ...mapActions([SHOW_DIALOG]),
    handleClose() {
      // if (this.options._type === "upgrade" && !this._canClosePay) {
      //   this[SHOW_DIALOG]({ isShow: true, type: "payFeedback" });
      // } else {
      this[SHOW_DIALOG]({ isShow: false });
      // }
    }
  },
  components: {}
};
</script>

<style lang="less">
@import "~FTCss/common";

.dialogBox {
  .el-dialog {
    background: linear-gradient(135deg, rgb(191, 206, 232), rgb(188, 167, 204));
    box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    height: 540px;
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      padding: 0;
      height: 540px;
    }
  }
  .el-checkbox {
    color: rgba(126, 131, 142, 1);
    .el-checkbox__label {
      font-size: 12px;
    }
    .el-checkbox__inner {
      /*width: 16px;*/
      /*height: 16px;*/
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: rgba(90, 95, 105, 1);
    }
  }
}
</style>
<style scoped lang="less">
@import "~FTCss/common";
.dialogBox {
  .relative;
  .closeIconBox {
    .absolute;
    width: 24px;
    height: 24px;
    background: rgba(161, 214, 239, 0.2);
    border-radius: 50%;
    right: -24px;
    top: -24px;
    .fJAC;
    .cursorPointer;
    .closeIcon {
      width: 10px;
      height: 10px;
      opacity: 0.7;
      .transitionClass(transform);
    }
    &:hover .closeIcon {
      opacity: 1;
      transform: rotate(180deg);
    }
  }
}
</style>
