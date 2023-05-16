import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      projects: [],
    };
  },
  getters: {
    allProjects(state) {
      return state.projects;
    },
  },
  mutations: {
    sortBy(state, prop) {
      state.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },

    getProjects(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    sortBy(context, prop) {
      context.commit("sortBy", prop);
    },
    getProjects(context, projects) {
      context.commit("getProjects", projects);
    },
  },
});

export default store;
