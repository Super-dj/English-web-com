<template>
  <div :class="$style.container">
    <el-dialog
      :title="title"
      :visible="dialogVisible"
      @close="cancelChange"
      @closed="
        () => {
          this.title = '添加资源';
        }
      "
      center
      top="15px"
      width="800px"
    >
      <el-form :model="form" size="mini" :rules="rules" ref="submitForm">
        <el-form-item
          label="资源名称"
          :label-width="formLabelWidth"
          prop="bannername"
        >
          <el-input v-model="form.bannername" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="资源序号"
          :label-width="formLabelWidth"
          prop="ordinal"
        >
          <el-input v-model="form.ordinal" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="跳转类型"
          :label-width="formLabelWidth"
          prop="jumpType"
        >
          <el-select v-model="form.jumpType" placeholder="请选择跳转类型">
            <el-option label="链接跳转" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="跳转地址"
          :label-width="formLabelWidth"
          prop="jumpUrl"
        >
          <el-input v-model="form.jumpUrl" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="是否默认banner"
          :label-width="formLabelWidth"
          prop="isdefault"
        >
          <el-select v-model="form.isdefault" placeholder="请选择">
            <el-option label="默认" value="1"></el-option>
            <el-option label="临时" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="线上状态"
          :label-width="formLabelWidth"
          prop="state"
        >
          <el-select v-model="form.state" placeholder="请选择">
            <el-option label="线上" value="1"></el-option>
            <el-option label="线下" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth" prop="desc">
          <el-input v-model="form.desc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="活动时间"
          :label-width="formLabelWidth"
          prop="activeDate"
        >
          <el-date-picker
            v-model="activeDate"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="timestamp"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-col :span="10">
            <el-form-item
              label="大图资源上传"
              :label-width="formLabelWidth"
              prop=""
            >
              <el-upload
                class="imgUpload"
                :action="uploadIMG"
                with-credentials
                :show-file-list="false"
                :on-success="uploadBigSuccess"
              >
                <img v-if="imageBigUrl" :src="imageBigUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item
              label="小图资源上传"
              :label-width="formLabelWidth"
              prop="imageSmallUrl"
            >
              <el-upload
                class="imgUpload"
                :action="uploadIMG"
                with-credentials
                :show-file-list="false"
                :on-success="uploadSmallSuccess"
              >
                <img v-if="imageSmallUrl" :src="imageSmallUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="deleteChange">删 除</el-button>
        <el-button @click="cancelChange">取 消</el-button>
        <el-button type="primary" @click="sureChange">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { FTApi } from "FTUtils";
import { FTMutationTypes } from "FTConstants";
import { mapGetters, mapActions } from "vuex";

