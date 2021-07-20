import db from "@/utils/localstorage";

export default {
  namespaced: true,
  state: {
    user: db.get("USER") || null,
    has: {
      add: false,
      deletes: false,
    },
  },
  mutations: {
    setUser(state, val) {
      db.save("USER", val);
      state.user = val;
    },
    setHas(state, val) {
      db.save("HAS", val);
      state.has = val;
    },
  },
};
