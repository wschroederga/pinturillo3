import Vue from "vue";
import Vuex from "vuex";
import io from "socket.io-client";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    socket: io("localhost:3000"),
    localPlayer: null
  },
  mutations: {
    set_localplayer(state, payload) {
      state.localPlayer = payload.localPlayer;
    }
  },
  actions: {
    create_room({ state }, payload) {}
  }
});