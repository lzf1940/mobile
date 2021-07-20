<template>
  <div class="home">
    <div class="swipe-padding">
      <van-swipe class="swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item>这是tabbar</van-swipe-item>
        <van-swipe-item>这是tabbar</van-swipe-item>
        <van-swipe-item>这是tabbar</van-swipe-item>
        <van-swipe-item>这是tabbar</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 0,
    };
  },
  components: {},
  mounted() {
    //console.warn("主页tab");
  },
};
</script>

<style lang="less" scoped>
.swipe-padding {
  padding: 10px 10px;
}
.swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px !important;
  text-align: center;
  background-color: #39a9ed;
}
</style>
