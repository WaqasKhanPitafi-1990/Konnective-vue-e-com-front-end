<template>
    <div class="container mt-5">
        <b-row class="card-row">
            <b-col class="image-cont" sm="4" md="4" lg="4">
                <b-card class="main-image-card" :img-src="imageUrl + productdetails.thumbnailImage" img-alt="Image">
                </b-card>
            </b-col>
            <b-col class="images-column" v-if="subcategory" cols="1">
                <b-card class="image-card" :img-src="productdetails.subcategory" img-alt="Image" img-top>
                </b-card>
                <b-card class="image-card" :img-src="productdetails.subcategory" img-alt="Image" img-top>
                </b-card>
                <b-card class="image-card" :img-src="productdetails.subcategory" img-alt="Image" img-top>
                </b-card>
                <b-card class="image-card" :img-src="productdetails.subcategory" img-alt="Image" img-top>
                </b-card>
            </b-col>
            <b-col lg="4" sm="7" md="6" class="details-column">
                <div class="title-div">
                    <span class="product-title">{{ productdetails.name }}</span>
                    <div class="title-svg">
                        <b-button class="wishlist" @click="addToWishlist(productdetails._id)"
                            :disabled="isProductInWishlist(productdetails._id)">
                            <svg :class="[{ 'filled': isProductInWishlist(productdetails._id) }, 'wishlist-icon']"
                                xmlns="http://www.w3.org/2000/svg" width="30.558" height="30.508"
                                viewBox="0 0 33.558 30.508">
                                <path id="heart-love-like"
                                    d="M16.43,30.135,4.408,17.615A8.8,8.8,0,0,1,4.871,5.061,8.01,8.01,0,0,1,16.8,6.425l.479.665.479-.665A8.01,8.01,0,0,1,29.685,5.061a8.8,8.8,0,0,1,.463,12.554L18.125,30.135A1.165,1.165,0,0,1,16.43,30.135Z"
                                    transform="translate(-0.499 -1.492)" fill="none" stroke="#787878" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="3" />
                            </svg>
                        </b-button>
                        <b-button @click="copyProductLink" class="share">
                            <svg class="share-icon" id="Icon_share_ouline" style="margin-top: 0.5rem;"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
                                <path id="Shape"
                                    d="M19.765,25A4.218,4.218,0,0,1,15.6,21.6l-8.534-6a4.27,4.27,0,0,1-2.831,1.066,4.167,4.167,0,1,1,0-8.333,4.253,4.253,0,0,1,2.9,1.133l8.429-4.739a4.09,4.09,0,0,1-.038-.561,4.236,4.236,0,0,1,8.471,0,4.206,4.206,0,0,1-4.235,4.167,4.26,4.26,0,0,1-2.9-1.134L8.433,11.939a4.337,4.337,0,0,1,.038.561,4.237,4.237,0,0,1-.05.639L16.19,18.6A4.212,4.212,0,1,1,19.765,25Zm0-5.555a1.405,1.405,0,0,0-1.413,1.378.068.068,0,0,1,0,.023,1.412,1.412,0,1,0,1.413-1.4ZM4.235,11.111A1.389,1.389,0,1,0,5.646,12.5,1.4,1.4,0,0,0,4.235,11.111Zm15.53-8.334a1.389,1.389,0,1,0,1.412,1.389A1.4,1.4,0,0,0,19.765,2.777Z"
                                    transform="translate(0 0)" fill="#ccc" />
                            </svg>
                        </b-button>

                    </div>
                </div>
                <div class="catrgories">

                    <span class="category-type">
                        {{ productdetails.fashion }}
                    </span>
                    <hr>
                    <span class="category-type">
                        {{ productdetails.clothes }}
                    </span>
                    <hr>
                    <span class="category-type">
                        {{ productdetails.accessories }}
                    </span>
                </div>
                <div class="ratings-and-reviews">
                    <div class="product-ratings">
                        <span>{{ productdetails.ratings }} <svg xmlns="http://www.w3.org/2000/svg" width="16.787"
                                height="15.948" viewBox="0 0 16.787 15.948">
                                <path id="ic_star_24px"
                                    d="M10.394,14.817l5.187,3.131-1.377-5.9,4.583-3.97-6.035-.512L10.394,2,8.035,7.565,2,8.077l4.583,3.97-1.377,5.9Z"
                                    transform="translate(-2 -2)" fill="#fff" />
                            </svg>
                        </span>
                    </div>
                    <span class="reviews-detail">{{ productdetails.reviews }}</span>
                    <span class="stock">{{ productdetails.inStock }}</span>
                </div>
                <hr>
                <span class="product-price">${{ productdetails.price }}</span>
                <span class="f-return">&free Return</span>
                <div class="product-data">
                    <span class="text-detail"><i class=" fa fa-solid fa-check"></i>Ultrices eros in cursus turpis massa
                        tincidunt
                        cursus.</span>
                    <span class="text-detail"><i class=" fa fa-solid fa-check"></i>Ultrices eros in cursus turpis massa
                        tincidunt cursus.</span>
                    <span class="text-detail"><i class=" fa fa-solid fa-check"></i>Ultrices eros in cursus turpis massa
                        tincidunt cursus.</span>
                </div>
                <div class="quantity">
                    <span class="prod-quantity">Quantity : {{ productdetails.quantity }}</span>
                    <span class="prod-colors">Colors:</span>
                </div>
                <div class="add-to-button">
                    <div class="btn-div">
                        <button v-show="isLoggedIn" @click="addToCart(productdetails._id)" class="cart-button">Add to
                            cart
                        </button>
                    </div>
                    <div class="btn-div">
                        <button class="buy-now" @click="buyNow">{{ $t("buy-now") }}</button>
                    </div>
                </div>

            </b-col>
            <b-modal :hide-header="true" :hide-footer="true" v-model="showModal" title="Logout Successful" ok-only
                @ok="buyNow">
                <div class="warning-main">
                    <span v-if="!isLoggedIn" class="modal-msg">Please log In and </span>
                    <span class="product-message">
                     Add some products in the cart First
                    </span>
                </div>
            </b-modal>
            <!-- <b-modal :hide-header="true" :hide-footer="true" v-model="cartModal" title="Logout Successful" ok-only
                @ok="productAdded">
                <div class="warning-main">
                    <span class="product-message">
                        and Add some products in the cart First
                    </span>
                </div>
            </b-modal> -->
        </b-row>
    </div>
