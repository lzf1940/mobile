<template>
  <div class="home">
    <div class="swipe-padding">
      <van-swipe class="swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item>这是首页</van-swipe-item>
        <van-swipe-item>这是首页</van-swipe-item>
        <van-swipe-item>这是首页</van-swipe-item>
        <van-swipe-item>这是首页</van-swipe-item>
      </van-swipe>
    </div>
    <no-content></no-content>
    <van-button v-has="add" type="primary">新增</van-button>
    <van-button v-has="deletes" type="info">删除</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import indexReq from "../request/api/index";
import db from "utils/localstorage";
// import directive
import has from "@/directives/has";
export default {
  name: "Home",
  data() {
    return {
      add: "add",
      deletes: "deletes",
      params: {
        token: "setToken",
        platform: "setPlatform",
        serviceUrl: "setServiceUrl",
      },
    };
  },
  components: {},
  directives: { has },
  created() {
    // console.warn(process.env);
    /***  vuex日志测试  ***/
    this.$store.commit("common/setPlatform", "Platform");
    this.$store.commit("user/setHas", {
      add: true,
      deletes: true,
    });

    // 平台类型-platform token值-token serviceUrl-后台服务地址
    this.getParams(this.params);
    // console.warn(this.$store.state.common.platform);
    console.warn(db.get("PLATFORM", ""));
  },
  mounted() {
    // console.warn("首页");
    /***  请求示例  ***/
    indexReq
      .indexGet({})
      .then((res) => {
        console.log("mockGet", res);
      })
      .catch((err) => {
        console.log(err);
      });
    indexReq
      .indexPost({})
      .then((res) => {
        console.log("mockPost", res);
      })
      .catch((err) => {
        console.log(err);
      });
    // indexReq
    //   .myapps({})
    //   .then((res) => {
    //     //console.log("get", res);
    //   })
    //   .catch((err) => {
    //     //console.log(err);
    //   });
    // indexReq
    //   .userInfo({})
    //   .then((res) => {
    //     //console.log("post", res);
    //   })
    //   .catch((err) => {
    //     //console.log(err);
    //   });
  },
  methods: {
    getParams(params) {
      for (let key in params) {
        let param = this.$route.query[key];
        if (param) {
          this.$store.commit(`common/${params[key]}`, param);
        }
        // console.dir(this.$store.state.common);
      }
    },
  },
};
</script>
<style type="text/css">
/* 引入css  */
/* @import "../assets/css/xxx.css"; */
</style>
<style lang="less" scoped>
.swipe-padding {
  padding: 10px 10px;
}

.van-button--normal:not(:last-child) {
  margin-right: 16px;
}
.swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px !important;
  text-align: center;
  background-color: #39a9ed;
}
</style>
