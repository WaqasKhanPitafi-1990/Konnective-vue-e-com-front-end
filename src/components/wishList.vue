<template>
    <div class="product-details-container">
        <div>
            <b-row>
                <!-- <b-col v-for=" product in products" :key="product._id">
                </b-col> -->
                <selectedWishList :wishListProduct="productsData" />
                <!-- {{ product }} -->
            </b-row>

        </div>
    </div>
</template>

<script>
import selectedWishList from './selectedWishList.vue';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            productsData: [],
        }
    },
    computed: {
        ...mapGetters("productModule", ['getWishlistItems']),
        wishlistProducts() {
            const productId = this.$route.params.id;
            console.log(this.getWishlistItems, "THis console is for WIshlist")
            return this.getWishlistItems.find(p => p._id === productId);
        }

    },
    methods: {

    },
    mounted() {
        console.log(this.get, "THis is a signle product")
        if (!this.getWishlistItems) {
            // this.$router.push('/')
        }

    },

    created(){
        this.wishlistProducts;
    },
    components: {
        selectedWishList,
    },


}
</script>

<style></style>