<template>
    <div class="container">
        <b-row>
            <b-col cols="6">
                <div class="image-div">
                    <div class="products-image">
                        <img class="review-image" :src="imageUrl + reviewOrder.thumbnailImage" alt="product-img" />
                    </div>
                    <div class="image-title"><span>{{ reviewOrder.name }}</span></div>
                </div>
            </b-col>
            <b-col cols="6" class="product-row">
                <b-col cols="2">

                </b-col>
                <b-col cols="2">
                    <div class="product-title">
                        <span>{{ reviewOrder.quantity }}</span>
                    </div>
                </b-col>
                <b-col cols="2">
                    <div class="product-title">
                        <span>${{ cartTotalAmount }}</span>
                    </div>
                </b-col>
            </b-col>
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
    props: ['reviewOrder'],
    computed: {
        ...mapState('productModule', ['cart']),
        ...mapGetters('productModule', ['cartTotalAmount'])
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

.review-image {
    height: 60px;
    width: 90px;
    margin-top: 3rem;
}

.products-image {
    height: 140px;
}

.image-div {
    display: flex;
    flex-direction: row;
    align-items: center;
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

@media only screen and (max-width:480px) {
    .product-row {
        gap: 2rem;
    }


}
</style>