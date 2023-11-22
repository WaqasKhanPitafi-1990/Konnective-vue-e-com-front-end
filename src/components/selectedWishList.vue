<template>
    <div class="container mt-5">
        <span class="wish-title">
            Wishlist Items
        </span>
        <template>
            <b-row class="wish-row">
                <b-col class="wishlist-prod" sm="4" md="4" lg="3" v-for="item in wishlist" :key="item._id">
                    <b-card>

                        <b-card-img class="card-image" @click="navigateWishlistProduct(item._id)"
                            :src="imageUrl + item.thumbnailImage" img-alt="Image"></b-card-img>

                        <!-- <b-card-image>
                        </b-card-image> -->
                        <b-card-body>
                            <b-card-title>{{ item.name }}</b-card-title>
                            <template>
                                <div class="ratings">
                                    <b-form-rating class="star-rating">
                                    </b-form-rating>
                                    <!-- <span class="review">{{ product.description }}</span> -->
                                </div>
                            </template>
                            <div class="pricing">
                                <span class="price">${{ item.price }}.00</span>

                            </div>
                            <b-card-text>{{ item.ratings }}</b-card-text>
                        </b-card-body>
                        <div class="add-to-button">
                            <div class="btn-div">
                                <button class="buy-now" @click="removeFromWishlist(item._id)">Remove From list</button>
                            </div>
                        </div>

                    </b-card>
                </b-col>
            </b-row>
        </template>

        <!-- 
        <b-row class="card-row">
            <div v-for="item in wishlist" :key="item._id" class="card-main">
                <b-col sm="4" md="4" lg="4">
                    <b-card class="main-image-card" :img-src="imageUrl + item.thumbnailImage" img-alt="Image">
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
                <b-col lg="4" sm="12" md="6" class="details-column">
                    <div class="title-div">
                        <span class="product-title">{{ item.name }}</span>
                        <div class="title-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 25">
                                <g id="Icon_love_outline" transform="translate(-0.32)">
                                    <path id="Shape"
                                        d="M14,25a1.414,1.414,0,0,1-1-.414L2.326,13.849A8.058,8.058,0,0,1,0,8.179,8.265,8.265,0,0,1,8.33,0,6.386,6.386,0,0,1,12.5,1.831,14.7,14.7,0,0,1,14,3.381a14.712,14.712,0,0,1,1.5-1.55A6.386,6.386,0,0,1,19.67,0,8.265,8.265,0,0,1,28,8.179a8.042,8.042,0,0,1-2.526,5.868L15,24.586A1.4,1.4,0,0,1,14,25ZM8.33,2.778a5.473,5.473,0,0,0-5.53,5.4A5.316,5.316,0,0,0,4.331,11.91L14,21.634l9.494-9.551a.313.313,0,0,1,.029-.029A5.3,5.3,0,0,0,25.2,8.179a5.473,5.473,0,0,0-5.53-5.4,3.746,3.746,0,0,0-2.315,1.134A15,15,0,0,0,15.14,6.469a1.407,1.407,0,0,1-2.281,0,15.045,15.045,0,0,0-2.214-2.557A3.747,3.747,0,0,0,8.33,2.778Z"
                                        transform="translate(0.32 0)" fill="#ccc" />
                                </g>
                            </svg>
                            <svg id="Icon_share_ouline" xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                viewBox="0 0 24 25">
                                <path id="Shape"
                                    d="M19.765,25A4.218,4.218,0,0,1,15.6,21.6l-8.534-6a4.27,4.27,0,0,1-2.831,1.066,4.167,4.167,0,1,1,0-8.333,4.253,4.253,0,0,1,2.9,1.133l8.429-4.739a4.09,4.09,0,0,1-.038-.561,4.236,4.236,0,0,1,8.471,0,4.206,4.206,0,0,1-4.235,4.167,4.26,4.26,0,0,1-2.9-1.134L8.433,11.939a4.337,4.337,0,0,1,.038.561,4.237,4.237,0,0,1-.05.639L16.19,18.6A4.212,4.212,0,1,1,19.765,25Zm0-5.555a1.405,1.405,0,0,0-1.413,1.378.068.068,0,0,1,0,.023,1.412,1.412,0,1,0,1.413-1.4ZM4.235,11.111A1.389,1.389,0,1,0,5.646,12.5,1.4,1.4,0,0,0,4.235,11.111Zm15.53-8.334a1.389,1.389,0,1,0,1.412,1.389A1.4,1.4,0,0,0,19.765,2.777Z"
                                    transform="translate(0 0)" fill="#ccc" />
                            </svg>

                        </div>
                    </div>
                    <div class="catrgories">

                        <span class="category-type">
                            {{ item.fashion }}
                        </span>
                        <hr>
                        <span class="category-type">
                            {{ item.clothes }}
                        </span>
                        <hr>
                        <span class="category-type">
                            {{ item.accessories }}
                        </span>
                    </div>
                    <div class="ratings-and-reviews">
                        <div class="product-ratings">
                            <span>{{ item.ratings }} <svg xmlns="http://www.w3.org/2000/svg" width="16.787" height="15.948"
                                    viewBox="0 0 16.787 15.948">
                                    <path id="ic_star_24px"
                                        d="M10.394,14.817l5.187,3.131-1.377-5.9,4.583-3.97-6.035-.512L10.394,2,8.035,7.565,2,8.077l4.583,3.97-1.377,5.9Z"
                                        transform="translate(-2 -2)" fill="#fff" />
                                </svg>
                            </span>
                        </div>
                        <span class="reviews-detail">{{ item.reviews }}</span>
                        <span class="stock">{{ item.inStock }}</span>
                    </div>
                    <hr>
                    <span class="product-price">${{ item.price }}</span>
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
                        <span class="prod-quantity">Quantity : {{ item.quantity }}</span>
                        <span class="prod-colors">Colors:</span>
                    </div>
                    <div class="add-to-button">
                        <div class="btn-div">
                            <button class="buy-now" @click="removeFromWishlist(item._id)">Remove From list</button>
                        </div>
                    </div>

                </b-col>
            </div>
        </b-row> -->

    </div>
