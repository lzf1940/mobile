const db = {
  save(key, value) {
    let projectName = process.env.VUE_APP_PROJECT_NAME;
    localStorage.setItem(projectName + "_" + key, JSON.stringify(value));
  },
  get(key, defaultValue = {}) {
    let projectName = process.env.VUE_APP_PROJECT_NAME;
    try {
      return (
        JSON.parse(localStorage.getItem(projectName + "_" + key)) ||
        defaultValue
      );
    } catch (err) {
      return defaultValue;
    }
  },
  remove(key) {
    let projectName = process.env.VUE_APP_PROJECT_NAME;
    localStorage.removeItem(projectName + "_" + key);
  },
  clear() {
    // 多个前端项目能在同一个域下独立使用,清除缓存时需要区分开
    let projectName = process.env.VUE_APP_PROJECT_NAME;
    for (const key in localStorage) {
      if (key.indexOf(projectName) !== -1) {
        localStorage.removeItem(key);
      }
    }
  },
};

export default db;
