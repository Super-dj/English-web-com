<template>
  <div :class="$style.container">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1">
        <div slot="title" :class="$style.title">
          一、登录
        </div>
        <div :class="$style.content">1.课程登录1次记1分，每天最多计10分；</div>
        <div :class="$style.content">
          2.每台计算机不能同时登录两个学号，否则只能给一个学号计时；
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <div slot="title" :class="$style.title">
          二、视频学习
        </div>
        <div :class="$style.content">
          1. 视频学习时需要经常点击“记录学习时间”，否则不予计时；
        </div>
        <div :class="$style.content">2. 视频学习1分钟计1分；</div>
        <div :class="$style.content">
          3. 每个单元的视频可以多次学习，最多计时长度为该单元的视频总时长；
        </div>
        <div :class="$style.content">
          4. 每个单元的视频最多可记录3次，超过3次仍可观看，但不能再记录；
        </div>
        <div :class="$style.content">
          5.每个学号不能同时观看两个视频，否则只能给最后打开的视频计时。
        </div>
        <div :class="$style.content">
          6. 视频播放时，可点击“学习助手”查看该单元的测试题，论坛、学习记录等；
        </div>
      </el-collapse-item>

      <el-collapse-item name="3">
        <div slot="title" :class="$style.title">
          三、学习进度
        </div>
        <div :class="$style.content">
          1. 视频播放不流畅时，可下载课件学习；
        </div>
        <div :class="$style.content">
          2. 课件学习的计时方式与视频学习相同；
        </div>
        <div :class="$style.content">
          3.某些课程没有视频，必须使用课件学习计时；
        </div>
      </el-collapse-item>

      <el-collapse-item name="4">
        <div slot="title" :class="$style.title">
          四、论坛发帖
        </div>
        <div :class="$style.content">1.课程登录1次记1分，每天最多计10分；</div>
        <div :class="$style.content">
          2.每台计算机不能同时登录两个学号，否则只能给一个学号计时；
        </div>
      </el-collapse-item>

      <el-collapse-item name="5">
        <div slot="title" :class="$style.title">
          五、提交作业
        </div>
        <div :class="$style.content">1.课程登录1次记1分，每天最多计10分；</div>
        <div :class="$style.content">
          2.每台计算机不能同时登录两个学号，否则只能给一个学号计时；
        </div>
      </el-collapse-item>

      <el-collapse-item name="6">
        <div slot="title" :class="$style.title">
          六、测试
        </div>
        <div :class="$style.content">
          1. 测试题包含了全部考试内容，请大家认真完成每章的练习；
        </div>
        <div :class="$style.content">
          2.
          测试分为章节练习、在线测试，章节练习每做一次计10分，在线测试每次计15分；
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "FTPage8",
  data() {
    return {
      activeNames: ["0"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="less" module>
.container {
  padding: 0 14px;
  .title {
    font-size: 24px;
  }
  .content {
    font-size: 16px;
  }
}
</style>
