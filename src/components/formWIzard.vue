<template>
    <div class="wrapper-stepper">
        <div style="margin: 4rem;" class="stepper">
            <div class="stepper-progress">
                <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
            </div>
            <div class="stepper-item" :class="{ current: step == item, success: step > item }" v-for="item in 3"
                :key="item">
                <div class="stepper-item-counter">
                    <img class="icon-success"
                        src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
                        alt="" />
                    <span class="number">
                        {{ item }}
                    </span>
                </div>
                <span v-if="item == 1" class="stepper-item-title">
                    {{ $t("shopping-cart") }}
                </span>
                <span v-if="item == 2" class="stepper-item-title">

                    {{ $t("proceed-to-checkout") }}
                </span>
                <span v-if="item == 3" class="stepper-item-title">
                    {{ $t("order-complete") }}
                </span>
            </div>
        </div>
        <div class="stepper-content" v-for="item in 1" :key="item">
            <div v-if="step == 1">
                <!-- <span class="cart-title">{{ $t("shopping-cart") }}</span> -->
                <b-row class="prod-row">
                    <b-col sm="4" md="4" lg="4">
                        <span>{{ $t("product") }}</span>
                    </b-col>
                    <b-col sm="3" md="3" lg="2">
                        <span>{{ $t("price") }}</span>
                    </b-col>
                    <b-col sm="2" md="3" lg="2">
                        <span>{{ $t("quantity") }}</span>
                    </b-col>
                    <b-col sm="2" md="2" lg="2">
                        <span>{{ $t("subtotal") }}</span>
                    </b-col>

                </b-row>
                <div>
                    <CartDetailsMain />
                </div>
            </div>
            <div class="stepper-pane" v-if="step == 2">
                <div>
                    <paymentMain />
                </div>
            </div>
            <div class="stepper-pane" v-if="step == 3">
                <div>
                    <orderDetailsMain />
                </div>
            </div>

        </div>

        <div class="controls">
            <button class="btn" @click="step--" :disabled="step == 1">{{ $t("go-back") }}</button>
            <button class="btn btn--green-1" @click="navigateToNextStep">
                <!-- <button class="btn btn--green-1" @click="step++" :disabled="step == 4"> -->
                {{ $t("continue") }}
            </button>
        </div>
    </div>
</template>

<script>
// import orderComplete from './orderComplete.vue'
import paymentMain from '../components/paymentMain.vue';
// import subscribe from "./subscribe.vue";
import CartDetailsMain from "./CartDetailsMain.vue";
import orderDetailsMain from './orderDetailsMain.vue';
export default {
    props: ['defaultStep'],
    data() {
        return {
            step: 1,

        };
    },
    computed: {
        stepperProgress() {
            return (100 / 3) * (this.step - 1) + "%";
        },
    },
    watch: {
        step(val) {
            this.stepChanged(val);
        }
    },
    components: {
        CartDetailsMain,
        paymentMain,
        // orderComplete,
        orderDetailsMain
    },
    mounted() {
        if (this.defaultStep) {
            this.step = this.defaultStep
        }
    },
    methods: {
        navigateToNextStep() {
            // console.log(this.step)
            switch (this.step) {
                // case 1:
                //     this.$router.push({ name: "shoppingCart" })
                //     break;
                case 1:
                    this.$router.push({ name: "deliveryDetails" })
                    break;
                case 2:
                    this.$router.push({ name: "reviewOrder" })
                    break;
                case 3:
                    this.$router.push({ name: "orderComplete" })
                    break;

            }
        },

        // navigateToprevStep() {
        //     this.$router.go(-1)
        // },
        stepChanged(val) {
            this.$emit('change', val || this.step)
        }
    }
};
</script>

<style lang="scss" scoped>
$default: #c5c5c5;
$green-1: #729F28;
$transiton: all 500ms ease;

body {
    background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
    color: #ffffff;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
}

.product-names {
    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #C7C7C7;
    padding: 1rem;
}

.prod-row {
    justify-content: space-between;
}

