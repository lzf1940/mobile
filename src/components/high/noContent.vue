<template>
  <van-empty
    class="custom-image"
    :image="require('assets/image/noContent.png')"
    description="暂无内容"
  >
  </van-empty>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
/deep/ .custom-image {
  .van-empty__image {
    width: 90px;
    height: 90px;
  }
}
/deep/ .van-empty__description {
  font-size: 16px;
  color: #000000;
  letter-spacing: 2px;
}
</style>