const {
  SET_CURRENT_BANNER,
  GET_CURRENT_BANNER,
  SET_ALL_BANNER
} = FTMutationTypes;
export default {
  name: "FTAddInfoDialog",
  props: {
    dialogFormVisible: {
      default: false,
      type: Boolean
    }
  },
  computed: { ...mapGetters({ currentBanner: GET_CURRENT_BANNER }) },
  watch: {
    dialogFormVisible(newVal) {
      if (!newVal) {
        this.clearCurrentBanner();
        this[SET_ALL_BANNER]({ pageNo: 1 });
      }
      this.dialogVisible = newVal;
    },
    currentBanner() {
      if (this.currentBanner) {
        this.form = { ...this.form, ...this.currentBanner };
        let { jumpType, isdefault, state } = this.form;
        this.form.jumpType = jumpType.toString();
        this.form.isdefault = isdefault.toString();
        this.form.state = state.toString();
        this.imageBigUrl = this.currentBanner.bigPic;
        this.imageSmallUrl = this.currentBanner.smallPic;
        this.$set(this.activeDate, 0, this.currentBanner.beginTime);
        this.$set(this.activeDate, 1, this.currentBanner.endTime);
        this.title = "修改资源";
      }
    }
  },
  data() {
    return {
      title: "添加资源",
      imageSmallUrl: "",
      imageBigUrl: "",
      form: {
        bannername: "",
        bigPic: "",
        smallPic: "",
        jumpType: "",
        jumpUrl: "",
        isdefault: "",
        beginTime: "",
        endTime: "",
        state: "",
        ordinal: "",
        desc: ""
      },
      activeDate: [],
      formLabelWidth: "150px",
      dialogVisible: false,
      uploadIMG: "",
      rules: {
        bannername: [
          { required: true, message: "请输入标题", trigger: "blur" }
        ],
        ordinal: [{ required: true, message: "请输入序号", trigger: "blur" }],
        jumpUrl: [
          { required: true, message: "请输入跳转地址", trigger: "blur" }
        ],
        desc: [{ required: true, message: "请输入描述内容", trigger: "blur" }],
        jumpType: [
          {
            required: true,
            message: "请选择跳转类型",
            trigger: "change"
          }
        ],
        isdefault: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ],
        state: [
          {
            required: true,
            message: "请选择",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions([SET_CURRENT_BANNER, SET_ALL_BANNER]),
    cancelChange() {
      this.$emit("callback", false);
    },
    sureChange() {
      this.form.beginTime = this.activeDate[0];
      this.form.endTime = this.activeDate[1];
      for (let keys in this.form) {
        if (
          keys == "isdefault" ||
          keys == "jumpType" ||
          keys == "state" ||
          keys == "ordinal"
        )
          this.form[keys] = parseInt(this.form[keys]);
      }
      this.$refs.submitForm.validate(valid => {
        if (valid) {
          if (this.form.hasOwnProperty("id")) {
            console.log(this.form);
            FTApi.FTUpdateBanner(this.form)
              .then(res => {
                let { data } = res;
                if (data.code === 0) {
                  this.$message({ message: "修改成功", type: "success" });
                  this.cancelChange();
                } else {
                  this.$message({ message: "修改失败", type: "error" });
                }
              })
              .catch(err => {
                this.$message({ message: err, type: "error" });
              });
          } else {
            FTApi.FTAddBanner(this.form)
              .then(res => {
                let { data } = res;
                if (data.code === 0) {
                  this.$message({ message: "上传成功", type: "success" });
                  this.cancelChange();
                } else {
                  this.$message({ message: "上传失败", type: "error" });
                }
              })
              .catch(err => {
                console.log(err);
              });
          }
        }
      });
    },
    deleteChange() {
      this.$refs.submitForm.validate(valid => {
        if (valid) {
          if (this.form.hasOwnProperty("id")) {
            console.log(this.form);
            FTApi.FTDeleteBanner(this.form.id)
              .then(res => {
                let { data } = res;
                if (data.code === 0) {
                  this.$message({ message: "删除成功", type: "success" });
                  this.cancelChange();
                } else {
                  this.$message({ message: "删除失败", type: "error" });
                }
              })
              .catch(err => {
                this.$message({ message: err, type: "error" });
              });
          }
        }
      });
    },
    uploadSuccess(res, file, type) {
      switch (type) {
        case "big": {
          this.imageBigUrl = URL.createObjectURL(file.raw);
          console.log(res);
          this.form.bigPic = res.data.url;
          break;
        }
        case "small": {
          this.imageSmallUrl = URL.createObjectURL(file.raw);
          this.form.smallPic = res.data.url;
          break;
        }
      }
    },
    uploadBigSuccess(res, file) {
      this.uploadSuccess(res, file, "big");
    },
    uploadSmallSuccess(res, file) {
      this.uploadSuccess(res, file, "small");
    },
    clearCurrentBanner() {
      this.$refs.submitForm.clearValidate();
      this[SET_CURRENT_BANNER](null);
      this.form = {
        bannername: "",
        bigPic: "",
        smallPic: "",
        jumpType: "",
        jumpUrl: "",
        isdefault: "",
        beginTime: "",
        endTime: "",
        state: "",
        ordinal: "",
        desc: ""
      };
      this.imageSmallUrl = "";
      this.imageBigUrl = "";
      this.activeDate = [];
    }
  },
  mounted() {}
};
</script>

<style lang="less" module>
.container {
}
</style>
<style lang="less" scoped>
.imgUpload .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 148px;
  height: 148px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 148px;
  display: block;
}
</style>
