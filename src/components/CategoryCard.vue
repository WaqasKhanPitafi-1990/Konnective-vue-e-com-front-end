
<template>
    <div class="cards">
        <b-card class="card-body">
            <b-card-img class="card-image" @click="navigateProduct(CategoryProduct._id)"
                :src="imageUrl + CategoryProduct.thumbnailImage" img-alt="Image"></b-card-img>
            <b-card-text>
                <div class="title-text">
                    <span class="span-text" v-if="!CategoryProduct.hideTitle">
                        {{ CategoryProduct.name }}
                    </span>
                </div>
                <div>
                    <template>
                        <div class="ratings">
                            <b-form-rating class="star-rating">
                            </b-form-rating>
                            <span class="review">{{ CategoryProduct.reviews }}</span>
                        </div>
                    </template>
                    <div class="pricing">
                        <span class="price">${{ CategoryProduct.price }}.00</span>
                        <span class="sale-price" v-if="CategoryProduct.salePrice">${{ CategoryProduct.salePrice }}.00</span>
                    </div>
                </div>
            </b-card-text>
            <b-button class="wishlist" @click="addToWishlist(CategoryProduct._id)"
                :disabled="isProductInWishlist(CategoryProduct._id)">

                <svg :class="[{ 'filled': isProductInWishlist(CategoryProduct._id) }, 'wishlist-icon']"
                    xmlns="http://www.w3.org/2000/svg" width="30.558" height="30.508" viewBox="0 0 33.558 30.508">
                    <path id="heart-love-like"
                        d="M16.43,30.135,4.408,17.615A8.8,8.8,0,0,1,4.871,5.061,8.01,8.01,0,0,1,16.8,6.425l.479.665.479-.665A8.01,8.01,0,0,1,29.685,5.061a8.8,8.8,0,0,1,.463,12.554L18.125,30.135A1.165,1.165,0,0,1,16.43,30.135Z"
                        transform="translate(-0.499 -1.492)" fill="none" stroke="#787878" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="3" />
                </svg>
            </b-button>
        </b-card>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default ({
    props: ['CategoryProduct'],

    data() {
        return {
            imageUrl: "",
        }
    },
    methods: {
        ...mapActions('productModule', ['addToWishlist']),

        navigateProduct(productId) {
                this.$router.push(`/product/${productId}`);
        },
    },

    computed: {
        ...mapGetters("productModule", ['getProducts', 'isProductInWishlist']),
        // ...mapGetters("registrationModule", ['isLoggedIn'])
    },
    mounted() {
        this.imageUrl = process.env.VUE_APP_API_BASE_URL + 'api'
    }


})
</script>
    
<style scoped>
.wishlist {
    background: none;
    border: none;
    position: absolute;
    left: 0;
    bottom: 90%;
    color: white;

}

.card-body {
    position: relative;
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

.card-image {
    width: 230px;
    height: 150px;
    cursor: pointer;
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

}

.card-img-top {
    height: 300px;
    padding: 1rem;
    border-radius: 1.5rem;
}

.span-text {
    font-size: 27px;
    text-align: center;
}

.title-text {
    margin-top: 1rem;
    text-align: center;
    color: #8C5E1A;
    height: 5rem;
    line-height: initial;
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
    /* color: #ABABAB; */
    /* opacity: 1; */
}





@media only screen and (max-width:480px) {

    .prod-main span {
        margin-top: 3.5rem;
        font-size: 30px;
    }

    .card {
        height: 390px;
        width: 100%;
        border-radius: 8px;
    }

    .wishlist {
        left: 2px;
        bottom: 87%;
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
    .product-col {
        width: 330px;
    }
}


@media only screen and (max-width:2450px) and (min-width:1199px) {
    .product-col {
        width: 330px;
    }

    .review {
        display: none;
    }

}

@media only screen and (max-width:1199px) and (min-width:991px) {
    .product-col {
        width: 300px;
    }

    .review {
        display: none;
    }

}
</style>
    