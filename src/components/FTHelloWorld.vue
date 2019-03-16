<template>
  <div :class="[$style.hello, 'u-status-btn', 'word']">
    <button @click="change">{{ _("hello") }}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { FTMutationTypes } from "FTConstants";

const { CHANGE_LANGUAGE, GET_LOCAL, SET_EMIT, GET_EMIT } = FTMutationTypes;
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters({ _: GET_LOCAL, __: GET_EMIT })
  },
  methods: {
    ...mapActions([CHANGE_LANGUAGE, SET_EMIT]),
    change() {
      this[CHANGE_LANGUAGE]();
      this[SET_EMIT]({ type: "helloworld" + new Date().getTime() });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.word {
  background: #000;
}
</style>
<!--  通过~FTCss方式在css中引入 -->
<style module lang="less">
@import "~FTCss/common.less";

.hello {
  background: red;
  .absolute;
  .aC;
}
</style>
