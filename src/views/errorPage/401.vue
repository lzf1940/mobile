<!-- 401 -->
<template>
  <div class="content">
    <van-image lazy-load :src="loadLocalImg('401.gif')">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <!-- 提示信息 -->
    <p class="tip pt-3">未授权，请重新登录...</p>
    <!-- <div class="btn-warp">
      <van-button class="btn" round type="info">返回首页</van-button>
    </div> -->
  </div>
</template>

<script>
import { loadLocalImg } from "utils/common";
export default {
  name: "error401",
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
  background: #fff;
  display: flex;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 150px;
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
