<template>
    <b-row class="summary-card">
        <div class="wrapper">
            <div class="order-summary">
                <span class="summary-text">
                    {{ $t("order-summary") }}
                </span>
                <span class="products-text">
                    {{ $t(" products") }}  : {{(cartSize)}}
                </span>
            </div>
            <b-row class="orders">
                <b-col cols="12">
                    <div v-for="products in cart" :key="products._id">
                        <orderSummaryCard :summaryCard="products" />
                    </div>
                </b-col>
            </b-row>
            <div class="total-prices">
                <span class="sub-total">
                    {{ $t("sub-total") }}: {{ cartTotalAmount }}
                </span>
                <span class="total-price">
                    {{ $t("total") }} : {{ cartTotalAmount }}
                </span>

            </div>
            <div class="proceed-button">
                <button class="proceed-pay" @click="proceedToPayment">
                    {{ $t("proceed-to-pay") }}
                </button>
            </div>
        </div>
    </b-row>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import orderSummaryCard from './orderSummaryCard.vue';
export default {
    data() {
        return {
            // ordersDetails: [
            //     {

            //         title: "White Vaise",
            //         image: "https://cdn.ishop.cholobangla.com/uploads/thumb-product-4-1.webp",
            //         price: "40.00",
            //         subTotal: "40$",
            //         total: "80$",
            //         quantity: "10",
            //         totalProducts: "2"
            //     },
            //     {

            //         title: "White Vaise",
            //         image: "https://cdn.ishop.cholobangla.com/uploads/thumb-product-4-1.webp",
            //         price: "40.00",
            //         subTotal: "40$",
            //         total: "80$",
            //         quantity: "10",
            //         totalProducts: "2"
            //     }
            // ]
        }

    },
    computed:{
...mapState('productModule',['cart']),
...mapGetters('productModule',['cartTotalAmount','cartSize'])
    },
    components: {
        orderSummaryCard
    },
    methods: {
        proceedToPayment() {
            this.$router.push('reviewOrder')
        }

    }
}
</script>
<style>
.orders {
    display: flex;
    flex-direction: column;
}

.order-summary {
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
    margin-top: 0.6rem;
    margin-top: 1rem;
    width: 100%;
    margin-bottom: 1rem;
}

.total-prices {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    padding-bottom: 1rem;
}

.total-price {
    color: #000000;
    font-size: 24px;
    opacity: 1;
}

.summary-card {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #C7C7C7;
    border-radius: 10px;
    opacity: 1;
    height: fit-content;
}

.summary-text {
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

.sub-total {
    margin-top: 1rem;
    font-size: 24px;
    letter-spacing: 0px;
    color: #787878;
    opacity: 1;
}

@media only screen and (max-width:480px) {
 
 .summary-card {
     margin-top: 4rem;
 }
}

</style>
