<template>
  <div id="app">
    <div>
      <pageCarousel />
      <productTitle />
      <featuredProducts />
      <servicesOffered />
      <popularCategoryButton />
      <!-- <popularCategory /> -->
      <Subscribe />
      <clientTestimonials />
    </div>
  </div>
</template>
<script>
import Subscribe from '@/components/subscribe.vue';
import clientTestimonials from '@/components/clientTestimonials.vue';
import popularCategory from '@/components/popularCategory.vue';
import servicesOffered from '../components/servicesOffered.vue';
import popularCategoryButton from '@/components/popularCategoryButton.vue';
import pageHeader from '../components/pageHeader.vue';
import productTitle from '../components/productTitle.vue';
import navbar from '../components/navBar.vue';
import pageCarousel from '../components/pageCarousel.vue';
import featuredProducts from '../components/featuredProducts.vue';
export default {
  name: 'App',
  components: {
    pageHeader,
    clientTestimonials,
    Subscribe,
    navbar,
    pageCarousel,
    productTitle,
    featuredProducts,
    servicesOffered,
    popularCategoryButton,
    popularCategory,
  }
}
</script>
  

  