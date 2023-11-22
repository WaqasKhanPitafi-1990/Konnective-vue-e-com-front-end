// if (response.data.success) {
//     // Login successful, update the Vuex store with user and token
//     this.loginUser({
//         user: response.data.user,
//         token: response.data.token,
//     });
// .then((result) => {
// this.loginData = result.data;
// console.log(this.loginData);

// const { accessToken, user } = result.data
// window.localStorage.setItem('jwt', accessToken)
// window.localStorage.setItem('userData', JSON.stringify(user))
// const res2 = this.axios.get(`http://localhost:1337/api/users/${user.id}?populate=*`, {
//     headers: {
//         Authorization: `Bearer ${jwt}`,
//     }
// })

// if (this.userLogin) {
//     this.$router.push('Shop');
//     this.closeModal();
// }

//code for jwt Access Token
// } catch(error) {
//     this.error = true
//     this.password = ''
// }
// }

// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    // users: [],
    currentUser: null,

    token: localStorage.getItem("token") || null,
  },
  getters: {
    isLoggedIn: (state) => state.token,
    getCurrentUser: (state) => state.currentUser,
  },

  mutations: {
    setUser(state, user) {
      state.currentUser = user;
    },
    registerUsers(state, { user, token }) {
      // state.push(user);
      state.currentUser = user;
      state.token = token;
      console.log(user, token, "in store");
      localStorage.setItem("token", token);
      localStorage.setItem("currentUser", JSON.stringify(user));
    },
    loginUser(state, { user, token }) {
      state.currentUser = user;
      state.token = token;
      localStorage.setItem("token", token);
      localStorage.setItem("currentUser", JSON.stringify(user));
    },
    logoutUser(state) {
      state.currentUser = null;
      state.token = null;
      localStorage.removeItem("token");
      console.log(state.token, "token is empty");
    },

  },
  actions: {

    loadUserAction({ commit }, user) {
      commit("setUser", user);
    },
    async registerUserAction({ commit }, { user, token }) {
      commit("registerUsers", { user, token });
    },
    async loginUserAction({ commit }, { user, token }) {
      commit("loginUser", { user, token });
    },

    async logoutUser({ commit }) {
      commit("logoutUser");
    },
  },
};
