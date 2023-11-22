import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueI18n from "vue-i18n";
import "./assets/styles.css";
// import axios   from "axios";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import en from "./locales/en";
import store from "./store/store";
// import store from './store/store.js'
// import registration from "./store/registration";
import routes from "./routes";
import Vuex from "vuex";
// Vue.prototype = axios;
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(Vuex);
Vue.config.productionTip = false;
const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: { en },
});
const router = new VueRouter({
  mode: "history",
  // routes:routes
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

// Load user data from local storage
const userJSON = localStorage.getItem("currentUser");
if (userJSON) {
  const userData = JSON.parse(userJSON);
  store.dispatch("registrationModule/loadUserAction", userData);
}

new Vue({
  i18n,
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
