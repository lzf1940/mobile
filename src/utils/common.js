// 排序
const arrSort = (arr, field) => {
  return arr.sort((a, b) => a[field] - b[field]);
};

// 加载本地图片
const loadLocalImg = (imgName) => {
  return require("@/assets/image/" + imgName);
};

// 随机生成随机整数
const randomFloor = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

// 数组对象根据某个参数，去重
const arrReduce = (arr, field) => {
  let obj = {}; // 用来存放已经出现过的id
  return arr.reduce((pre, cur) => {
    if (!obj[cur[field]]) {
      // obj没有cur的id则放入数组
      obj[cur[field]] = true;
      return [...pre, cur];
    } else {
      return pre;
    }
  }, []);
};

// 生产GUID
const creatGuid = () => {
  return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export { arrReduce, arrSort, creatGuid, randomFloor, loadLocalImg };