</template>
  
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    props: ['productdetails'],
    // props: ['product'],
    data() {
        return {
            imageUrl: "",
            subcategory: false,
            showModal: false,
            cartModal: false,
        }
    },

    computed: {
        ...mapGetters("productModule", ['cartSize']),
        ...mapState("productModule", [
            "cart"
        ]),
        ...mapGetters("productModule", [
            "cartSize",
            "cartTotalAmount",
            'isProductInWishlist'
        ]),

        ...mapGetters("registrationModule", ['isLoggedIn'])
    },
    methods: {
        ...mapActions("productModule", ['addToCart', 'addToWishlist']),
        productAdded() {
            if (this.addToCart == true) {
                this.cartModal = true;

            }
            setTimeout(() => {
                this.cartModal = false;
            }, 1000)
        },
        buyNow() {
            if (this.cartSize <= 0) {
                this.showModal = true;
                setTimeout(() => {
                    this.showModal = false;
                }, 2000)
            } else {
                this.$router.push('/ShoppingCart')
            }
        },

        copyProductLink() {
            const productLink = window.location.href; // Get the current URL as the product link
            const tempInput = document.createElement('input');
            document.body.appendChild(tempInput);
            tempInput.value = productLink;
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Provide feedback to the user
            alert('Product link copied to clipboard!');
        },
    },
    mounted() {
        this.imageUrl = process.env.VUE_APP_API_BASE_URL + 'api'
        // if (!this.getProducts) {
        //     this.$router.push('/')
        // }
    }

}
</script>
  
