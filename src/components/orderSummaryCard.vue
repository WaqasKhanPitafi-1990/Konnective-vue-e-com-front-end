<template>
    <b-row class="summary-main">
        <b-col cols="3">
            <img width="100%" :src="imageUrl + summaryCard.thumbnailImage" alt="image" />
        </b-col>
        <b-col style="display: flex; flex-direction: column; gap: 0.5rem;" cols="4">
            <span>
                {{ summaryCard.name }}
            </span>
            <span class="quantity">
                Quantity: {{ summaryCard.quantity }}
            </span>
        </b-col>
        <b-col style="display:  flex ; justify-content: flex-end;" cols="4">
            <span>
                {{ summaryCard.price }}
            </span>
        </b-col>
    </b-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            imageUrl: ""
        }
    },
    props: ['summaryCard'],
    computed: {
        ...mapState('productModule', ['cart']),

    },
    mounted() {
        this.imageUrl = process.env.VUE_APP_API_BASE_URL + 'api'
    },
}
</script>

<style scoped>
.summary-main {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #C7C7C7;
    padding: 1rem;

}

.body-content {
    display: flex;
    flex-direction: column;
}

.products {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}


.subTotal {
    text-align: left;
    font: normal normal normal 22px/27px Lato;
    letter-spacing: 0px;
    display: flex;
    color: #787878;
    opacity: 1;
    justify-content: flex-end;
    margin-top: 1rem;
}

.product-quantity {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.quantity {
    text-align: left;
    color: #BDBDBD;
    opacity: 1;
}

@media only screen and (max-width:991px) and (min-width: 767px) {

    .summary-card {
        margin-top: 3rem;
    }


}
</style>