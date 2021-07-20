import db from "@/utils/localstorage";

export default {
  namespaced: true,
  state: {
    token: db.get("TOKEN", ""),
    platform: db.get("PLATFORM", ""),
    serviceUrl: db.get("SERVICE_URL", ""),
  },
  mutations: {
    setPlatform(state, val) {
      db.save("PLATFORM", val);
      state.platform = val;
    },
    setToken(state, val) {
      db.save("TOKEN", val);
      state.token = val;
    },
    setServiceUrl(state, val) {
      db.save("SERVICE_URL", val);
      state.serviceUrl = val;
    },
  },
};