<style scoped>
.title-div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.share {
    background: none;
    border: none;

}

.share-icon {
    color: #729F28 !important;
}

.share:focus {
    outline: none;
    background: none;
    border: none;
}

.warning-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.wishlist {
    background: none;
    border: none;
    color: black;

}

.modal-msg {
    font-weight: bold;
    font-size: 25px;
    color: red;
    text-align: center;
    text-transform: uppercase;
    margin-top: 3rem;
}

.product-message {
    font-weight: bold;
    font-size: 20px;
    color: #729F28;
    text-align: center;
    margin:auto ;
    margin-top: 2rem;
    text-transform: uppercase;
}

.wishlist:focus {
    outline: none;
    background: none;
    border: none;
}

.wishlist-icon {
    font-size: 24px;
    color: gray;
}

.wishlist-icon.filled path {
    fill: red;
    stroke: #ff0000;
}


.product-title {
    text-align: center;
    font: normal normal normal Lato;
    font-size: 24px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}

.title-svg {
    margin-left: 6rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.image-card {
    height: 106px;
    margin-bottom: 1rem;
}

.card-row {
    display: flex;
}

.catrgories {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.text-detail {
    margin-top: 0.2rem;
}

.card-img {
    margin-top: 2rem;
}

.product-ratings {
    width: 18%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #FBBF24 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
}

.category-type {
    border-right: 1px solid;
    padding-right: 1rem;
    height: 25px;
    margin-top: 1rem;
    text-align: left;
    color: #8C5E1A;
    opacity: 0.85;
}

.category-type:last-child {
    border: none;
}

.product-image {
    /* max-height: 400px; */
    width: 100%;
}

.ratings-and-reviews {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
}

.reviews-detail {
    margin-left: 1rem;
}

.stock {
    margin-left: 4rem;
}

.product-data {
    display: flex;
    margin-top: 0.6rem;
    flex-direction: column;
}

.product-price {
    color: var(--unnamed-color-729f28);
    text-align: center;
    font-size: 25px;
    color: #729F28;
    opacity: 1;
}

.f-return {
    text-align: center;
    letter-spacing: 0px;
    color: #BDBDBD;
    opacity: 1;
    margin-left: 0.7rem;
}

.stock {
    letter-spacing: 0px;
    color: #49B05E;
    opacity: 1;
}

.prod-quantity {
    color: #333333;
    opacity: 1;
    font-size: 18px;
    margin-top: 0.8rem;
}

.quantity {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.cart-button {
    border: 1px solid #CCCCCC;
    opacity: 1;
    width: 100%;
    border: none;
    height: 40px;
    border-radius: 6px;
    color: #787878;
}

.buy-now {
    background: #729F28 0% 0% no-repeat padding-box;
    opacity: 1;
    width: 100%;
    border: none;
    color: white;
    height: 40px;
    border-radius: 6px;

}

.btn-div {
    width: 40%;
}

.add-to-button {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
}

.details-column {
    margin-left: 3rem;
}



@media only screen and (max-width:480px) {


    .add-to-button {
        justify-content: start;
    }

    .image-cont {
        display: flex;
        justify-content: center;
        width: 360px;
    }

    .details-column {
        margin-left: 4rem;
        margin-top: 3rem;
    }

    .title-svg {
        margin-left: 4rem;
    }

    .product-title {
        font-size: 18px;
    }

    .product-price {
        font-size: 20px;
    }

    .text-detail {
        margin-top: 0.8rem;
        font-size: 15px;
    }

    .card-row {
        display: flex;
        justify-content: center;
        width: auto;
    }
}


@media only screen and (max-width:991px) and (min-width:768px) {
    .details-column {
        margin-left: 1rem;
    }

    .title-svg {
        margin-left: 4rem;
    }

    .product-title {
        font-size: 18px;
    }

    .product-price {
        font-size: 20px;
    }

    .text-detail {
        margin-top: 0.8rem;
        font-size: 15px;
    }

    .card-row {
        display: flex;
        justify-content: center;
    }
}
</style>