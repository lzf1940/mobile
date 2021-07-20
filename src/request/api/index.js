import { get, post } from "../common";

// fastmock接口测试
function indexGet(data) {
  return get("/get", data);
}
function indexPost(data) {
  // return new Promise((resolve, reject) => {
  //   post(url, data).then((res)=>{
  //     resolve(res)
  //   }).catch((err)=>{
  //     reject(err)
  //   });
  // });
  return post("/post", data);
}

// 项目接口测试
function myapps(data) {
  return get("/open/worktable/myapps", data);
}
function userInfo(data) {
  return post("/oauth/client/authUser/details", data);
}

export default { indexGet, indexPost, myapps, userInfo };
