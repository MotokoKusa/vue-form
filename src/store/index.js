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
      state.message = message;
    },
  },
  actions: {
    async sendInfoFromForm(ctx, payload) {
      let urlApi = "http://hh.autodrive-agency.ru/test-tasks/front/task-7/";
      const EMPTY_DATA = "Не удалось отправить форму";
      try {
        const response = await axios.post(urlApi, payload);
        if (response.data) {
          ctx.commit("infoFromForm", response.data);
        } else {
          ctx.commit("infoFromForm", EMPTY_DATA);
        }
      } catch (e) {
        if (e.response.data) {
          const error = e.response.data;
          ctx.commit("infoFromForm", error);
        } else {
          ctx.commit("infoFromForm", EMPTY_DATA);
        }
      }
    },
  },
  modules: {},
});
