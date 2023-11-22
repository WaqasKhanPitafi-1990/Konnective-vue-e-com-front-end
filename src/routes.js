import Shop from "./pages/Shop.vue";
import About from "./pages/About.vue";
import HomePage from "./pages/homePage.vue";
import Body from "./pages/Body.vue";
import productdetails from "./pages/productDetails.vue";
import shoppingCart from "./pages/shoppingCart.vue";
import deliveryDetails from "./pages/deliveryDetails.vue";
import reviewOrder from "./pages/reviewOrder.vue";
import orderComplete from "./components/orderComplete";
import wishList from "./components/wishList.vue";
import cart from "./pages/cart.vue";
import searchedProducts from "./components/searchedProducts.vue";
export default [
  {
    path: "/",
    component: Body,
    children: [
      {
        path: "/",
        component: HomePage,
        name: "homepage",
      },
      {
        path: "Shop",
        component: Shop,
        name: "shop",
      },
      {
        path: "About",
        component: About,
        name: "about",
      },
      {
        path: "/product/:id",
        component: productdetails,
        name: "details",
      },
      {
        path: "wishList",
        component: wishList,
        name: "wishlist",
      },
      {
        path: "ShoppingCart",
        component: shoppingCart,
        name: "shoppingCart",
      },
      {
        path: "DeliveryDetails",
        component: deliveryDetails,
        name: "deliveryDetails",
      },
      {
        path: "ReviewOrder",
        component: reviewOrder,
        name: "reviewOrder",
      },
      {
        path: "OrderComplete",
        component: orderComplete,
        name: "orderComplete",
      },
      {
        path: "myCart",
        component: cart,
        name: "cart",
      },
      {
        path: "searchedproducts",
        component: searchedProducts,
        name: "search",
      },
    ],
   
  },
  
];
