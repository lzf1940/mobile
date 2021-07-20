// 请求，响应拦截
import axios from "axios";
import { Toast } from "vant";
import db from "@/utils/localstorage";

let requestCount = 0;
function showLoading() {
  if (requestCount === 0) {
    Toast.loading({
      duration: 0,
      // className:'myToast',
      forbidClick: true,
      message: "加载中...",
      loadingType: "spinner",
    });
  }
  requestCount++;
}
function hideLoading() {
  if (requestCount <= 0) return;
  requestCount--;
  if (requestCount === 0) {
    Toast.clear();
  }
}

let service = axios.create({
  baseURL: db.get("SERVICE_URL", ""),
  // baseURL: "https://dev-service.z7z7z7.cn/government-server-dongtaihu",
  // baseURL:
  //   "https://www.fastmock.site/mock/1228dbf7e6e91f58b5caf6b8a692cc55/testReq",
  timeout: 10 * 1000,
});

service.interceptors.request.use(
  (config) => {
    const token = db.get("TOKEN", "");
    // console.warn("TOKEN", token);
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    // 设置公共参数 项目不需要公共参数可以注释掉
    const publicParams = {
      ts: Date.now(),
    };
    if (config.method == "post") {
      config.data = {
        ...publicParams,
        ...config.data,
      };
    } else if (config.method == "get") {
      config.params = {
        ...publicParams,
        ...config.params,
      };
    }

    showLoading();
    return config;
  },
  (err) => {
    hideLoading();
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  (response) => {
    hideLoading();
    let res = response.data;
    // console.warn(typeof(res.code));
    if (res.code == 200 || res.code == 0) {
      return Promise.resolve(res);
    }
  },
  (err) => {
    hideLoading();
    /***** 异常响应处理 *****/
    if (err.response) {
      errorHandle(err.response);
    } else {
      // 超时处理
      if (JSON.stringify(err).includes("timeout")) {
        Toast.fail("服务器响应超时");
      }
      Toast.fail("连接服务器失败");
    }

    return Promise.reject(err);
  }
);

//***** 错误处理函数  *****/
function errorHandle({ status }) {
  // 根据响应码错误处理
  switch (status) {
    case 400:
      Toast.fail("错误请求");
      break;
    case 401:
      Toast.fail("未授权，请重新登录");
      // window.location.hash = "/401";
      break;
    case 403:
      Toast.fail("拒绝访问");
      break;
    case 404:
      Toast.fail("请求错误,未找到该资源");
      // window.location.hash = "/404";
      break;
    case 405:
      Toast.fail("请求方法未允许");
      break;
    case 408:
      Toast.fail("请求超时");
      break;
    case 500:
      Toast.fail("服务器端出错");
      // window.location.hash = "/500";
      break;
    case 501:
      Toast.fail("网络未实现");
      break;
    case 502:
      Toast.fail("网络错误");
      break;
    case 503:
      Toast.fail("服务不可用");
      break;
    case 504:
      Toast.fail("网络超时");
      break;
    case 505:
      Toast.fail("http版本不支持该请求");
      break;
    default:
      Toast.fail(`连接错误${status}`);
  }
}

export default service;
