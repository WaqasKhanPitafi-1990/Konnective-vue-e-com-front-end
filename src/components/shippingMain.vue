<template>
    <b-row class="product-card">
        <div class="wrapper">
            <div class="order-product">
                <div class="billing">
                    <span class="product-text">
                        {{ $t("shipping-billing") }}
                    </span>
                    <span class="edit-icon">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <b-row class="orders">
                <b-col cols="12">
                    <div >
                        <shippingCard :shippingCard="cart" />
                    </div>
                </b-col>
            </b-row>

            <div class="proceed-button">
                <button class="proceed-pay" @click="proceedToPayment">
                    {{ $t("place-order") }}
                </button>
            </div>
        </div>
    </b-row>
</template>
<script>
import { mapState } from 'vuex';
import shippingCard from './shippingCard.vue';
export default {
    data() {
        return {
            // productOrderDetails: [
            //     {
            //         location: "Lahore",
            //         phone: "03215545465",
            //         email: "demo@gmail.com",
            //         adress: "67, Washington DC",
            //         paymentMethod: "Paid By PayPal",
            //         accountNo: "*****11223",
            //         methodImage: "",
            //         subTotal: "40$",
            //         total: "80$",
            //     },

            // ]
        }

    },
    computed:{
        ...mapState('productModule',['cart']),
    },
    components: {
        shippingCard
    },
    methods: {
        proceedToPayment() {
            this.$router.push('orderComplete')
        }

    }
}
</script>
<style scoped>
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
    margin-top: 0.6rem;
    margin-top: 1rem;
    width: 100%;
    margin-bottom: 1rem;
}

.order-product {
    width: 100%;
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
}

.wrapper {
    padding: none;
    margin: none;
}

.edit-icon {
    color: #199CC6;
}

.billing {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
}

@media only screen and (max-width:480px){

.product-card {
    margin-top: 3rem;
}

}
</style>
