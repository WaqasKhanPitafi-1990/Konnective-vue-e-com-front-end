<template>
    <div class="container">
        <b-row class="nav-row">
            <b-col class="logo-col" lg="1" sm="2" md="2">
                <div class="m-logo">
                    <h1 style="cursor:pointer" @click="$router.push('/')">{{ $t("nav-title") }}</h1>
                </div>
            </b-col>
            <b-col class="main-nav-wrapper" sm="12" lg="6" md="2">
                <div class="toggler">
                    <template>
                        <b-row class="slider-row">
                            <b-col class="main-nav" lg="3" sm="6" md="4">
                                <b-button class="ham-button" v-b-toggle.sidebar-1> <i
                                        class=" fa fa-regular fa-bars"></i></b-button>

                                <b-sidebar class="side-logo " id="sidebar-1" text-variant="success" title="KONN">
                                    <div class="side-icons">
                                        <div class="language">
                                            <div class="flag-icon">
                                                <svg class="uk-icon" xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="29.561"
                                                    height="17.243" viewBox="0 0 29.561 17.243">
                                                    <defs>
                                                        <clipPath id="clip-path">
                                                            <rect id="Rectangle_63" data-name="Rectangle 63" width="29.561"
                                                                height="17.243" fill="none" />
                                                        </clipPath>
                                                    </defs>
                                                    <g id="UNITED_KINGDOM" data-name="UNITED KINGDOM"
                                                        transform="translate(2385.67 -3275.351)">
                                                        <g id="Group_58" data-name="Group 58"
                                                            transform="translate(-2385.67 3275.351)">
                                                            <g id="Group_57" data-name="Group 57">
                                                                <g id="Group_56" data-name="Group 56"
                                                                    clip-path="url(#clip-path)">
                                                                    <rect id="Rectangle_62" data-name="Rectangle 62"
                                                                        width="29.561" height="17.243" fill="#fff" />
                                                                    <path id="Path_24" data-name="Path 24"
                                                                        d="M-2349.55,3281.585l9.768-5.468v-.767h-.674l-11.137,6.234Z"
                                                                        transform="translate(2369.343 -3275.351)"
                                                                        fill="#db1e34" />
                                                                    <path id="Path_25" data-name="Path 25"
                                                                        d="M-2348.556,3297.15l10.229,5.724v-1.144l-8.185-4.58Z"
                                                                        transform="translate(2367.888 -3285.795)"
                                                                        fill="#db1e34" />
                                                                    <path id="Path_26" data-name="Path 26"
                                                                        d="M-2385.67,3276.818l8.75,4.921h2.044l-10.794-6.066Z"
                                                                        transform="translate(2385.67 -3275.505)"
                                                                        fill="#db1e34" />
                                                                    <path id="Path_27" data-name="Path 27"
                                                                        d="M-2375.339,3297.15l-10.331,5.788v.1h1.867l10.51-5.888Z"
                                                                        transform="translate(2385.67 -3285.795)"
                                                                        fill="#db1e34" />
                                                                    <path id="Path_28" data-name="Path 28"
                                                                        d="M-2342.323,3275.351h-10.35v5.8Z"
                                                                        transform="translate(2369.86 -3275.351)"
                                                                        fill="#2a3076" />
                                                                    <path id="Path_29" data-name="Path 29"
                                                                        d="M-2370.928,3275.351h-10.309l10.309,5.8Z"
                                                                        transform="translate(2383.546 -3275.351)"
                                                                        fill="#2a3076" />
                                                                    <path id="Path_30" data-name="Path 30"
                                                                        d="M-2335.376,3283.681v-3.956l-7.021,3.956Z"
                                                                        transform="translate(2364.937 -3277.447)"
                                                                        fill="#2a3076" />
                                                                    <path id="Path_31" data-name="Path 31"
                                                                        d="M-2335.376,3301.063v-3.914h-7.021Z"
                                                                        transform="translate(2364.937 -3285.795)"
                                                                        fill="#2a3076" />
                                                                    <path id="Path_32" data-name="Path 32"
                                                                        d="M-2380.114,3303.443h9.724v-5.449Z"
                                                                        transform="translate(2383.008 -3286.2)"
                                                                        fill="#2a3076" />
                                                                    <path id="Path_33" data-name="Path 33"
                                                                        d="M-2352.672,3303.443h9.754l-9.754-5.449Z"
                                                                        transform="translate(2369.86 -3286.2)"
                                                                        fill="#2a3076" />
                                                                    <path id="Path_34" data-name="Path 34"
                                                                        d="M-2385.67,3297.15v4.09l7.266-4.09Z"
                                                                        transform="translate(2385.67 -3285.795)"
                                                                        fill="#2a3076" />
                                                                    <path id="Path_35" data-name="Path 35"
                                                                        d="M-2385.67,3283.552h7.266l-7.266-4.1Z"
                                                                        transform="translate(2385.67 -3277.318)"
                                                                        fill="#2a3076" />
                                                                    <path id="Path_36" data-name="Path 36"
                                                                        d="M-2372.138,3275.351v7.258h-13.532v3.074h13.532v6.91h2.741v-6.91h13.287v-3.074H-2369.4v-7.258Z"
                                                                        transform="translate(2385.67 -3275.351)"
                                                                        fill="#db1e34" />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <span class="text-eng">{{ $t("eng-title") }}</span>
                                            <div class="dropdown">
                                                <b-dropdown id="dropdown-right" variant="none">
                                                    <b-dropdown-item href="#">English</b-dropdown-item>
                                                    <b-dropdown-item href="#">Urdu</b-dropdown-item>
                                                </b-dropdown>
                                            </div>

                                        </div>
                                        <div class="wish-list">
                                            <svg class="wishlist-svg" xmlns="http://www.w3.org/2000/svg" width="33.558"
                                                height="28.508" viewBox="0 0 33.558 30.508">
                                                <path id="heart-love-like"
                                                    d="M16.43,30.135,4.408,17.615A8.8,8.8,0,0,1,4.871,5.061,8.01,8.01,0,0,1,16.8,6.425l.479.665.479-.665A8.01,8.01,0,0,1,29.685,5.061a8.8,8.8,0,0,1,.463,12.554L18.125,30.135A1.165,1.165,0,0,1,16.43,30.135Z"
                                                    transform="translate(-0.499 -1.492)" fill="none" stroke="#787878"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                            </svg>
                                            <span>{{ $t("nav-wishlist") }}</span>
                                        </div>
                                        <div class="v-line"></div>
                                        <div class="cart-icon">
                                            <div class="cart-counts">
                                                <div class="cart-svg">
                                                    <svg class="carts" xmlns="http://www.w3.org/2000/svg" width="43.662"
                                                        margin-top="10px" height="43" viewBox="0 0 33.662 30">
                                                        <g id="shopping-cart" transform="translate(1.5 1.5)">
                                                            <circle id="Ellipse_75" data-name="Ellipse 75" cx="1.5" cy="1.5"
                                                                r="1.5" transform="translate(11 24)" fill="none"
                                                                stroke="#787878" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="3" />
                                                            <circle id="Ellipse_76" data-name="Ellipse 76" cx="1.5" cy="1.5"
                                                                r="1.5" transform="translate(23 24)" fill="none"
                                                                stroke="#787878" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="3" />
                                                            <path id="Path_397" data-name="Path 397"
                                                                d="M2,3H7.315L8.344,7.556l2.553,11.3a3.034,3.034,0,0,0,2.962,2.365H26.9a3.037,3.037,0,0,0,2.965-2.378L32.372,7.556"
                                                                transform="translate(-2 -3)" fill="none" stroke="#787878"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="3" />
                                                            <path id="Path_398" data-name="Path 398" d="M30.038,6H6.5"
                                                                transform="translate(0.334 -1.444)" fill="none"
                                                                stroke="#787878" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="3" />
                                                        </g>
                                                    </svg>
                                                    <span class="cart-count" id="dropdown-right" variant="none">
                                                        <span v-if="isLoggedIn" href="#">{{ cartSize }}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="cart-price">
                                                <span>{{ $t("nav-cart") }}</span>

                                                <div class="dropdown">
                                                    <span v-if="isLoggedIn" class="cart-amount">{{ cartTotalAmount }}</span>
                                                    <div>
                                                        <b-dropdown v-if="isLoggedIn" id="dropdown-dropright" dropright t
                                                            variant="none">
                                                            <div v-if="!cartSize" class="alert alert-secondary my-5"
                                                                role="alert">
                                                                Cart is empty! Please add some products.
                                                            </div>
                                                            <b-dropdown-item class="product-dropdown" v-for="item in cart"
                                                                :key="item._id" href="#">
                                                                <b-row class="main-row">

                                                                    <b-col class="prod-image" sm="3" md="3 lg=4">
                                                                        <img :src="imageUrl + item.thumbnailImage"
                                                                            alt="Image" img-top tag="article" />
                                                                    </b-col>
                                                                    <b-col class="prod-quantity" sm="7" md="7" lg="6">
                                                                        <span class="prod-name">{{ item.name }}</span>
                                                                        <span class="prod-price">
                                                                            {{ item.price }}
                                                                        </span>
                                                                        <span class="prod-quan">
                                                                            Quantity :{{ item.quantity }}
                                                                        </span>
                                                                    </b-col>
                                                                    <b-col class="del-main" sm="2" md="2" lg="2">
                                                                        <span class="delete-prod"
                                                                            @click="deleteFromCart(item.id)">X</span>
                                                                    </b-col>
                                                                </b-row>
                                                            </b-dropdown-item>
                                                        </b-dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slider-navbar">

                                        <b-nav>
                                            <span class="mlogged-user" v-if="isLoggedIn">
                                                {{ getCurrentUser.name }}
                                            </span>
                                            <b-nav-item class="nav-link">
                                                <router-link class="r-link" :to="{ name: 'homepage' }">{{ $t("nav-home")
                                                }}</router-link>
                                                <!-- <hr class="underline"> -->
                                            </b-nav-item>
                                            <b-nav-item v-if="!isLoggedIn" class="registration">
                                                <div class="login-button">
                                                    <!-- <div class="login-reg"> -->
                                                    <span class="login-text">
                                                        <b-button class="modal-button" v-b-modal.modal>
                                                            {{ $t("sign-in")

                                                            }}
                                                            <!-- <loginPage /> -->
                                                        </b-button>
                                                        <span class="slash">/</span>
                                                        <span class="signup-text">
                                                            <b-button class="modal-buttonr" v-b-modal.modal-2>
                                                                {{ $t("register") }}
                                                                <!-- <signupPage /> -->
                                                            </b-button>
                                                        </span>
                                                    </span>
                                                    <!-- </div> -->
                                                </div>
                                            </b-nav-item>

                                            <b-nav-item class="nav-link">
                                                <router-link class="r-link" :to="{ name: 'shop' }">{{ $t("nav-shop")
                                                }}</router-link>
                                            </b-nav-item>
                                            <!-- <b-nav-item class="nav-link">
                                                <router-link class="r-link" :to="{ name: 'search' }">Searched Page</router-link>
                                            </b-nav-item> -->
                                            <b-nav-item class="nav-link">
                                                <router-link class="r-link" :to="{ name: 'about' }">{{ $t("nav-about")
                                                }}</router-link>
                                            </b-nav-item>
                                            <b-nav-item class="nav-link">
                                                <router-link class="r-link" :to="{ name: 'shoppingCart' }">
                                                    Cart</router-link>
                                            </b-nav-item>

                                        </b-nav>
                                    </div>

                                </b-sidebar>
                                <div class="s-logo">
                                    <h1 style="cursor:pointer" @click="$router.push('/')">{{ $t("nav-title") }}</h1>
                                </div>
                            </b-col>
                            <b-col class="s-icon-col" lg="6" sm="6" md="6">
                                <div class="search-main">
                                    <b-form-input class="searchBar" list="my-list-id" v-model="searchQuery"
                                        @input="getSearch" @keyup.enter="performSearch" placeholder="Search">
                                    </b-form-input>
                                    <i class="fa fa-search search-icon" @click="performSearch" aria-hidden="true"></i>
                                    <datalist id="my-list-id" v-if="this.suggestions.length > 0">
                                        <option>Manual Option</option>
                                        <option v-for="item in this.suggestions" :key="item">{{ item }}</option>
                                    </datalist>
                                </div>


                            </b-col>
                        </b-row>
                    </template>
                </div>
                <div class="navbar">
                    <b-nav>
                        <b-nav-item class="nav-link" v-for="(item, index) in navItems" :key="index">
                            <router-link class="r-link" v-if="!(item.text === 'Cart' && !isLoggedIn)" :to="item.to"
                                :class="{ active: isActive(item.to) }" @click="handleChange">{{ item.text
                                }}</router-link>
                        </b-nav-item>

                        <!-- <b-nav-item class="nav-link">
                            <router-link class="r-link" :to="{ name: 'homepage' }">{{ $t("nav-home")
                            }}</router-link> -->
                        <!-- <hr class="underline"> -->
                        <!-- </b-nav-item> -->
                        <!-- <b-nav-item class="nav-link">
                            <router-link class="r-link" :to="{ name: 'shop' }">{{ $t("nav-shop")
                            }}</router-link>
                        </b-nav-item> -->
                        <!-- <b-nav-item class="nav-link">
                            <router-link class="r-link" :to="{ name: 'about' }">{{ $t("nav-about")
                            }}</router-link>

                        </b-nav-item>
                        <b-nav-item class="nav-link">
                            <router-link class="r-link" :to="{ name: 'shoppingCart' }">Shopping Cart</router-link>
                        </b-nav-item> -->

                        <!-- <b-nav-item class="nav-link"> -->
                        <!-- <router-link class="r-link" :to="{ name: 'wishlist' }">wishlist</router-link> -->
                        <!-- </b-nav-item> -->

                    </b-nav>
                </div>
            </b-col>
            <b-col class="navs-icons" lg="5" sm="3" md="8">
                <div class="navbar-icons">
                    <div class="w-icons">
                        <div>
                            <div class="search-main">
                                <b-form-input class="searchBar" list="my-list-id" v-model="searchQuery" @input="getSearch"
                                    @keyup.enter="performSearch" placeholder="Search">

                                </b-form-input>
                                <i class="fa fa-search search-icon" @click="performSearch" aria-hidden="true"></i>

                                <datalist id="my-list-id" v-if="this.suggestions.length > 0">
                                    <option v-for="item in this.suggestions" :key="item">{{ item }}</option>
                                </datalist>
                                <!-- <i class="fa fal fa-search"></i> -->
                            </div>
                        </div>

                        <div class="wish-list">
                            <svg class="wishlist-svg" xmlns="http://www.w3.org/2000/svg" width="33.558" height="28.508"
                                viewBox="0 0 33.558 30.508">
                                <path id="heart-love-like"
                                    d="M16.43,30.135,4.408,17.615A8.8,8.8,0,0,1,4.871,5.061,8.01,8.01,0,0,1,16.8,6.425l.479.665.479-.665A8.01,8.01,0,0,1,29.685,5.061a8.8,8.8,0,0,1,.463,12.554L18.125,30.135A1.165,1.165,0,0,1,16.43,30.135Z"
                                    transform="translate(-0.499 -1.492)" fill="none" stroke="#787878" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="3" />
                            </svg>
                            <span> <router-link class="r-link" exact-active-class="selected"
                                    exact-active-style="{ backgroundColor: '#00FF00', color: '#729F28' }"
                                    :to="{ name: 'wishlist' }">Wishlist</router-link></span>
                        </div>
                        <div class="v-line"></div>
                        <div class="cart-icon">
                            <div class="cart-counts">
                                <div class="cart-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33.662" margin-top="10px" height="43"
                                        viewBox="0 0 33.662 30">
                                        <g id="shopping-cart" transform="translate(1.5 1.5)">
                                            <circle id="Ellipse_75" data-name="Ellipse 75" cx="1.5" cy="1.5" r="1.5"
                                                transform="translate(11 24)" fill="none" stroke="#787878"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                            <circle id="Ellipse_76" data-name="Ellipse 76" cx="1.5" cy="1.5" r="1.5"
                                                transform="translate(23 24)" fill="none" stroke="#787878"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                            <path id="Path_397" data-name="Path 397"
                                                d="M2,3H7.315L8.344,7.556l2.553,11.3a3.034,3.034,0,0,0,2.962,2.365H26.9a3.037,3.037,0,0,0,2.965-2.378L32.372,7.556"
                                                transform="translate(-2 -3)" fill="none" stroke="#787878"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                            <path id="Path_398" data-name="Path 398" d="M30.038,6H6.5"
                                                transform="translate(0.334 -1.444)" fill="none" stroke="#787878"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                        </g>
                                    </svg>
                                    <span v-if="isLoggedIn" class="cart-count" id="dropdown-right" variant="none">
                                        <span href="#">{{ cartSize }}</span>
                                    </span>
                                </div>
                            </div>
                            <div class="cart-price">
                                <span>{{ $t("nav-cart") }}</span>
                                <div class="dropdown">
                                    <span v-if="isLoggedIn" class="cart-amount">{{ cartTotalAmount }}</span>
                                    <div>
                                        <b-dropdown id="dropdown-dropleft" dropleft variant="none">
                                            <div v-if="!cartSize && !isLoggedIn" class="alert alert-secondary my-5"
                                                role="alert">
                                                Cart is empty! Please add some products.
                                            </div>
                                            <b-dropdown-item v-show="isLoggedIn" class="product-dropdown"
                                                v-for="item in cart" :key="item._id" href="#">
                                                <b-row class="main-row">

                                                    <b-col class="prod-image" lg="4" sm="1" md="3">
                                                        <img class="cart-image" :src="imageUrl + item.thumbnailImage"
                                                            alt="Image" img-top tag="article" />
                                                    </b-col>
                                                    <b-col class="prod-quantity" lg="6" sm="9" md="7">
                                                        <span class="prod-name">{{ item.name }}</span>
                                                        <span class="prod-price">
                                                            {{ item.price }}
                                                        </span>
                                                        <span class="prod-quan">
                                                            Quantity :{{ item.quantity }}
                                                        </span>
                                                    </b-col>
                                                    <b-col class="del-main" lg="2" sm="3" md="2">
                                                        <span class="delete-prod" @click="deleteFromCart(item.id)">x</span>
                                                    </b-col>
                                                </b-row>
                                            </b-dropdown-item>
                                        </b-dropdown>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <Pageloader :isLoading="isLoading" />
                    </div>
                    <div>

                    </div>
                </div>
            </b-col>
        </b-row>

    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Pageloader from './Pageloader.vue';

