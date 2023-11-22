<template>
    <div>
        <b-row class="product-contact">
            <b-col cols="12">
                <div class="location">
                    <span class="loc-icon">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <div class="adress">
                        <div>
                            <span class="user-location">
                                Lahore
                            </span>
                        </div>
                        <span class="location-adress">
                            Street No 4
                        </span>
                    </div>
                </div>
                <div class="contact-no">
                    <span class="phone-icon">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <span>
                        +92 0321 1234567
                    </span>
                </div>
                <div class="contact-no">
                    <span class="email-icon">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <span>
                       {{ getCurrentUser.email }} 
                    </span>
                </div>
            </b-col>
        </b-row>
        <b-row class="product-contact">
            <b-col cols="12">
                <div class="payment">
                    <div class="paypal-main">
                        <span class="pay-icon">
                            <i class="fa fa-cc-paypal" style="font-size:36px"></i>
                        </span>
                        <div class="payment-method">
                            <span>
                                {{ shippingCard.paymentMethod }}
                            </span>
                            <span class="location-adress">
                            136546441212
                            </span>
                        </div>
                    </div>
                    <span class="edit-icon">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </span>

                </div>

            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class="total-prices">
                    <div class="subtotal-main">
                        <span class="sub-total">
                            Sub Total :
                        </span>
                        <span class="sub-amount">
                            {{ cartTotalAmount }}
                        </span>
                    </div>
                    <div class="subtotal-main">
                        <span class="sub-total">
                            Total :
                        </span>
                        <span class="sub-amount">
                            {{ cartTotalAmount }}
                        </span>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    props: ['shippingCard'],
    computed: {
        ...mapState('productModule', ['cart']),
        ...mapGetters('productModule', ['cartTotalAmount']),
        ...mapGetters('registrationModule',['getCurrentUser'])
    }
}
</script>

<style scoped>
.product-contact {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #C7C7C7;
    padding: 1rem;
}

.subtotal-main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.body-content {
    display: flex;
    flex-direction: column;
}

.adress {
    display: flex;
    flex-direction: column;
    margin-top: 0.3rem;
}

.sub-amount {
    color: #787878;
    font-size: 20px;
}

.payment-method {
    display: flex;
    flex-direction: column;
    margin-top: 0.3rem;
}

.paypal-main {
    display: flex;
    align-items: center;
    flex-direction: row;
}

.products {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.product-quantity {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.pay-icon {
    color: skyblue;
    margin-right: 0.7rem;
}

.quantity {
    text-align: left;
    color: #BDBDBD;
    opacity: 1;
}

.loc-icon {
    opacity: 1;
    color: #6F9642;
    font-size: 22px;
}

.phone-icon {
    opacity: 1;
    color: #6F9642;
    font-size: 22px;
}

.email-icon {
    opacity: 1;
    color: #6F9642;
    font-size: 16px;
}

.location-adress {
    color: #BDBDBD;
    opacity: 1;
}

.accountNo {
    color: #BDBDBD;
    opacity: 1;
}

.edit-icon {
    color: #199CC6;
}

.contact-no {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    margin-top: 1rem;
}

.location {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}

.payment {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
}

.total-price {
    color: #000000;
    font-size: 20px;
    opacity: 1;
    margin-top: 1rem;
}

.sub-total {
    margin-top: 1rem;
    font-size: 24px;
    letter-spacing: 0px;
    opacity: 1;

}
</style>