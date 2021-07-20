<!-- 404 -->
<template>
  <div class="content">
    <van-image lazy-load :src="loadLocalImg('404.png')">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <!-- 提示信息 -->
    <p class="tip pt-3">您访问的页面不存在...</p>
    <!-- <div class="btn-warp">
      <van-button class="btn" round type="info">返回首页</van-button>
    </div> -->
  </div>
</template>

<script>
import { loadLocalImg } from "utils/common";
export default {
  name: "error404",
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    loadLocalImg,
  },
};
</script>

<style></style>

<style lang="less" scoped>
.content {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .van-image__img {
    max-width: 90%;
  }
  .tip {
    font-size: 18px;
    color: #1b2841;
    letter-spacing: 2px;
  }
  .btn-warp {
    width: 100%;
    text-align: center;
  }
  .btn.van-button {
    width: 50%;
  }
}
</style>
