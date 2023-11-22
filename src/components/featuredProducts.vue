
<template>
    <div class="container">
        <b-row class="product-row">
            <b-col class=" product-col" lg="2" sm="5" md="3" v-for="product in getProducts" :key="product._id">
                <productCard :product="product" />
            </b-col>
        </b-row>
    </div>
</template>
<script>
import productCard from './productCard.vue';
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios'
export default ({
    data() {
        return {
            products: [],
        }
    },
    computed: {
        ...mapGetters("productModule", ['getProducts', 'getFilteredProducts']),
  
    },
    methods: {
        ...mapActions("productModule", ['setApiData']),
        fetchProducts() {
            axios.get(process.env.VUE_APP_API_V1_BASE_URL + "/home/top-products")
                .then(res => {
                    let response = res.data;
                    let data = [
                        {
                            "_id": "64957e49f80dd715106ba081",
                            "name": "Nike Air ",
                            "summary": "Versatile running shoe with responsive cushioning and lightweight design.",
                            "description": "<p>Versatile running shoe with responsive cushioning and lightweight design.</p>",
                            "price": 149,
                            "discount": 0,
                            "priceAfterDiscount": 1499,
                            "images": [
                                ""
                            ],
                            "thumbnailImage": "/uploads/product/image/thumbnail_image-1686050521221-download-2.jpg",
                            "category": "6465ec16cf3178de7590f976",
                            "subcategory": "6465ec6bcf3178de7590f97c",
                            "brand": "6465eaffcf3178de7590f96d",
                            "quantity": 40,
                            "status": "active",
                            "featured": true,
                            "stock_available": [
                                {
                                    "size": "sm",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d4"
                                },
                                {
                                    "size": "md",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d5"
                                },
                                {
                                    "size": "lg",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d6"
                                },
                                {
                                    "size": "xl",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d7"
                                }
                            ],
                            "createdAt": "2023-06-05T10:23:36.655Z",
                            "updatedAt": "2023-06-06T11:22:13.033Z",
                            "slug": "nike-air-zoom-pegasus 8",
                            "__v": 0
                        },

                        {
                            "_id": "64957e3ff80dd715106ba080",
                            "name": "Puma Air Zoom Pegasus 7",
                            "summary": "Versatile running shoe with responsive cushioning and lightweight design.",
                            "description": "<p>Versatile running shoe with responsive cushioning and lightweight design.</p>",
                            "price": 200,
                            "discount": 0,
                            "priceAfterDiscount": 1499,
                            "images": [
                                ""
                            ],
                            "thumbnailImage": "/uploads/product/image/thumbnail_image-1686050521221-download-2.jpg",
                            "category": "6465ec16cf3178de7590f976",
                            "subcategory": "6465ec6bcf3178de7590f97c",
                            "brand": "6465eaffcf3178de7590f96d",
                            "quantity": 40,
                            "status": "active",
                            "featured": true,
                            "stock_available": [
                                {
                                    "size": "sm",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d4"
                                },
                                {
                                    "size": "md",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d5"
                                },
                                {
                                    "size": "lg",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d6"
                                },
                                {
                                    "size": "xl",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d7"
                                }
                            ],
                            "createdAt": "2023-06-05T10:23:36.655Z",
                            "updatedAt": "2023-06-06T11:22:13.033Z",
                            "slug": "nike-air-zoom-pegasus 7",
                            "__v": 0
                        },
                        {
                            "_id": "64957e35f80dd715106ba07f",
                            "name": "Adidas Air Zoom Pegasus 6",
                            "summary": "Versatile running shoe with responsive cushioning and lightweight design.",
                            "description": "<p>Versatile running shoe with responsive cushioning and lightweight design.</p>",
                            "price": 300,
                            "discount": 0,
                            "priceAfterDiscount": 1499,
                            "images": [
                                ""
                            ],
                            "thumbnailImage": "/uploads/product/image/thumbnail_image-1686050521221-download-2.jpg",
                            "category": "6465ec16cf3178de7590f976",
                            "subcategory": "6465ec6bcf3178de7590f97c",
                            "brand": "6465eaffcf3178de7590f96d",
                            "quantity": 40,
                            "status": "active",
                            "featured": true,
                            "stock_available": [
                                {
                                    "size": "sm",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d4"
                                },
                                {
                                    "size": "md",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d5"
                                },
                                {
                                    "size": "lg",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d6"
                                },
                                {
                                    "size": "xl",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d7"
                                }
                            ],
                            "createdAt": "2023-06-05T10:23:36.655Z",
                            "updatedAt": "2023-06-06T11:22:13.033Z",
                            "slug": "nike-air-zoom-pegasus 6",
                            "__v": 0
                        },
                        {
                            "_id": "64957e0ff80dd715106ba07e",
                            "name": "jordan Air Zoom Pegasus 5",
                            "summary": "Versatile running shoe with responsive cushioning and lightweight design.",
                            "description": "<p>Versatile running shoe with responsive cushioning and lightweight design.</p>",
                            "price": 309,
                            "discount": 0,
                            "priceAfterDiscount": 1499,
                            "images": [
                                ""
                            ],
                            "thumbnailImage": "/uploads/product/image/thumbnail_image-1686050521221-download-2.jpg",
                            "category": "6465ec16cf3178de7590f976",
                            "subcategory": "6465ec6bcf3178de7590f97c",
                            "brand": "6465eaffcf3178de7590f96d",
                            "quantity": 40,
                            "status": "active",
                            "featured": true,
                            "stock_available": [
                                {
                                    "size": "sm",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d4"
                                },
                                {
                                    "size": "md",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d5"
                                },
                                {
                                    "size": "lg",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d6"
                                },
                                {
                                    "size": "xl",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d7"
                                }
                            ],
                            "createdAt": "2023-06-05T10:23:36.655Z",
                            "updatedAt": "2023-06-06T11:22:13.033Z",
                            "slug": "nike-air-zoom-pegasus 5",
                            "__v": 0
                        },
                        {
                            "_id": "64957e06f80dd715106ba07d",
                            "name": "yeezy Air Zoom Pegasus 4",
                            "summary": "Versatile running shoe with responsive cushioning and lightweight design.",
                            "description": "<p>Versatile running shoe with responsive cushioning and lightweight design.</p>",
                            "price": 409,
                            "discount": 0,
                            "priceAfterDiscount": 1499,
                            "images": [
                                ""
                            ],
                            "thumbnailImage": "/uploads/product/image/thumbnail_image-1686050521221-download-2.jpg",
                            "category": "6465ec16cf3178de7590f976",
                            "subcategory": "6465ec6bcf3178de7590f97c",
                            "brand": "6465eaffcf3178de7590f96d",
                            "quantity": 40,
                            "status": "active",
                            "featured": false,
                            "stock_available": [
                                {
                                    "size": "sm",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d4"
                                },
                                {
                                    "size": "md",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d5"
                                },
                                {
                                    "size": "lg",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d6"
                                },
                                {
                                    "size": "xl",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d7"
                                }
                            ],
                            "createdAt": "2023-06-05T10:23:36.655Z",
                            "updatedAt": "2023-07-06T09:58:00.049Z",
                            "slug": "nike-air-zoom-pegasus 4",
                            "__v": 0
                        },
                        {
                            "_id": "64957df0f80dd715106ba07c",
                            "name": "stars Air Zoom Pegasus 3",
                            "summary": "Versatile running shoe with responsive cushioning and lightweight design.",
                            "description": "<p>Versatile running shoe with responsive cushioning and lightweight design.</p>",
                            "price": 599,
                            "discount": 0,
                            "priceAfterDiscount": 1499,
                            "images": [
                                ""
                            ],
                            "thumbnailImage": "/uploads/product/image/thumbnail_image-1686050521221-download-2.jpg",
                            "category": "6465ec16cf3178de7590f976",
                            "subcategory": "6465ec6bcf3178de7590f97c",
                            "brand": "6465eaffcf3178de7590f96d",
                            "quantity": 40,
                            "status": "active",
                            "featured": true,
                            "stock_available": [
                                {
                                    "size": "sm",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d4"
                                },
                                {
                                    "size": "md",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d5"
                                },
                                {
                                    "size": "lg",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d6"
                                },
                                {
                                    "size": "xl",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d7"
                                }
                            ],
                            "createdAt": "2023-06-05T10:23:36.655Z",
                            "updatedAt": "2023-06-06T11:22:13.033Z",
                            "slug": "nike-air-zoom-pegasus 3",
                            "__v": 0
                        },
                        {
                            "_id": "64957dcdf80dd715106ba07b",
                            "name": "others Air Zoom Pegasus 2",
                            "summary": "Versatile running shoe with responsive cushioning and lightweight design.",
                            "description": "<p>Versatile running shoe with responsive cushioning and lightweight design.</p>",
                            "price": 699,
                            "discount": 0,
                            "priceAfterDiscount": 1499,
                            "images": [
                                ""
                            ],
                            "thumbnailImage": "/uploads/product/image/thumbnail_image-1686050521221-download-2.jpg",
                            "category": "6465ec16cf3178de7590f976",
                            "subcategory": "6465ec6bcf3178de7590f97c",
                            "brand": "6465eaffcf3178de7590f96d",
                            "quantity": 40,
                            "status": "active",
                            "featured": true,
                            "stock_available": [
                                {
                                    "size": "sm",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d4"
                                },
                                {
                                    "size": "md",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d5"
                                },
                                {
                                    "size": "lg",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d6"
                                },
                                {
                                    "size": "xl",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d7"
                                }
                            ],
                            "createdAt": "2023-06-05T10:23:36.655Z",
                            "updatedAt": "2023-06-06T11:22:13.033Z",
                            "slug": "nike-air-zoom-pegasus 2",
                            "__v": 0
                        },
                        {
                            "_id": "647db7a88e652813ee8168d3",
                            "name": "flats Air Zoom Pegasus",
                            "summary": "Versatile running shoe with responsive cushioning and lightweight design.",
                            "description": "<p>Versatile running shoe with responsive cushioning and lightweight design.</p>",
                            "price": 799,
                            "discount": 0,
                            "priceAfterDiscount": 1499,
                            "images": [
                                ""
                            ],
                            "thumbnailImage": "/uploads/product/image/thumbnail_image-1686050521221-download-2.jpg",
                            "category": "6465ec16cf3178de7590f976",
                            "subcategory": "6465ec6bcf3178de7590f97c",
                            "brand": "6465eaffcf3178de7590f96d",
                            "quantity": 40,
                            "status": "active",
                            "featured": true,
                            "stock_available": [
                                {
                                    "size": "sm",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d4"
                                },
                                {
                                    "size": "md",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d5"
                                },
                                {
                                    "size": "lg",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d6"
                                },
                                {
                                    "size": "xl",
                                    "available": 10,
                                    "_id": "647db7a88e652813ee8168d7"
                                }
                            ],
                            "createdAt": "2023-06-05T10:23:36.655Z",
                            "updatedAt": "2023-06-06T11:22:13.033Z",
                            "slug": "nike-air-zoom-pegasus",
                            "__v": 0
                        }
                    ]
                    this.setApiData(data);
                    localStorage.setItem('apiData', JSON.stringify(response.data));
                    console.log(res.data, "this Api is for the Featured Products")

                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
    components: {
        productCard,
    },
    created() {
        this.fetchProducts();

        const storedApiData = localStorage.getItem('apiData');
        if (storedApiData) {
            // Parse the stored data and set it to your Vuex store (optional)
            this.setApiData(JSON.parse(storedApiData));
        }
    }
})
</script>
    
<style scoped>
.product-col {
    margin-top: 2rem;
    justify-content: center;
    width: 370px;
    /* border: 2px solid #8C5E1A0D; */
    border-radius: 18px;
    opacity: 1;

}

.product-row {
    gap: 1rem;
}



@media only screen and (max-width: 991px) and (min-width: 768px) {

    .product-row {
        display: flex;
        justify-content: center;
        margin: auto;
    }

}

@media only screen and (max-width: 1199px) and (min-width: 991px) {

    .product-row {
        display: flex;
        justify-content: center;
        margin: auto;
    }

}


@media only screen and (max-width:480px) {
    .product-row {
        gap: 1rem;
        display: flex;
        justify-content: center;
    }

    .product-row {
        gap: 0rem;
        justify-content: center;
        margin: none;
    }

    .product-col {
        /* margin-top: 1rem; */
        width: 300px;
        /* opacity: 1; */
    }
}

@media only screen and (min-width:768px) and (max-width:991px) {
    .product-col {
        width: 330px;
    }

    .product-row {
        gap: 0rem;
    }
}


@media only screen and (max-width:2450px) and (min-width:1199px) {
    .product-col {
        width: 330px;
        position: relative;
    }

}

@media only screen and (max-width:1199px) and (min-width:991px) {
    .product-col {
        width: 300px;
    }

}
</style>
    