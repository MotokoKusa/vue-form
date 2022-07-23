import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listTowns: [
      {
        id: 1,
        name: "Москва",
      },
      {
        id: 2,
        name: "Санкт-Петербург",
      },
      {
        id: 3,
        name: "Казань",
      },
    ],
    sendObj: [],
    popupForm: {
      value: null,
      visible: false,
    },
    popupMessage: false,
    message: "",
  },
  getters: {
    getListTowns(state) {
      return state.listTowns;
    },
  },
  mutations: {
    infoFromForm(state, message) {
      state.message = message.data;
    },
  },
  actions: {
    async sendInfoFromForm(ctx, payload) {
      let urlApi = "http://hh.autodrive-agency.ru/test-tasks/front/task-7/";
      try {
        const message = await axios.post(urlApi, payload);
        ctx.commit("infoFromForm", message);
      } catch (e) {
        const error = e.response;
        ctx.commit("infoFromForm", error);
      }
    },
  },
  modules: {},
});
