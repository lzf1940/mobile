<template>
  <div class="layoutContainer">
    <!-- 子路由视图 -->
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5" to="/todo"
        >待办</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="less" scoped></style>
