<template>
    <div class="container">
        <div v-if="!cartSize" class="alert alert-secondary my-5" role="alert">
            Cart is empty! Please add some products.
        </div>
        <b-row class="items-row" v-for="items in cart" :key="items._id">
            <b-col lg="4" sm="4" md="3">
                <div class="image-div">
                    <div class="products-image">
                        <img class="product-img" :src="imageUrl + items.thumbnailImage" alt="product-img" />
                    </div>
                    <div class="image-title"><span>{{ items.name }}</span></div>
                </div>
            </b-col>

            <b-col sm="2" md="2" lg="2">
                <div class="product-price">
                    <span>{{ items.price }}</span>
                </div>
            </b-col>
            <b-col sm="2" md="2" lg="2">
                <div class="product-title">
                    <span>{{ items.quantity }}</span>
                </div>
            </b-col>
            <b-col sm="2" md="2" lg="2">
                <div class="product-title">
                    <span>{{ cartTotalAmount }}</span>
                </div>
            </b-col>
            <!-- </b-col> -->
        </b-row>

        <hr />
    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
    data() {
        return {
            imageUrl: ""
        }
    },
    props: ['shoppingCart'],
    computed: {
        ...mapState("productModule", ['cart']),
        ...mapGetters("productModule", ['cartSize', 'cartTotalAmount']),
    },
    mounted() {
        this.imageUrl = process.env.VUE_APP_API_BASE_URL + 'api'
    },
}
</script>

<style scoped>
.product-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;
}

.products-image {
    height: 140px;
}

.image-div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.items-row {
    justify-content: space-between;
}

.product-row {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-left: 0rem;
    align-items: center
}

.pricing {
    display: flex;
    gap: 5rem;
}

.products-image {
    display: flex;
    flex-direction: row;
}

.image-title {
    margin-left: 2rem;

}

.product-img {
    height: 60px;
    width: 90px;
}



@media only screen and (max-width:991px) and (min-width:768px) {
    .image-title {
        margin-left: 2rem;
        font-size: 11px;
    }

    .product-img {
        height: 100px;
        width: 100px;
        margin-top: 3rem;
    }

    .items-row {
        justify-content: space-between;
        align-items: center;
    }


}

@media only screen and (max-width:480px) {
    .image-div {
        display: flex;
        flex-direction: row;
    }

    .items-row>* {
        width: 0%;
        font-size: 14px;
        font-weight: 500;
    }

    .items-row {
        justify-content: space-between;
        align-items: center;
        width: 91%;
    }


    .products-image {
        display: none;
    }

    .image-title {
        margin-left: 0rem;
        font-size: 14px;
    }

}

@media only screen and (max-width:1199px) and (min-width:991px) {
    .image-div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .items-row {
        margin-top: 3rem;
    }
}

@media only screen and (max-width:2450px) and (min-width:1199px) {
    .image-div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .items-row {
        margin-top: 3rem;
    }
}
</style>