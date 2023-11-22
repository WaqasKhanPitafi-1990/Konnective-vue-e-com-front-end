<template>
    <b-row class="product-main">
        <b-col>
            <div class="pricing">
                <span class="sub-total">
                    {{ $t("sub-total") }}
                </span>
                <span class="sub-amount">${{ cartTotalAmount }}</span>
            </div>
            <div class="pricing">
                <span class="total-price">
                    {{ $t("total") }}
                </span>
                <span class="sub-amount">${{ cartTotalAmount }}</span>
            </div>
        </b-col>
    </b-row>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    props: ['pricingCard'],
  computed:{
      ...mapState(['cart']),
      ...mapGetters('productModule', ['cartTotalAmount'])
  }
}
</script>

<style scoped>
.product-main {
    display: flex;
    align-items: center;
    padding: 1rem;

}

.pricing {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
    margin-bottom: 1rem;
}

.total-price {
    font-size: 20px;
    color: #787878;
    opacity: 1;
}

.sub-total {
    font-size: 20px;
    letter-spacing: 0px;
    color: #787878;
    opacity: 1;
}

.sub-amount {
    font-size: 20px;
}

</style>