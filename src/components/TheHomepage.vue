
<script>

import TheCard from './TheCard.vue';

//Trying to create a Vue component without script setup
export default {
  components: {
    TheCard
  },
  data() {
    return {
      places: []
    }
  },
  created() {
    this.fetchData();
  },

  inject: ['axios'],

  methods: {
    async fetchData() {
      const resp = await this.axios.get('/businesses/search?location=485_7th_Ave,_New_York&radius=700&term=dinner&sort_by=review_count');
      console.log(resp);
      this.places = resp.data.businesses;
    }
  }
}

</script>

<template>
 <div class="w-100 py-16 bg-white overflow-hidden ">
  <div class="relative px-4 sm:px-6 lg:px-8 min-h-[100px]">
        <span class="mt-2 block text-3xl text-center leading-8 font-megan tracking-tight sm:text-5xl mt-10">Where to?</span>
        <span class=" block  font-poppins text-base text-center text-red-400 font-semibold tracking-wide uppercase">Discover the best restaurants near you.</span>
  </div>
    <div id="placesContainer" class="w-full justify-center overflow-auto flex flex-col items-center mt-6 rose prose-indigo prose-lg text-gray-500 mx-auto">
      <div id="places" class=" h-1/20 w-full mx-5 my-5" v-for="place in places"> 
        <TheCard :reviews="place.review_count" 
        :tags="place.categories" 
        :price="place.price ? place.price : false" 
        :rating="place.rating" 
        :id="place.id" 
        :name="place.name" 
        :src="place.image_url" 
        :address="place.location.address1" 
        :phone="place.phone"
        :url="place.url"
        :distance="Math.floor(place.distance)">
      </TheCard>
      </div>
    </div>

  </div>
</template>
