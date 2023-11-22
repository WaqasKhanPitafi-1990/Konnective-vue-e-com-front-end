<template>
    <div class="cartDetails">
        <div class="shipping-heading">
            <span>
                {{ $t("product") }}
            </span>
            <div>
                <span class="edit-icon">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                </span>
                <span>
                    {{ $t("edit") }}
                </span>

            </div>
        </div>

        <div v-for="(products, index) in cart" :key="'cart-index- ' + index">
            <reviewOrderDetails :reviewOrder="products" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import reviewOrderDetails from './reviewOrderDetails.vue'
export default {
    data() {
        return {
            // reviewCartProducts: [
            //     {
            //         title: "White Vaise",
            //         image: "https://cdn.ishop.cholobangla.com/uploads/thumb-product-4-1.webp",
            //         price: "40.00",
            //         subTotal: "239",
            //         quantity: "10",
            //     },
            //     {
            //         title: "White Vaise",
            //         image:
            //             "https://cdn.ishop.cholobangla.com/uploads/thumb-product-4-1.webp",
            //         price: "40.00",
            //         subTotal: "239",
            //         quantity: "10",
            //     },
            // ],
        }
    },
    computed:{
        ...mapState('productModule',['cart']),
    },
    components: {
        reviewOrderDetails
    }
}
</script>

<style scoped>
.shipping-heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 4rem;
    padding-left: 4rem;
    border-bottom: 1;
}

.edit-icon {
    color: skyblue;
    margin-right: 0.4rem;
}
</style>