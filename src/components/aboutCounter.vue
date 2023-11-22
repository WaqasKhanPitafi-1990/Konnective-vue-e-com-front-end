<template>
    <div class="counter-container">
        <b-row class="counter-image">
            <b-col>
                <div class="counter-main">
                    <div class="counters">
                        <div style="display: flex; flex-direction: column;">
                            <template>
                                <div class="iCountUp">
                                    <ICountUp class="counter-text" :delay="1000" :endVal="276" :options="options" />
                                </div>
                            </template>
                            <span class="count-description">{{ $t("skilled-professionals") }}</span>
                        </div>
                    </div>
                    <div class="counters">
                        <div style="display: flex; flex-direction: column; text-align: center;">
                            <template>
                                <div class="iCountUp">
                                    <ICountUp class="counter-text" :delay="2000" :endVal="37428" :options="options" />
                                </div>
                            </template>
                            <span class="count-description">{{ $t("happy-customers") }}</span>
                        </div>
                    </div>
                    <div class="counters">
                        <div style="display: flex; flex-direction: column;">
                            <template>
                                <div class="iCountUp">
                                    <ICountUp class="counter-text" :delay="2500" :endVal="45861" :options="options" />
                                </div>
                            </template>
                            <div></div>
                            <span class="count-description">{{ $t("orders-delieverd") }}</span>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
        <clientTestimonials />
    </div>
</template>
<script type="text/babel">
import ICountUp from 'vue-countup-v2';
import clientTestimonials from './clientTestimonials.vue';
export default {
    name: 'demo',
    components: {
        ICountUp,
        clientTestimonials
    },
    data() {
        return {

            options: {
                useEasing: true,
                useGrouping: true,

            }
        };
    },

};
</script>
<style scoped>
.counter-image {
    background-image: url(../assets/images/counterbackground.svg);
    width: 100%;
    height: 300px;
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;

}

.counter-main {
    display: flex;
    justify-content: space-evenly;
}

.counter-text {
    font-size: 35px;
    color: #FFFFFF;

}

.counters {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 200px;
    width: 200px;
    padding-left: 0rem;
    border-radius: 50%;
    background: rgba(211, 210, 210, 0.2);
}

.count-description {
    color: white;
}



@media only screen and (max-width:480px) {

    .counter-image {
        height: 200px;
        margin-top: 2rem;
    }

    .counters {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 100px;
        padding-left: 1rem;
        border-radius: 50%;
        background: rgba(211, 210, 210, 0.2);
    }

    .counter-text {
        font-size: 18px;
        color: #FFFFFF;
        margin-left: 0rem;
    }

    .count-description {
        color: white;
        font-size: 11px;
    }
}
</style>