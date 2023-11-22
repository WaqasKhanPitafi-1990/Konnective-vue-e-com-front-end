
<template>
    <div class="shop-container">
        <div class="filter-row">
            <b-row>
                <b-col class="fasion-text" lg="6" sm="12" md="4">
                    <span class="fashion-title"> {{ $t("fashion-title") }}</span>
                </b-col>
                <b-col class="filters" lg="6" sm="7" md="8">
                    <div class="sort-by">
                        <div class="view">
                            <span class="filter-title">{{ $t("sort-by") }} :</span>
                            <div class="show-count">
                                <!-- <span class="dropdown-text">{{ $t("default-sorting") }}</span> -->
                                <div class="dropdown">
                                    <!-- <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2" dropleft
                                        variant="none">
                                        <b-dropdown-item @click="changeSorting(true)" href="#">Ascending</b-dropdown-item>
                                        <b-dropdown-item @click="changeSorting(false)" href="#">descending</b-dropdown-item>
                                    </b-dropdown> -->
                                    <b-dropdown id="dropdown-1" variant="none" text="Default Sorting">
                                        <b-dropdown-item @click="changeSorting(true)" href="#">Ascending</b-dropdown-item>
                                        <b-dropdown-item @click="changeSorting(false)" href="#">descending</b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="view">
                        <span class="filter-title">{{ $t("view") }}</span>
                        <div class="show-count">
                            <!-- <span class="dropdown-text">{{ $t("show") }}</span> -->
                            <div class="dropdown">
                                <!-- <b-dropdown id="dropdown-1" variant="none" v-model="perPage">
                                    <b-dropdown-item @click="updateProducts(option)" v-for="option in perPageOptions"
                                        :key="option" :value="option" href="#">
                                        {{ $t("show") }} {{ option }}
                                    </b-dropdown-item>
                                </b-dropdown> -->

                                <b-dropdown class="dropdown-text" id="dropdown-1" variant="none" text="Show">
                                    <b-dropdown-item @click="updateProducts(option)" v-for="option in perPageOptions"
                                        :key="option" :value="option" href="#">{{ option }}</b-dropdown-item>
                                </b-dropdown>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
        <div class="container">
            <b-row class="product-row mt-5">
                <b-col md="12" sm="12" lg="3">
                    <div class="pricing-filters">
                        <div class="filters">
                            <span class="price-tag">{{ $t("filters") }}</span>
                        </div>
                        <div class="price-range" style="margin-top: 1rem;">

                            <span style="margin-left:1rem;     color: #729F28;">{{ $t("price-range") }}</span>
                        </div>
                        <span class="sale-text">
                            <shopSlideingFilter @priceRangeChange="updatePriceRange" />
                        </span>

                        <hr style="margin-top: 3rem;" />
                        <div class="categories">
                            <span class="category-heading">{{ $t("by-category") }}</span>
                            <div :class="{ 'hide-brands': showBrand }" class="brands-container">

                                <span v-if="showBrand == false" class="view-more" @click="getBrand">
                                    {{ $t("show-categories") }}
                                    Categories
                                    <!-- {{ brand.name }} -->
                                    <i class="fa fa-solid fa-plus"></i>
                                </span>
                                <span v-else class="view-more" @click="getBrand">
                                    <div class="category-names" v-for="(brand, index) in category" :key="index">
                                        <b-form-checkbox size="lg" id="checkbox-1" name="checkbox-1">
                                        </b-form-checkbox>
                                        <span class="category-text">
                                            {{ brand.name }}
                                        </span>
                                    </div>
                                    {{ $t("hide-categories") }}
                                    <i class="fa fa-solid fa fa-minus">
                                    </i>
                                </span>
                            </div>

                        </div>
                        <hr style="margin-top: 3rem;" />
                        <div class="gender">
                            <span class="gender-heading">{{ $t("gender") }}</span>
                            <div class="gender-category">
                                <b-form-checkbox class="gender-cb" size="lg" id="checkbox-1" name="checkbox-1">
                                </b-form-checkbox>
                                <span class="gender-name">{{ $t("gender-male") }}</span>
                            </div>
                            <div class="gender-category">
                                <b-form-checkbox class="gender-cb" size="lg" id="checkbox-1" name="checkbox-1">
                                </b-form-checkbox>
                                <span class="gender-name">{{ $t("gender-female") }}</span>
                            </div>
                            <div class="gender-category">
                                <b-form-checkbox size="lg" class="gender-cb" id="checkbox-1" name="checkbox-1">
                                </b-form-checkbox>
                                <span class="gender-name">{{ $t("gender-others") }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="offer div">
                        <div class="text-container">
                            <span class="offer-title">{{ $t("offer-title") }}</span>
                        </div>
                        <div class="offer-description">
                            <span>Please send us your mail so you will receive offers and
                                discounts.
                            </span>
                        </div>
                        <div>
                            <b-row class="input-row">
                                <b-col class="input-col" cols="8" lg="8">
                                    <div>
                                        <b-form-input style="margin-top: 1rem; outline: none;" id="input-default"
                                            placeholder="Email Adress"></b-form-input>
                                    </div>
                                    <div>
                                        <b-button @click="showAlert" class="email-button">Submit</b-button>
                                    </div>
                                </b-col>
                                <b-col cols="4" class="kid-logo mt-4">
                                    <img src="@/assets/images/Group 1203.svg" />
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </b-col>
                <b-col class="products" md="12" lg="9" sm="9">
                    <b-row class="products-row">
                        <b-col lg="4" md="6" class="product-col" style="max-width:330px;" v-for="products in resultProducts"
                            :key="products._id">
                            <shopCard :product="products" />
                        </b-col>
                    </b-row>
                    <div style="display: flex; margin-top: 1rem; justify-content: center;" class="pagination">
                        <b-pagination style="gap: 1rem; border-radius: 50%;" v-model="currentPage"
                            :total-rows="this.totalPages" :per-page="perPage" aria-controls="categories"
                            @change="getPageProducts">
                        </b-pagination>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import shopCard from './shopCard.vue';
import shopSlideingFilter from './shopSlideingFilter.vue';
import axios from 'axios';
import { mapGetters, mapState } from 'vuex';
export default ({

    data() {
        return {
            perPage: 6,
            totalPages: 0,
            perPageOptions: [6, 8, 12, 18],
            imageUrl: "",
            currentPage: 1,
            resultProducts: [],
            priceRange: 2000, //price range 
            category: [],  //for category
            showBrand: true,
            IssortByAsc: true,
        }
    },
    computed: {
        ...mapGetters("productModule", ['getProducts']),
        ...mapState("productModule", ['products']),
    },
    methods: {
        showAlert() {
            window.alert(' Successfully Submitted ')
        },
        changeSorting(val) {
            this.currentPage = 1
            this.IssortByAsc = val;
            this.getPageProducts();
        },
        getBrand() {
            this.showBrand = !this.showBrand
        },
        updateProducts(selectedPerPage) {
            this.perPage = selectedPerPage;
            this.currentPage = 1;
            this.getPageProducts();
        },
        updatePriceRange(newRange) {
            this.priceRange = newRange;
            this.getPageProducts(1);
        },

        sortByAsc(products) {
            return products.sort((a, b) => {
                if (a.price <= b.price) {
                    return -1;
                }
                else if ((a.price > b.price)) {
                    return 1
                }
                return 0
            })
        },
        sortByDsc(products) {
            return products.sort((a, b) => {
                if (b.price <= a.price) {
                    return -1;
                }
                else if ((b.price > a.price)) {
                    return 1
                }
                return 0
            })
        },
        fetchCategories() {
            axios.get(process.env.VUE_APP_API_V1_BASE_URL + "/home/categories").then(
                (res => {
                    let response = res.data;
                    this.category = (response.data)
                    // this.setApiData(response.data);
                    // localStorage.setItem('shopApiData',  JSON.stringify(response.data))
                    console.log(response.data, "The Data is fetched Properly in categories")
                    //this.getPageProducts(this.currentPage)
                })
            ).catch(error => {
                console.log(error);
                this.error = true;
            })
        },
        getPageProducts(page) {
            if (page) this.currentPage = page;
            let start = (this.currentPage - 1) * this.perPage;
            let end = start + this.perPage;
            var allProducts = this.products.filter(p => p.price >= 0 && p.price <= this.priceRange);

            // localStorage.setItem( JSON.stringify(allProducts))
            // this.totalPages = Math.ceil(allProducts.length / this.perPage); // Update totalPages based on perPage
            this.totalPages = allProducts.length;
            this.resultProducts = this.IssortByAsc ? this.sortByAsc(allProducts).slice(start, end) :
                this.sortByDsc(allProducts).slice(start, end);
            const allProductsJSON = JSON.stringify(this.resultProducts);
            localStorage.setItem('resultProducts', allProductsJSON);
        },
        // setLocalStorage() {
        //     const allProductsJSON = JSON.stringify(this.products);
        //     localStorage.setItem('products', allProductsJSON);
        // },
    },
    mounted() {
        this.imageUrl = process.env.VUE_APP_API_BASE_URL + 'api'
        this.fetchCategories();
        this.getPageProducts(this.currentPage);
        // this.setLocalStorage();
    },
    components: {
        // CategoryCard,
        shopCard,
        shopSlideingFilter
    },
    created() {
        let shopProductData = localStorage.getItem('resultProducts');
        if (shopProductData) {
            this.resultProducts = JSON.parse(shopProductData);
        } else {
            console.log(this.resultProducts, 'this is data in local storage')
        }
    }
})
</script>
    
<style scoped>
.price-tag {
    background: #729F28 0% 0% no-repeat padding-box;
    width: 100%;
    display: flex;
    height: 60px;
    font-size: 23px;
    align-items: center;
    color: white;
    padding-left: 1rem;
}

.categories {
    display: flex;
    flex-direction: column;
}

.view-more {
    margin-left: 1rem;
    color: #8C5E1A;
    margin-top: 1rem;
    font-size: 18px;
}

.dropdown-sort {
    background: none;
    color: black;
}

.category-names {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.gender {
    display: flex;
    flex-direction: column;
}

.gender-heading {
    letter-spacing: 0px;
    color: #729F28;
    margin-left: 1rem;

}

.category-text {
    margin-left: 1rem;
}

.gender-category {
    display: flex;
    align-items: center;
    color: #8C5E1A;
    flex-direction: row;
    margin-left: 0.9rem;
}

.gender-name {
    margin-left: 0.5rem;
}

.sale-text {
    margin-top: 2rem;
}

.category-heading {
    letter-spacing: 0px;
    color: #729F28;
    margin-left: 1rem;
}

.category-name {
    margin-left: 1rem;
    margin-top: 0.5rem;
}

.product-col {
    justify-content: center;
    width: 370px;
    /* border: 2px solid #8C5E1A0D; */
    border-radius: 18px;
    opacity: 1;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    margin-left: 1rem;
    box-shadow: none;
}

.pricing-filters {
    display: flex;
    height: fit-content;
    padding: 0px;
    flex-direction: column;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #DEDEDF;
    border-radius: 4px;
    padding-bottom: 1rem;
}

.brands-container.hide-brands {
    height: 149px;
    overflow: hidden;
    display: flex;
}

.brands-container {
    height: fit-content;
}


.price-range {
    display: flex;
    flex-direction: row;
}


.fasion-text {
    display: flex;
    justify-content: center;
}

.filter-row {
    margin-top: 3rem;

}

.filters {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.show-count {
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
    align-items: center;
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    padding: 0.4rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
}


.sort-by {
    display: flex;
    flex-direction: row;
}

.filter-title {
    margin-top: 0.8rem;
    color: #BDBDBD;
}

.dropdown-text {
    color: #BDBDBD;
    background: none;
    outline: none;
    border: none;
}

.view {
    display: flex;
    flex-direction: row;
}

.fashion-title {
    font-size: 25px;
    display: flex;
    align-items: center;
}

.offer-title {
    text-align: left;
    font: normal normal 600 18px/62px Lato;
    letter-spacing: 0px;
    color: #8C5E1A;
    opacity: 1;
}

.offer-description {
    width: 80%;
}

.input-row {
    display: flex;
    flex-direction: row;
}

.input-col {
    display: flex;
    flex-direction: column;
}

.email-button {
    background: var(--unnamed-color-729f28) 0% 0% no-repeat padding-box;
    background: #729F28 0% 0% no-repeat padding-box;
    margin-top: 1rem;
    opacity: 1;
    border: none;
}

@media only screen and (max-width:1199px) and (min-width:991px) {

    .products-row {
        justify-content: center;
        /* margin-top: 4rem; */
    }
}

@media only screen and (max-width:480px) {

    .filters {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 2rem;
    }

    .products-row {
        justify-content: center;
        margin-top: 4rem;
    }

    .product-col {
        width: 195px;
        border: 0px;
        border-radius: 18px;
        opacity: 1;
        margin-bottom: 1rem;
        margin-left: 0rem;
    }

    .shop-banner {
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }

    .show-count {
        font-size: 13px;
        padding: 0.2rem
    }

    .shop-text {
        font-size: 25px;
        color: #FFFFFF;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        margin-top: 2rem;
    }

    .price-tag {
        background: #729F28 0% 0% no-repeat padding-box;
        width: 100%;
        display: flex;
        height: 50px;
        align-items: center;
        color: white;
        padding-left: 1rem;
        justify-content: center;
    }

    .products {
        padding-top: 0rem;
    }

    .fashion-title {
        font-size: 20px;
    }

    .email-button {
        width: 50%;
        font-size: 15px;
        margin-top: 0.4rem;
    }



}

@media only screen and (max-width: 991px) and (min-width: 768px) {

    .fasion-text {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fashion-title {
        font-size: 20px;
    }

    .kid-logo {
        margin-top: 0px;
    }

    .products-row {
        justify-content: center;
        margin-top: 4rem;
    }

    .product-col {
        justify-content: center;
        width: 240px;
        flex-wrap: wrap;
        margin-bottom: 1rem;
        margin-left: 0rem;
    }


    .review {
        font-size: 14px;
    }


}
</style>
    