export default {
    data() {
        return {
            imageUrl: "",
            searchQuery: "",
            isLoading: false,
            suggestions: [],
            navItems: [
                { text: 'Home', to: '/' },
                { text: 'Shop', to: '/shop' },
                { text: 'About', to: '/about' },
                { text: 'Cart', to: '/shoppingCart' },
            ]
        }
    },

    computed: {
        ...mapGetters("productModule", ['cartSize', 'cartTotalAmount', 'getFilteredProducts']),
        ...mapGetters("registrationModule", ['isLoggedIn', 'getCurrentUser']),
        ...mapState("productModule", ['cart', 'products']),

    },
    methods: {
        handleChange() {
            this.isLoading = true;
        },
        beforeRouteUpdate() {
            this.isLoading = false;
            // next();
        },
        isActive(route) {
            return this.$route.path === route;

        },

        ...mapActions('productModule', ['setSearchQuery']),
        deleteFromCart(id) {
            this.$store.dispatch('productModule/deleteFromCart', id);
        },

        getSearch() {
            this.setSearchQuery(this.searchQuery);
            this.suggestions = this.getFilteredProducts
                .filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
                .map(product => product.name);
        },
        performSearch() {
            if (this.searchQuery) {
                if (window.location.pathname != '/searchedproducts')
                    this.$router.push(`/searchedproducts`);
            }
        }

    },
    components: {
        Pageloader
    },
    mounted() {
        this.imageUrl = process.env.VUE_APP_API_BASE_URL + 'api'
    },
}
</script>