</template>
  
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    props: ['wishListProduct'],
    // props: ['product'],
    data() {
        return {
            imageUrl: "",
            subcategory: false,
        }
    },

    computed: {
        ...mapState("productModule", [
            "cart",
            "wishlist"
        ]),
        ...mapGetters("registrationModule", ['isLoggedIn'])

    },
    methods: {
        navigateWishlistProduct(productId) {
                this.$router.push(`/product/${productId}`);

        },

        ...mapActions("productModule", ['removeFromWishlist']),
        buyNow() {
            this.$router.push('/Shop')
        }
    },
    mounted() {
        this.imageUrl = process.env.VUE_APP_API_BASE_URL + 'api'
    }

}
</script>
  
<style scoped>
.title-div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.product-title {
    text-align: center;
    font: normal normal normal Lato;
    font-size: 24px;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}

.card-title {
    margin-bottom: var(--bs-card-title-spacer-y);
    font-size: 18px;
    text-align: center;
}

.ratings {
    display: flex;
    justify-content: center;
    width: 72%;
    margin: auto;
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

.star-rating {
    color: #ABABAB;
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


.wish-title {
    font-size: 50px;
    color: #729F28;
    text-align: center;
    display: block;
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

.btn-div[data-v-00128ca0] {
    width: 100%;
}




@media only screen and (max-width:480px) {
    .details-column {
        margin-left: 1rem;
    }

    .wish-row {
        margin: 1rem;
    }

    .title-svg {
        margin-left: 4rem;
    }

    .card-img {
        padding: 1rem;
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

    .wishlist-prod {
        margin-top: 2rem;
    }
}


@media only screen and (max-width:991px) and (min-width:768px) {
    .details-column {
        margin-left: 1rem;
    }

    .wish-row {
        margin: 1rem;
    }

    .title-svg {
        margin-left: 4rem;
    }

    .card-img {
        padding: 1rem;
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

    .wishlist-prod {
        margin-top: 2rem;
    }
}


@media only screen and (max-width: 1199px) and (min-width: 991px) {

    .product-row {
        display: flex;
        justify-content: center;
        margin: auto;
    }

    .wish-row {
        margin: 1rem;
    }

    .card-img {
        padding: 1rem;
    }

    .wishlist-prod {
        margin-top: 2rem;
    }
}



@media only screen and (max-width:2450px) and (min-width:1199px) {
    /* .product-col {
        width: 330px;
    } */

    .product-row {
        display: flex;
        justify-content: center;
        margin: auto;
    }

    .wish-row {
        margin: 1rem;
    }

    .card-img {
        padding: 1rem;
    }

    .wishlist-prod {
        margin-top: 2rem;
    }
}
</style>