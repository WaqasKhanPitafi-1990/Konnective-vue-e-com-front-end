<template>
    <div class="parent-container">
        <div class="title-heading">
            <span>{{ $t("testimonial-heading") }}</span>
            <span class="testimonial-heading">{{ $t("testimonial-desc") }}</span>
        </div>
        <b-container>
            <b-row class="card-row">
                <!-- <b-col cols="12" sm="12" lg="12" md="12" class="testimonial-cont"> -->
                <VueSlickCarousel v-bind="settings">
                    <b-col cols="8" lg="12" sm="12" md="12" class="slick-carousal"
                        v-for="(testimonial, index) in  testimonials" :key="'testimonial-' + index">
                        <testimonialCard :testimonial="testimonial" />
                    </b-col>
                </VueSlickCarousel>
                <!-- </b-col> -->
            </b-row>

        </b-container>
    </div>
</template>
<script>
import testimonialCard from "./testimonialCard.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
    data() {
        return {
            settings: {
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 3,
                slidesToScroll: 3,
            },

            testimonials: [
                {
                    imageUrl:
                        "https://cdn.ishop.cholobangla.com/uploads/thumb-product-1-1.webp ",
                    name: "Alexander",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                    region: "UK",
                },
                {
                    imageUrl:
                        "https://cdn.ishop.cholobangla.com/uploads/thumb-product-1-1.webp ",
                    name: "Alexander",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                    region: "UK",
                },
                {
                    imageUrl:
                        "https://cdn.ishop.cholobangla.com/uploads/thumb-product-1-1.webp ",
                    name: "Alexander",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                    region: "UK",
                },
                {
                    imageUrl:
                        "https://cdn.ishop.cholobangla.com/uploads/thumb-product-1-1.webp ",
                    name: "Alexander",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
                    region: "UK",
                },


            ],
        };
    },

    components: {
        testimonialCard,
        VueSlickCarousel
    },
};
</script>
<style scoped>
.parent-container {
    margin-top: 5rem;
}

.title-heading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.testimonial-heading {
    font-size: 35px;
    font: normal normal 600 Lato;
    letter-spacing: 0px;
    color: #8C5E1A;
}

.testimonial-cont {
    margin-top: 4rem;

}

.card-row {
    gap: 1rem;
}

.card {
    width: 380px;
    display: flex;
    justify-content: center;
    margin-left: 2rem;
}

.card-body {
    display: flex;
    justify-content: center;
    align-items: center;
}



@media only screen and (max-width:991px) and (min-width:768px) {
    .card {
        width: 200px;
        margin-left: 2rem;
    }

    .body-text {
        padding: 0rem;
        margin-top: 0rem;
        font-size: 10px;
    }

    .title-heading {
        margin-bottom: 2rem;
    }
}


@media only screen and (max-width:480px) {
    .card {
        width: 126px;
        margin-left: 0rem;
    }

    .quote {
        height: 25px;
    }

    .testimonial-heading {
        margin-bottom: 2rem;
        font-size: 25px;
    }

    .title-heading {
        margin-bottom: 2rem;
        font-size: 22px;
    }

}

@media only screen and (max-width:1199px) and (min-width:991px) {
    .card {
        width: 270px;
        display: flex;
        justify-content: center;
        margin-left: 2rem;

    }

    .title-heading {
        margin-bottom: 2rem;
    }

    .body-text {
        padding: 0rem;
        font-size: 12px;
    }

}

@media only screen and (max-width:2450px) and (min-width:1199px) {
    .title-heading {
        margin-bottom: 2rem;
    }
}</style>