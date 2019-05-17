<template>
  <div>
    <el-form :model="form" size="mini" :rules="rules" ref="submitForm">
      <el-form-item label="账号" :label-width="formLabelWidth" prop="id">
        <el-input v-model="form.id" autocomplete="off" disabled></el-input>
      </el-form-item>
      <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="简介"
        v-if="_userInfo.role"
        :label-width="formLabelWidth"
        prop="pre"
      >
        <el-input v-model="form.pre" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
        <el-radio v-model="form.sex" label="0">男</el-radio>
        <el-radio v-model="form.sex" label="1">女</el-radio>
      </el-form-item>
      <el-form-item>
        <el-col :span="10">
          <el-form-item label="头像上传" :label-width="formLabelWidth" prop="">
            <el-upload
              class="imgUpload"
              :action="uploadIMG"
              :before-upload="beforeAvatarUpload"
              :show-file-list="false"
              :http-request="devUpload"
            >
              <img v-if="imageBigUrl" :src="imageBigUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <!--<el-button @click="cancelChange">取 消</el-button>-->
      <el-button type="primary" @click="sureChange">确 定</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { FTMutationTypes, FTServerApi } from "FTConstants";
import axios from "axios";

const { GET_USER_INFO, CHANGE_INFO } = FTMutationTypes;
const { HOST_ADDRESS } = FTServerApi;
export default {
  name: "FTChangeInfo",
  data() {
    return {
      formLabelWidth: "150px",
      form: {
        id: "",
        name: "",
        sex: "",
        avatar: "",
        pre: ""
      },
      imageBigUrl: "",
      uploadIMG: HOST_ADDRESS + "/user/update",
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        pre: [{ required: true, message: "请输入个人简介", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapGetters({ _userInfo: GET_USER_INFO })
  },
  watch: {
    _userInfo: {
      handler() {
        this.form = { ...this._userInfo };
        this.imageBigUrl = this._userInfo.hearderUrl;
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    ...mapActions([CHANGE_INFO]),
    sureChange() {
      this[CHANGE_INFO](this.form);
    },
    devUpload(fileObj) {
      let param = new FormData();
      param.append("file", fileObj.file);
      axios.post(this.uploadIMG, param).then(res => {
        console.log(res);
        let { data, code } = res.data;
        if (code == 200) {
          this.form.hearderUrl = `${HOST_ADDRESS}/${data.url}`;
          this.imageBigUrl = `${HOST_ADDRESS}/${data.url}`;
        }
      });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="less">
.el-radio__label {
  color: #000 !important;
}
.el-input__inner {
  color: #000 !important;
}
.avatar {
  width: 100px;
}
</style>
