<template>
    <b-row class="wish-row">
        <b-col class="wishlist-prod" sm="4" md="4" lg="3" v-for="item in getFilteredProducts" :key="item._id">
            <b-card :img-src="imageUrl + item.thumbnailImage" img-alt="Image" alt="Card image cap">
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

            </b-card>
        </b-col>
    </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            imageUrl: "",
        }
    },
    computed: {

        ...mapGetters("productModule", ['getFilteredProducts']),
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