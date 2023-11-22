<template>
    <div class="container">
        <b-row>
            <b-col class="categories-title">
                <span>
                    {{ $t('view-our') }}
                </span>
                <span class="category-text">
                    {{ $t("popular-categories") }}
                </span>
            </b-col>
        </b-row>
        <b-row>
            <div class="categories-button">
                <b-col sm="2" md="12" lg="12">
                    <div class="c-buttons" style="">
                        <button class="c-btn-fill " v-for="productType in productTypes" :key="productType"
                            @click="selectedProductType = productType"
                            :class="{ active: selectedProductType === productType }">
                            {{ productType }}
                            <!-- {{ $t("new-arrival-btn") }} -->
                        </button>
                    </div>
                </b-col>
            </div>
            <div>
                <component :is="selectedProductTypeComponent"></component>
            </div>

            <!-- 
                <b-col sm="2" md="2" lg="2">
                    <div>
                        <button class="c-btn">{{ $t("best-seller-btn") }}</button>
                    </div>
                </b-col>
                <b-col sm="2" md="2" lg="2">
                    <div>
                        <button class="c-btn">{{ $t("most-popular-btn") }}</button>
                    </div>

                </b-col>
                <b-col sm="2" md="2" lg="2">
                    <div>
                        <button class="c-btn">{{ $t("hot-deals") }}</button>
                    </div>
                </b-col> -->

        </b-row>
    </div>
</template>

<script>
import hotDeals from './hotDeals.vue';
import popularCategory from './popularCategory.vue';
import bestSeller from './bestSeller.vue';
import mostPopular from './mostPopular.vue';
export default {
    data() {
        return {
            productTypes: ['New Arrivals', 'Best Seller', 'Most Popular', 'Hot Deals'],
            selectedProductType: 'New Arrivals',
        }
    },

    components: {
        hotDeals,
        bestSeller,
        mostPopular,
        popularCategory
    },
    computed: {
        selectedProductTypeComponent() {
            switch (this.selectedProductType) {
                case 'New Arrivals':
                    return 'popularCategory';
                case 'Best Seller':
                    return 'bestSeller';
                case 'Most Popular':
                    return 'mostPopular';
                case 'Hot Deals':
                    return 'hotDeals';
                default:
                    return 'null';

            }
        }
    },
}
</script>

<style scoped>
.categories-title {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    flex-direction: column;
}

.categories-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 1rem;

}

.c-buttons {
    display: flex;
    gap: 1rem;
    flex-direction: row;
    justify-content: center;
}

.category-text {
    text-align: center;
    font: normal normal 600 Lato;
    letter-spacing: 0px;
    font-size: 2rem;
    color: #8C5E1A;
    opacity: 1;
}

.btn-div {
    display: flex;
    width: 10%;
    justify-content: center;
    border-radius: 4px;
}

.c-btn {
    width: 200px;
    border: 1px solid #CCCCCC;
    outline: none;
    cursor: pointer;
    padding: 6px;
    border-radius: 4px;
    font: normal normal normal 18px/24px Circular Std Book;
    color: #CCCCCC;
}

.c-btn-fill {
    color: #CCCCCC;
    ;
    width: 200px;
    border: 1px solid #CCCCCC;
    ;
    outline: none;
    cursor: pointer;
    padding: 6px;
    border-radius: 4px;
    font: normal normal normal 18px/24px Circular Std Book;
}

.c-btn-fill.active {
    background: #729F28 0% 0% no-repeat padding-box;
    color: white;
}



@media only screen and (max-width:480px) {
    .btn-div {
        display: flex;
        width: 100% !important;
        justify-content: center;
        border-radius: 4px;
    }

    .categories-button {
        gap: 0.5rem;
    }

    .c-buttons {
        gap: 0.5rem;
    }

    .c-btn {
        width: 90px;
        padding: 2px;
        font-size: 13px;
    }

    .c-btn-fill {
        width: 90px;
        font-size: 13px;
        padding: 2px;

    }
}

@media only screen and (max-width: 1199px) and (min-width: 991px) {


    .c-btn {
        width: 150px;
    }

    .c-btn-fill {
        width: 150px;
    }

    .btn-div {
        display: flex;
        width: 100% !important;
        justify-content: center;
        border-radius: 4px;
    }

    .btn-div {
        display: flex;
        width: 100%;
        justify-content: center;
        border-radius: 4px;
    }

    .c-btn-fill {
        padding: 6px;
        border-radius: 4px;
    }

    .c-btn {
        padding: 6px;
    }


}

@media only screen and (max-width:991px) and (min-width:768px) {
    .categories-button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        gap: 4rem;
    }

    .c-btn-fill {

        width: 130px;
    }

    .c-btn {
        width: 130px;
        padding: 6px;
    }

    .categories-button {
        gap: 2rem;
    }
}</style>