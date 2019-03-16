<template>
  <div :class="$style.container">
    <FTSearchCondition v-if="false"></FTSearchCondition>
    <FTDataTable
      :bannerList="bannerList"
      :pageInfo="pageInfo"
      :pageNo="pageNo"
      @callback="handelPageNo"
    ></FTDataTable>
  </div>
</template>

<script>
import { FTSearchCondition, FTDataTable } from "FTComponents";
import { FTMutationTypes } from "FTConstants";
import { mapGetters, mapActions } from "vuex";

const {
  GET_ALL_BANNER,
  SET_ALL_BANNER,
  GET_PAGE_INFO,
  GET_NET_STATE
} = FTMutationTypes;
export default {
  name: "FTChangeBanner",
  components: { FTSearchCondition, FTDataTable },
  computed: {
    ...mapGetters({
      bannerList: GET_ALL_BANNER,
      pageInfo: GET_PAGE_INFO,
      netError: GET_NET_STATE
    })
  },
  data() {
    return {
      pageNo: 1
    };
  },
  watch: {
    netError() {
      this.networkError();
    }
  },
  created() {
    if (!this.bannerList) {
      this.getBannerList(this.pageNo);
    }
    this.networkError();
  },
  methods: {
    ...mapActions([SET_ALL_BANNER]),
    getBannerList(pageNo) {
      this[SET_ALL_BANNER]({ pageNo: pageNo });
    },
    handelPageNo(pageNo) {
      this.getBannerList(pageNo);
    },
    networkError() {
      if (this.netError) {
        this.$message({ message: "登录失效,请重新登录", type: "error" });
        this.$router.replace("/login");
      }
    }
  }
};
</script>

<style lang="less" module>
.container {
  background: #4fc5b2;
  width: 100%;
  height: 100%;
  .pagination {
  }
}
</style>
