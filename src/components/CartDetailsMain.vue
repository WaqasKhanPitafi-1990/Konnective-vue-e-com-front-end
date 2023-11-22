<template>
    <div class="cartDetails">
        <div>
            <shoppingCartDetails :shoppingCart="cart" />
        </div>
    </div>
</template>

<script>
import {  mapState } from 'vuex';
import shoppingCartDetails from './shoppingCartDetails.vue';
export default {
    data() {
        return {

        }
    },
    computed: {
        // ...mapGetters(['cartSize']),
        ...mapState("productModule",['cart']),
       
    },
    components: {
        shoppingCartDetails
    }
}
</script>

<style></style>