<style scoped>
.navbar .nav-item .router-link-exact-active {
    border-bottom: 2px solid #729F28;
    padding-bottom: 0.2rem;
    color: #729F28;
    font-weight: bold;
}

.navbar {
    display: flex;
}

.wish-list {
    display: flex;
    flex-direction: column;
    color: #787878;
    font-size: 14px;
}

.selected {
    color: #729F28 !important;
    /* background: red; */
    font-weight: bold;

}

.prod-quantity {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.prod-name {
    font-size: 16px;
}

.m-logo {
    display: flex;
    padding-top: 16px;
    justify-content: center;
    color: var(--unnamed-color-729f28);
    font: normal normal bold 59px/74px SF Arch Rival;
    letter-spacing: 0px;
    color: #729F28;
}

.alert {
    width: 400px;
}

.nav-link {
    color: black;
    text-decoration: none;

}

.cart-image {

    width: 120px;
    height: 70px;

}

.prod-price {
    color: #729F28;
}

.delete-prod {
    color: red;
    display: flex;
    font-size: 25px;
    justify-content: center;
    align-items: center;
}

.prod-quan {
    color: #33333396;
}

.r-link {
    color: black;
    text-decoration: none;
}

.v-line {
    border-left: 1px solid #787878;
    height: 36px;
    margin-top: 10px;
}

.cart-counts {
    position: relative;
}

.cart-count {
    position: absolute;
    right: 0%;
    bottom: 27px;
    border: 1px solid #729F28;
    border-radius: 50%;
    color: white;
    background: #729F28;
    font-size: 10px;
    padding: 3px;
}

#sidebar-1 {
    color: #729F28;
    ;
}

