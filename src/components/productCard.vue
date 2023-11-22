
<template>
    <div class="cards">
        <b-card class="card-body">
            <b-card-img class="card-image" @click="navigateProduct(product._id)" :src="imageUrl + product.thumbnailImage"
                img-alt="Image"></b-card-img>
            <b-card-text>
                <div class="title-text">
                    <span class="span-text" v-if="!product.hideTitle">
                        {{ product.name }}
                    </span>
                </div>
                <div>
                    <template>
                        <div class="ratings">
                            <b-form-rating class="star-rating">
                            </b-form-rating>

                        </div>
                    </template>
                    <div class="pricing">
                        <span class="price">${{ product.price }}.00</span>
                        <span class="sale-price" v-if="product.salePrice">${{ product.salePrice }}.00</span>
                    </div>
                </div>
            </b-card-text>
            <!-- {{ isProductInWishlist(product._id) }} -- {{ product.isProductInWishlist }} -->
            <b-button class="wishlist" @click="addToWishlist(product._id)" :disabled="isProductInWishlist(product._id)">
                <svg :class="[{ 'filled': isProductInWishlist(product._id) }, 'wishlist-icon']"
                    xmlns="http://www.w3.org/2000/svg" width="30.558" height="30.508" viewBox="0 0 33.558 30.508">
                    <path id="heart-love-like"
                        d="M16.43,30.135,4.408,17.615A8.8,8.8,0,0,1,4.871,5.061,8.01,8.01,0,0,1,16.8,6.425l.479.665.479-.665A8.01,8.01,0,0,1,29.685,5.061a8.8,8.8,0,0,1,.463,12.554L18.125,30.135A1.165,1.165,0,0,1,16.43,30.135Z"
                        transform="translate(-0.499 -1.492)" fill="none" stroke="#787878" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="3" />
                </svg>
            </b-button>
        </b-card>
        <!-- <button >Wishlist</button> -->
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex"

export default ({
    props: ['product'],
    data() {
        return {
            imageUrl: "",
            products: [],

        }
    },
    computed: {
        ...mapGetters("productModule", ['getProducts', 'isProductInWishlist']),
        ...mapGetters("registrationModule", ['isLoggedIn'])
    },
    methods: {
        ...mapActions('productModule', ['addToWishlist']),
        navigateProduct(productId) {
                this.$router.push(`/product/${productId}`);
        },

    },

    mounted() {

        this.imageUrl = process.env.VUE_APP_API_BASE_URL + 'api'
    }

})
</script>
    
<style scoped>
.pricing {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
}

.price {
    color: #729F28;
    font-size: 16px;
    margin-top: 6px;
}

.sale-price {
    text-decoration: line-through;
    font-size: 14px;
    margin-top: 9px;
    color: #ABABAB;
}

.card {
    /* height: 450px; */
    width: 100%;
    border-radius: 8px;
    position: relative;

}

.wishlist {
    background: none;
    border: none;
    position: absolute;
    left: 0;
    bottom: 90%;
    color: white;

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

.card-img-top {
    height: 300px;
    padding: 1rem;
    border-radius: 1.5rem;

}

.span-text {
    font-size: 26px;
    text-align: center;
}

.title-text {
    margin-top: 1rem;
    text-align: center;
    color: #8C5E1A;
    height: 5rem;
    line-height: initial;
}

.cards {
    position: relative;
}


.product-col {
    margin-top: 3rem;
    justify-content: center;
    width: 360px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    /* border: 2px solid #8C5E1A0D; */
    border-radius: 18px;
    opacity: 1;

}

.ratings {
    text-align: center;

}

.star-rating {
    color: #ABABAB;
    opacity: 1;
}

.review {
    font-size: 20px;
    width: 100%;
    margin-top: 0.3rem;
    color: #ABABAB;
    opacity: 1;
}

.card-image {
    width: 240px;
    height: 150px;
    cursor: pointer;
}

.card-body {
    position: relative;
}

@media only screen and (max-width:480px) {

    .prod-main span {
        margin-top: 3.5rem;
        font-size: 30px;
    }

    .product-row {
        display: flex;
        justify-content: center;
        margin: auto;
        gap: 1rem;
    }

    .wishlist {
        left: 2px;
        bottom: 87%;
    }

    .product-col {
        margin-top: 2rem;
        justify-content: center;
        width: 350px;
        border: 2px solid #8C5E1A0D;
        border-radius: 18px;
        opacity: 1;


    }

    .form-control {
        padding: 0px;
        margin-top: 0.5rem;
    }

    .card {
        height: 390px;
        border-radius: 8px;
    }

    .span-text {
        font-size: 16px;
        text-align: center;
    }

    .card-img-top {
        height: 190px;
        padding: 0.8rem;
        border-radius: 0.5rem;
    }

}

@media only screen and (min-width:768px) and (max-width:991px) {
    .wishlist {
        left: 2px;
        bottom: 84%;
    }

    .products-row {
        justify-content: center;
    }
}

@media only screen and (max-width:2450px) and (min-width:1199px) {
    .products-row {
        justify-content: center;
    }
}
</style>
    