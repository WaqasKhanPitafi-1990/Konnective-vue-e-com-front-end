<template>
    <div>

        <div class="container ">
            <span class="delivery-title"> {{ $t("delievery-information") }}</span>
        </div>
        <div>
            <delieveryInformation />
        </div>



    </div>
</template>

<script>
import subscribe from './subscribe.vue';
import delieveryInformation from './delieveryInformation.vue';
export default {

    data() {
        return {
        }

    },
    components: {
        delieveryInformation,
        subscribe,
    },
}
</script>

<style scoped>
.payment-banner {
    background-image: url(../assets/images/Group\ 1381.svg);
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.summary-card {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.payment-text {
    font-size: 35px;
    color: #FFFFFF;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 2rem;
}

.delivery-title {
    font-size: 30px;
    color: #6F9642;
    opacity: 1;
    margin-left: 2rem;
    width: 40%;
}

@media only screen and (max-width:991px) and (min-width: 767px) {
    .payment-text {
        font-size: 10px;
        color: #BDBDBD;
        text-align: center;
    }

    .summary-card {
        margin-top: 4rem;
    }
}

</style>