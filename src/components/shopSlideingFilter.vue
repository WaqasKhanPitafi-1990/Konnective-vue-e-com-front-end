
<template>
  <div class="app-content" style="display: flex; justify-content: center;">
    <!-- <vue-range-slider style="width: 80%; margin-top: 2rem;" v-model="priceRange" 
    :min="minPrice" 
    :max="maxPrice"
      @change="handleRangeChange()">
    </vue-range-slider> -->
    <!-- <span>{{ priceRange.minPrice }}</span> -->
    <input class="slider" type="range" id="vol" value="0" name="vol" v-model="priceRange" :min="minPrice"
      :max="maxPrice" @change="handleRangeChange">
    <!-- <span>{{ priceRange.maxPrice }}</span> -->
  </div>
</template>
<script>
import 'vue-range-component/dist/vue-range-slider.css'
// import VueRangeSlider from 'vue-range-component'
// import { mapActions, mapGetters } from 'vuex';

export default {
  props: {

  },

  data() {
    return {
      minPrice: 0,
      maxPrice: 2000,
      priceRange: [this.minPrice, this.maxPrice]
    };
  },
  methods: {
    handleRangeChange() {
      console.log('priceRangeChange method', this.priceRange)
      this.$emit('priceRangeChange', this.priceRange);
    }
  },
  components: {
    // VueRangeSlider
  },


};



</script> 
<style scoped>
.price-range {
  width: 80%;
  color: #729F28;

}


.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 80%;
  border-radius: 6px;
  height: 8px;
  background: #729F28;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #729F28;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #729F28;
  cursor: pointer;
}

</style>