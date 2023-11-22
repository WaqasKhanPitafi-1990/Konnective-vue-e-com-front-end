<template>
    <div class="product-details-container">
        <div>
            <b-row>
                <!-- <b-col v-for=" product in products" :key="product._id">
                </b-col> -->
                <selectedProduct :productdetails="product" />
                <!-- {{ product }} -->
            </b-row>
            <div class="container">
                <productDescription />
            </div>

        </div>
    </div>
</template>

<script>
import selectedProduct from './selectedProduct.vue';
import productDescription from './productDescription.vue';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            productsData: [],
        }
    },
    computed: {
        ...mapGetters("productModule", ['getProducts']),
        product() {
            const productId = this.$route.params.id;
            console.log(this.getProducts, "THis console is for get products")
            return this.getProducts.find(product => product._id === productId);

        }

    },
    methods: {
        homeRedirect() {
            if (!this.getProducts) {
                this.$router.push('/')
            }
        }
    },
    mounted() {
        console.log(this.get, "THis is a signle product")
        this.homeRedirect()
    },
    components: {
        selectedProduct,
        productDescription
    },


}
</script>

<style></style>