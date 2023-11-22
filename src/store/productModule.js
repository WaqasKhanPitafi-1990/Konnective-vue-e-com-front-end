export default {
  namespaced: true,
  state: {
    products: [],
    cart: [],
    wishlist: [],
    searchQuery: "",
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },

    getFilteredProducts: (state) => {
      return state.products.filter((p) =>
        p.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },

    getWishlistItems: (state) => {
      state.wishlist = JSON.parse(localStorage.getItem("wishlist"));
      return state.wishlist;
    },
    isProductInWishlist: (state) => (productId) => {
      return state.wishlist.some((product) => product._id === productId);
    },
    //cart getters
    cartSize: (state) => {
      return state.cart.reduce(
        (product, object) => product + Number(object.quantity),
        0
      );
    },
    cartTotalAmount: (state) => {
      return state.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },

    addToCart: (state, productid) => {
      let product = state.products.find((product) => product._id === productid);
      let cartProduct = state.cart.find((product) => product._id === productid);
      if (cartProduct) {
        cartProduct.quantity++;
      } else {
        state.cart.push({
          ...product,
          stock: product.quantity,
          quantity: "1",
        });
      }
    },
    deleteFromCart: (state, productId) => {
      let product = state.products.find((product) => product.id === productId);
      let cartProductIndex = state.cart.findIndex(
        (product) => product.id === productId
      );
      product.quantity = state.cart[cartProductIndex].stock;
      state.cart.splice(cartProductIndex, 1);
    },

    // add to wishlist
    addToWishlist(state, productId) {
      const product = state.products.find((p) => p._id === productId);
      if (!state.wishlist.includes(product)) {
        state.wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },

    removeFromWishlist(state, productId) {
      const index = state.wishlist.findIndex((p) => p._id === productId);
      if (index !== -1) {
        state.wishlist.splice(index, 1);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
  actions: {
    setApiData({ commit }, products) {
      commit("SET_PRODUCTS", products);
    },
    addToCart: ({ commit }, productId) => {
      console.log("pro id in state", productId);
      commit("addToCart", productId);
    },
    deleteFromCart: ({ commit }, productId) => {
      commit("deleteFromCart", productId);
    },

    addToWishlist: ({ commit }, productId) => {
      console.log("pro id in state", productId);
      commit("addToWishlist", productId);
    },

    removeFromWishlist: ({ commit }, productId) => {
      console.log("wishlist prod in state", productId);
      commit("removeFromWishlist", productId);
    },

    setSearchQuery: ({ commit }, query) => {
      commit("setSearchQuery", query);
    },
  },
};