.del-main {
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar-icons {
    display: flex;
    margin-top: 1rem;
    gap: 3rem;
}

.v-line {
    border-left: 1px solid #787878;
    height: 40px;
}

.search-icon {
    position: ABSOLUTE;
    /* bottom: 23%;
    left: 84%; */
    top: 1.3rem;
    font-size: 24px;
    cursor: pointer;
    color: gray;
}

.search-main {
    position: relative;
    width: 100%;
    border: 1px solid gray;
    border-radius: 6px;
}

.searchBar:focus {
    outline: red !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
}

.searchBar {

    position: relative;
    width: 85%;
    border: none;

}

.cart-amount {
    color: #729F28;
}

.product-dropdown {
    width: 400px;
    border-bottom: 1px solid #a1a1a1;
    padding: 10px;
}



.w-icons {
    display: flex;
    gap: 2rem;
    justify-content: center;
    /* align-items: center; */
}

.cart-icon {
    display: flex;
    flex-direction: row;
}

.cart-svg {
    padding-top: 8px;
    position: relative;

}


.cart-price {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    margin-top: 0px;
    font-size: 14px;
    color: #787878;
}

.wish-list {
    display: flex;
    flex-direction: column;
    color: #787878;

}

.wishlist-svg {
    margin-left: 0.6rem;
}

@media only screen and (max-width: 1199px) and (min-width: 991px) {
    .toggler {
        display: none;

    }

    .search-icon {
        top: 0.3rem;
        right: 10px;
    }

    .dropdown {
        position: relative;
        display: flex;
    }

    .product-dropdown {
        border: 0px;
    }

    .w-icons {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    .cart-count {
        right: -5%;
        bottom: 26px;
        font-size: 7px;
        padding: 2px;
    }

}

@media only screen and (max-width: 991px) and (min-width: 768px) {
    .toggler {
        display: inline;
    }

    .mlogged-user {
        display: none;
    }

    .dropdown {
        position: relative;
        display: flex;
        flex-direction: row;

    }

    .product-dropdown {
        border: 0px;
    }

    .search-icon {
        top: 0.3rem;
        right: 10px;
    }

    .slash,
    .s-icon,
    .s-logo,
    .navbar,
    .registration,
    .modal-button,
    .modal-buttonr,
    .side-icons,
    .s-icon-col {
        display: none;
    }

    .navbar-icons {
        display: flex;
        margin-top: 1rem;
        justify-content: center;
    }

    .nav {
        display: flex;
        flex-direction: column;
    }

    .ham-button {
        overflow-anchor: none;
        background-color: none;
        background: white;
        color: #729F28;
        border: none;
        outline: none;
        font-size: 21px;
        margin-top: 0.55rem;
        margin-right: 0.2rem;
    }

    .cart-count {
        right: -5%;
        bottom: 26px;
        font-size: 7px;
        padding: 2px;
    }

}

@media only screen and (max-width: 2560px) and (min-width:1199px) {
    .toggler {
        display: none;
    }

    .search-icon {
        top: 0.3rem;
        right: 10px;
    }

    .login-button {
        justify-content: center;
        margin-right: 0rem;
    }

    .product-dropdown {
        border: 0px;
    }

    .dropdown {
        position: relative;
        display: flex;
    }

    .cart-count {
        right: -5%;
        bottom: 26px;
        font-size: 7px;
        padding: 2px;
    }


}

@media only screen and (max-width:480px) {

    .navbar,
    .m-logo,
    .logo-col,
    .navs-icons {
        display: none;
    }

    .main-row {
        width: 100%;

    }

    .main-row>* {
        width: 50%;
    }

    .mlogged-user {
        margin-left: 0.5rem;
        font-size: 24px;
    }

    .prod-image {
        display: none;
    }

    .prod-name {
        font-size: 10px;
    }

    .main-nav {
        display: flex;
        justify-content: start;
    }

    .slider-row {
        width: 100%;
    }

    .slider-row>* {
        width: 50%;
    }

    .login-button {
        display: flex;
        flex-direction: row;
        width: 100%;

    }

    .cart-count {
        right: -5%;
        bottom: 26px;
        font-size: 7px;
        padding: 2px;
    }


    .slider-row {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-row {
        display: flex;
        flex-direction: row-reverse;
        gap: 0px;
    }

    .slider-navbar {
        display: flex;

    }

    .nav {
        display: flex;
        flex-direction: column;
    }

    .s-logo {
        display: flex;
        padding-top: 16px;
        justify-content: center;
        color: var(--unnamed-color-729f28);
        font: normal normal bold 49px/64px SF Arch Rival;
        letter-spacing: 0px;
        color: #729F28;
    }

    .s-icon-col {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0.5rem;
    }

    .s-icon {
        width: 40px;
        height: 40px;
    }

    .search-icon {
        /* bottom: 71.5%; */
        top: 14%;
        left: 84%;
    }

    .side-icons {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-right: 1rem;
        margin-top: 1rem;
    }

    .product-dropdown {
        width: 248px;
        border: 0px;
    }

    .alert {
        width: 250px;
    }

    .wishlist-svg {
        margin-left: 0.6rem;
        width: 25px;
    }

    .carts {
        width: 33px;
    }

    .cart-svg {
        position: relative;
        padding-top: 0px;
    }

    .dropdown {
        display: flex;
        flex-direction: row;
        margin-top: 0px;
        align-items: center;
    }

    .ham-button {
        overflow-anchor: none;
        background-color: none;
        background: white;
        color: #729F28;
        border: none;
        outline: none;
        font-size: 21px;
        margin-top: 0.9rem;
    }

    .nav-link {
        color: black;
        text-decoration: none;
        padding: 4px;
        font-size: 15px;
    }

    .login-button {
        display: flex;
        flex-direction: row;
        width: 100%;

    }

    .profile-svg {
        margin-top: 3px;
    }

    .login-text {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
    }

    .modal-button {
        border: none;
        background: none;
        color: #787878;
        padding: 0px;
        margin-left: 0.3rem;
        color: black
    }

    .modal-buttonr {
        border: none;
        background: none;
        color: #787878;
        padding: 0px;
        margin-left: 0.3rem;
        color: black
    }

    .searchBar:focus {

        outline: red !important;
        outline-width: 0 !important;
        box-shadow: none;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
    }

    .searchBar {
        border: 1px solid gray;
        width: 100%;
        border: none;
    }

}
</style>