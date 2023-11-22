<template >
    <b-card>
        <div class="quotation-img">
            <template>
                <img class="quote" src="@/assets/images/Group 1289.svg" alt="">
            </template>
        </div>

        <div class="image-circles">
            <div class="outer-circle">
                <div class="inner-circle">
                    <div class="img-div">
                        <template>
                            <img class="inner-image" :src=testimonial.imageUrl style="
         width: 80%;
         border-radius:50%;
         padding: 10px;
          margin-top: 1rem; ">

                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="body-text">
            <div class="testimonial-description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy xysuo
            </div>
            <div class="testimonial-name">
                {{ testimonial.name }}
            </div>
            <div class="testimonial-region">
                {{ testimonial.region }}
            </div>

        </div>
    </b-card>
</template>
<script>
export default {
    props: ['testimonial'],
}
</script>

<style scoped>
.quotation-img {
    margin-left: 1rem;
}

.image-circles {
    display: flex;
    justify-content: center;
}

.outer-circle {
    background: purple;
    border-radius: 50%;
    height: 160px;
    width: 160px;
    position: relative;
}

.inner-circle {
    position: absolute;
    background: #729F28;
    border-radius: 50%;
    height: 130px;
    width: 130px;
    top: 9%;
    left: 9%;
}

.image-circle {
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-div {
    display: flex;
    width: 100%;
    justify-content: center;
}

.body-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem;
    margin-top: 2rem;
}

.testimonial-description {
    margin: 0.5rem;
}

.testimonial-name {
    margin: 0.5rem;
    font: normal normal bold 16px/20px Lato;
    letter-spacing: 0px;
    color: #8C5E1A;
    opacity: 1;
}

.testimonial-region {
    margin: 0.5 rem;
    color: var(--unnamed-color-729f28);
    font: normal normal normal 16px/20px Lato;
    letter-spacing: 0px;
    color: #729F28;
    opacity: 1;
}

@media only screen and (max-width:480px) {


    .body-text {
        padding: 0rem;
        margin-top: 0rem;
        font-size: 10px;
    }

    .outer-circle {
        background: purple;
        border-radius: 50%;
        height: 90px;
        z-index: 1;
        width: 90px;
        position: relative;
    }

    .inner-circle {
        position: absolute;
        background: #729F28;
        border-radius: 50%;
        height: 70px !important;
        width: 70px !important;
        top: 11%;
        left: 11%;
    }

    .img-div {
        border-radius: 50%;
        padding: 0px;
        margin-top: 0rem;
    }

    .testimonial-description {
        margin: 0.5rem;
        font-size: 10px;
        text-align: center;
    }

    .quote {
        height: 15px;
        margin-left: 4rem;
    }

    .inner-image {
        margin-top: 0.5rem !important;
    }

}

@media only screen and (max-width:991px) and (min-width:768px) {
    .quotation-img {
        display: flex;
        /* justify-content: flex-end; */
        margin-bottom: 1rem;
    }

    .testimonial-description {
        text-align: center;
    }
    .body-text {
    padding:0rem;
    margin-top: 1rem;
}
    .outer-circle {
        height: 130px;
        width: 130px;
    }

    .inner-circle {
        height: 110px;
        width: 110px;
        top: 7%;
        left: 8%;
    }

    .quote {
        height: 25px;
    }

    .inner-image {
        padding: 10px;
        margin-top: 0.7rem;
    }
}
</style>