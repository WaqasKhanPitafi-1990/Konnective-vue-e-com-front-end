<template>
    <div class="c-container">
        <b-carousel id="carousel-1"   no-wrap  class="carousal-main" :interval="4000" controls indicators  img-width="1024"
            img-height="480"  @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide>
                <template #img>
                    <img class="d-block img-fluid w-100" width="1024" height="480" src="@/assets/images/carousel.png"
                        alt="image slot">
                </template>
                <div class="carousel-text">
                    <span class="carousel-top">{{ $t("carousel-top") }}</span>
                    <h1 class="carousel-head">{{ $t("carousal-trendings") }}</h1>
                    <div class="carousel-title"><span>{{ $t("carousal-organic") }}</span></div>
                    <button @click="navigateToShop" class="carousel-btn">{{ $t("carousal-shop-btn") }}
                        <svg class="next-icon" xmlns="http://www.w3.org/2000/svg" width="9.561" height="10.561"
                            viewBox="0 0 9.561 17.561">
                            <g id="Group_1378" data-name="Group 1378" transform="translate(-125.835 -1.926)">
                                <path id="arrow-right"
                                    d="M14.881,21.122a1,1,0,0,1-.707-1.707l7.561-7.561a1,1,0,0,1,1.414,1.414l-7.561,7.561A1,1,0,0,1,14.881,21.122Z"
                                    transform="translate(111.954 -1.635)" fill="#fff" />
                                <path id="arrow-right-2" data-name="arrow-right"
                                    d="M14.881,11.561a1,1,0,0,0-.707,1.707l7.561,7.561a1,1,0,0,0,1.414-1.414l-7.561-7.561A1,1,0,0,0,14.881,11.561Z"
                                    transform="translate(111.954 -9.635)" fill="#fff" />
                            </g>
                        </svg>
                    </button>
                </div>
            </b-carousel-slide>
            <b-carousel-slide>
                <template #img>
                    <img class="d-block img-fluid w-100" width="1024" height="480" src="@/assets/images/carousel.png"
                        alt="image slot">
                </template>
                <div class="carousel-text">
                    <span class="carousel-top">{{ $t("carousel-top") }}</span>
                    <h1 class="carousel-head">{{ $t("carousal-trendings") }}</h1>
                    <div class="carousel-title"><span>{{ $t("carousal-organic") }}</span></div>
                    <button @click="navigateToShop" class="carousel-btn">{{ $t("carousal-shop-btn") }}
                        <svg class="next-icon" xmlns="http://www.w3.org/2000/svg" width="9.561" height="10.561"
                            viewBox="0 0 9.561 17.561">
                            <g id="Group_1378" data-name="Group 1378" transform="translate(-125.835 -1.926)">
                                <path id="arrow-right"
                                    d="M14.881,21.122a1,1,0,0,1-.707-1.707l7.561-7.561a1,1,0,0,1,1.414,1.414l-7.561,7.561A1,1,0,0,1,14.881,21.122Z"
                                    transform="translate(111.954 -1.635)" fill="#fff" />
                                <path id="arrow-right-2" data-name="arrow-right"
                                    d="M14.881,11.561a1,1,0,0,0-.707,1.707l7.561,7.561a1,1,0,0,0,1.414-1.414l-7.561-7.561A1,1,0,0,0,14.881,11.561Z"
                                    transform="translate(111.954 -9.635)" fill="#fff" />
                            </g>
                        </svg>
                    </button>
                </div>
            </b-carousel-slide>
        </b-carousel>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        },
        navigateToShop() {
            this.$router.push('shop');
        }
    }
}

</script>
<style scoped>
.carousal-main {
    background: none;
}

.c-container {
    margin-top: 20px;
    position: relative;
}

.carousel-title {
    width: 100%;
    padding: 10px;
    background: var(--unnamed-color-729f28) 0% 0% no-repeat padding-box;
    background: #729F28 0% 0% no-repeat padding-box;
    margin-top: 1rem;
}

.carousel-title span {
    font: normal normal bold 40px/48px Lato;
    letter-spacing: 0px;
    padding: 8px;
    color: #FFFFFF;
    opacity: 1;
}

.carousel-btn {
    margin-top: 2rem;
    width: 36%;
    height: 50px;
    border: 1px white solid;
    background: none;
    color: white;
    font: normal normal normal 17px/21px Lato;
}

.carousel-top {
    font-size: 28px;
    color: #C4C4C4;
}

.next-icon {

    width: 10px;
    height: 14px;
    opacity: 1;
    margin-left: 0.7rem;
}

.carousel-head {
    margin-top: 8px;
}

@media only screen and (max-width:480px) {

    .carousel-head {
        margin-top: 0rem;
        font-size: 21px;
    }

    .carousel-title {
        width: 100%;
        padding: 4px;
        background: var(--unnamed-color-729f28) 0% 0% no-repeat padding-box;
        background: #729F28 0% 0% no-repeat padding-box;
        padding: 0px;
        margin-top: 0rem;

    }

    .carousel-title span {
        letter-spacing: 0px;
        padding: 8px;
        color: #FFFFFF;
        opacity: 1;
        font-size: 20px;
    }

    .carousel-btn {
        margin-top: 0rem;
        width: 41%;
        height: 32px;
        border: 1px white solid;
        background: none;
        color: white;
        font-size: 13px;
        margin-top: 0.8rem;
    }

    .carousel-top {
        font-size: 20px;
        color: #C4C4C4;
    }
}

/* tablet view */

@media only screen and (max-width: 991px) and (min-width: 768px) {}
</style>