.cart-title {
    font-size: 30px;
    color: #6F9642;
    margin-bottom: 2rem;
    opacity: 1;
}

.tx-green-1 {
    color: $green-1;
    font-weight: 600;
}

.wrapper-stepper {
    background-color: #fff;
    border-radius: 32px;
    box-shadow: rgba($color: #000000, $alpha: 0.09);
}

.stepper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 660px;
    position: relative;
    z-index: 0;
    margin-bottom: 24px;

    &-progress {
        position: absolute;
        background-color: $default;
        height: 2px;
        z-index: -1;
        left: 0;
        right: 0;
        margin: 0 auto;

        &-bar {
            position: absolute;
            left: 0;
            height: 100%;
            width: 0%;
            background-color: $green-1;
            transition: $transiton;
        }
    }
}

.stepper-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $default;
    transition: $transiton;

    &-counter {
        height: 68px;
        width: 68px;
        display: grid;
        place-items: center;
        background-color: #fff;
        border-radius: 100%;
        border: 2px solid $default;
        position: relative;

        .icon-success {
            position: absolute;
            opacity: 0;
            transform: scale(0);
            width: 24px;
            transition: $transiton;
        }

        .number {
            font-size: 22px;
            transition: $transiton;
        }
    }

    &-title {
        position: absolute;
        font-size: 14px;
        bottom: -24px;
        width: 25%;
        text-align: center;
        margin-left: 20px;
    }
}

.stepper-item.success {
    .stepper-item-counter {
        border-color: $green-1;
        background-color: #c8ebc1;
        color: #fff;
        font-weight: 600;

        .icon-success {
            opacity: 1;
            transform: scale(1);
        }

        .number {
            opacity: 0;
            transform: scale(0);
        }
    }

    .stepper-item-title {
        color: $green-1;
    }
}

.stepper-item.current {
    .stepper-item-counter {
        border-color: $green-1;
        background-color: $green-1;
        color: #fff;
        font-weight: 600;
    }

    .stepper-item-title {
        color: #818181;
        width: 21%;
    }
}

.stepper-pane {
    color: #333;
    // text-align: center;
    box-shadow: 0 8px 12px rgba($color: #000000, $alpha: 0.09);
    margin: 40px 0;
}

.controls {
    display: flex;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 16px;
    border: 1px solid;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    line-height: 1.5;
    transition: all 150ms;
    border-radius: 4px;
    width: fit-content;
    font-size: 0.75rem;
    color: #333;
    background-color: #f0f0f0;
    border-color: #f0f0f0;

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    &--green-1 {
        background-color: $green-1;
        border-color: $green-1;
        color: #fff;
        margin-left: auto;
    }
}

@media only screen and (max-width: 1199px) and (min-width: 991px) {

    .stepper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 460px;
        position: relative;
        z-index: 0;
        margin-bottom: 24px;

    }
    .items-row {
    justify-content: space-between;
    margin-top: 2rem;
}
.image-title {
    margin-left: 1rem;
    font-size: 14px;
}
.stepper-item-title{
    font-size: 13px;
    bottom: -28px;
    width: 28%;
}
.stepper-item.current .stepper-item-title[data-v-64766c82] {
    font-size: 13px;
    bottom: -28px;
    width: 28%;
}
}

@media only screen and (max-width:480px) {
    .stepper {

        width: 300px;

    }


    .stepper-item-counter .icon-success {
        width: 13px;
    }

    .stepper-item.success .stepper-item-title {
        color: #75cc65;
    }

    .stepper-item-title {
        font-size: 8px;
    }

    .stepper-item-counter {
        height: 40px;
        width: 40px;
    }

    .row > * {
     width: 0% !important; 
}
    .items-row {
        align-items: center;
    }
    .prod-row{
        max-width: 85%;
        margin-top: 2rem;
    }
}

@media only screen and (max-width:991px) and (min-width: 767px) {
    .stepper {
        width: 560px;
    }

    .stepper-item-title {
        font-size: 12px;
    }

    .items-row {
        align-items: center;
    }

    .prod-row {
        justify-content: space-between;
    }

}</style>
