import Vue from "vue";
import Vuex from "vuex";
import productModule from "./productModule";
import registrationModule from "./registrationModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    productModule: productModule,
    registrationModule: registrationModule,
  },
});
