<template>
    <b-row class="product-card">
        <div class="wrapper">
            <div class="order-product">
                <span class="product-text">
                    {{ $t("order-summary") }}
                </span>

            </div>
            <b-row  class="orders">
                <b-col>
                    <div >
                        <productPricingCard :pricingCard="cart" />
                    </div>
                </b-col>
            </b-row>

            <div class="proceed-button">
                <button class="proceed-pay" @click="proceedToPayment">
                    {{ $t("proceed-to-checkout") }}
                </button>
            </div>
        </div>
    </b-row>
</template>
<script>
import { mapState } from 'vuex';
import productPricingCard from './productPricingCard.vue';
export default {
    data() {
        return {
            // productOrderDetails: [
            //     {

            //         title: "White Vaise",
            //         image: "https://cdn.ishop.cholobangla.com/uploads/thumb-product-4-1.webp",
            //         price: "40.00",
            //         subTotal: "40$",
            //         total: "80$",
            //         quantity: "10",
            //         totalProducts: "2"
            //     },

            // ]
        }

    },
    computed: {
        ...mapState(['cart']),


    },
    components: {
        productPricingCard
    },
    methods: {
        proceedToPayment() {
            this.$router.push('deliveryDetails')
        }

    }
}
</script>
<style>
.orders {
    display: flex;
    flex-direction: column;
}

.proceed-pay {
    background: var(--unnamed-color-729f28) 0% 0% no-repeat padding-box;
    background: #729F28 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    border: none;
    padding: 8px;
    color: white;
    width: 100%;

}

.proceed-button {
    margin-top: 1rem;
    width: 100%;
    margin-bottom: 2rem;
}

.order-product {
    border-bottom: 1px solid #C7C7C7;
    width: 100%;
    margin-bottom: 1px;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
}

.wrapper {
    padding: none;
    margin: none;
}

.total-prices {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    padding-bottom: 1rem;
}


.product-card {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #C7C7C7;
    border-radius: 10px;
    opacity: 1;
}

.product-text {
    text-align: left;
    font: normal normal normal 24px/29px Lato;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    margin-bottom: 1rem;
}

.products-text {
    text-align: left;
    font: normal normal normal 22px/27px Lato;
    letter-spacing: 0px;
    color: #787878;
    opacity: 1;
}


@media only screen and (max-width:991px) and (min-width: 767px) {

    .product-card {
        margin-top: 3rem;
    }

}



@media only screen and (max-width:480px) {

    .product-card {
        margin-top: 3rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

}
</style>
