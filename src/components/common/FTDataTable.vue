<template>
  <div :class="$style.container">
    <div :class="$style.dataTitle">
      <div :class="$style.dataCount">
        共 <span>{{ pageInfo.numResults }}</span> 条数据
      </div>
      <div :class="$style.dataAdd">
        <el-button type="primary" @click="changeVisible">添加</el-button>
        <FTAddInfoDialog
          :dialogFormVisible="dialogFormVisible"
          @callback="handleDialog"
        />
      </div>
    </div>
    <div>
      <el-table :data="bannerList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="60">
        </el-table-column>
        <el-table-column prop="bannername" label="标题" width="120">
        </el-table-column>
        <el-table-column prop="ordinal" label="排列序号" width="80">
        </el-table-column>
        <el-table-column prop="bigPic" label="资源预览" width="100">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" :open-delay="1000">
              <img
                :src="scope.row.bigPic"
                style="max-width: 400px;max-height: 200px"
              />
              <div slot="reference">
                <img :src="scope.row.bigPic" :class="$style.preview" />
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="smallPic" label="缩略图预览" width="100">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" :open-delay="1000">
              <img
                :src="scope.row.smallPic"
                style="max-width: 400px;max-height: 200px"
              />
              <div slot="reference">
                <img :src="scope.row.smallPic" :class="$style.preview" />
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="isdefault" label="默认banner" width="100">
          <template slot-scope="scope">
            <div>{{ scope.row.isdefault ? "是" : "否" }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="state" label="状态" width="100">
          <template slot-scope="scope">
            <div>{{ scope.row.state ? "线上" : "线下" }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="beginTime" label="开始时间" width="160">
          <template slot-scope="scope">
            <div>{{ scope.row.beginTime | formatDate }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="endTime" label="结束时间" width="160">
          <template slot-scope="scope">
            <div>{{ scope.row.endTime | formatDate }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="jumpUrl" label="跳转链接" width="200">
        </el-table-column>
        <el-table-column prop="desc" label="描述" width="120">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <!--<el-button type="text" size="small" @click="handleClick(scope.row)">-->
            <!--查看-->
            <!--</el-button>-->
            <el-button type="text" size="small" @click="handleClick(scope.row)">
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div :class="$style.pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pageNo"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="pageInfo.numResults"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import FTAddInfoDialog from "./FTAddInfoDialog";
import { formatTime } from "FTUtils";
import { FTMutationTypes } from "FTConstants";
import { mapActions } from "vuex";

const { SET_CURRENT_BANNER } = FTMutationTypes;
export default {
  name: "FTDataTable",
  components: { FTAddInfoDialog },
  props: {
    bannerList: {
      default: null,
      type: Array
    },
    pageInfo: {
      default: () => {},
      type: Object
    },
    pageNo: {
      default: 1,
      type: Number
    }
  },
  filters: {
    formatDate(date) {
      return formatTime(new Date(date));
    }
  },
  data() {
    return {
      visible2: true,
      dialogFormVisible: false
    };
  },
  methods: {
    ...mapActions([SET_CURRENT_BANNER]),
    handleClick(row) {
      this[SET_CURRENT_BANNER](row);
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    handleDialog(data) {
      this.dialogFormVisible = data;
    },
    changeVisible() {
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    handleCurrentChange(val) {
      this.$emit("callback", val);
    }
  }
};
</script>

<style lang="less" module>
.container {
  position: relative;
  height: 100%;
  .dataTitle {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 5px;
    .dataCount {
    }
    .dataAdd {
    }
  }
  .preview {
    height: 30px;
  }
  .pagination {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    transform: translate(-50%);
    background: #ffffff;
  }
}
</style>
