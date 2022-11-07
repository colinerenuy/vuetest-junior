
<script setup>
import { inject, onMounted, ref } from 'vue'
import Map from './Map.vue';
import { useRoute } from 'vue-router'
const axios = inject('axios')
const route = useRoute()
//Asynchronous function to fetch the business' data
const place = (await axios.get(`/businesses/${route.params.id}`)).data;
console.log(place)

//variables to make the dynamic integration easier, less prone to bugs if an element is missing, and more readable in HTML
let open = place.hours[0] ? (place.hours[0].open[0].start).substr(0,2) : "?";
let end = (place.hours[0].open[0].end).substr(0,2) ?? "?" ;
let address = place.location.address1 ?? "";
let price = place.price ? place.price.length : "";
let city = place.location.city;
let isClosed = place._isclosed ? "Closed":"OPEN NOW!";
let starsFilled = Math.floor(place.rating)
let starsEmpty = 5-starsFilled

</script>

<template>
 <div class="p-16 overflow-hidden flex flex-col justify-center items-center font-poppins ">
    <div id="header" class="text-lg w-full m-10 border border-black border-solid" >
      <div class="m-10" name= "textContainer">
        <span id="name" class="mt-2 block text-3xl text-center leading-8 font-megan tracking-tight text-gray-900 sm:text-5xl mt-10">{{ place.name }}</span>
        <span id="address" class="block font-poppins text-base text-center text-red-600 font-semibold tracking-wide uppercase">{{address}}, {{city}}</span>
        <div id="phone" class="mt-3 flex items-center justify-center underline block font-poppins text-base text-s text-center text-gray-400 tracking-wide">
          <PhoneFilled style="width: 1em; height: 1.5em; margin-right: 4px"/>
          {{place.phone}}</div>
      </div>
    </div>
   
    <div class="flex flex-row justify-between p-9 mb-4 min-w-0 bg-red-100 rounded-lg flex-wrap">
          <div class="flex flex-col items-start w-1/2 ">
            <p class="-mb-2 uppercase text-base text-gray-800 font-semibold tracking-wide">Best known for:</p>
            <div id="tagContainer" class="flex flex-column py-4">
              <span v-for="tag in place.categories" class=" h-[50px] p-1 min-w-[80px] justify-center rounded-lg text-center items-center mr-3 bg-white text-sm border border-black text-inherit min-w-[50px] flex">{{tag.title}}</span>
            </div>
          </div>
          <div class="flex flex-col" id="openingTimes">
            <p class="font-bold text-right {{isClosed}}? text-red-800 : text-green-800" id="status">{{isClosed}}</p>
            <p id="hours">Open from {{open}}h until {{end}}h</p>
          </div>
    </div>

    <div id="photo+ratings" class="flex justify-start"> 

      <div id="imgContainer" class="flex flex-col w-full h-[350px] min-h[300px]">
        <p class="uppercase text-base text-red-600 font-semibold tracking-wide">SNEAK PEAK:</p>
        <div class="flex flex-wrap flex-row overflow-auto w-full h-4/5 justify-start mt-4 ">
          <img v-for="photo in place.photos" class="h-full min-h-[100px] w-[180px] min-w-[100px] object-cover mr-7 rounded-lg" :src="photo"/>
        </div>
      </div>

    <div id="ratingsContainer" class="min-w-[160px] mt-10 max-h-[200px] p-4 border-4 border-red-600 border-dotted text-gray-200 mx-auto flex flex-col flex-start ">
      <div class="mx-auto flex flex-col ">
        <div id="priceContainer" class="my-5">
          <p class="font-megan text-gray-800 text-xl">Price Range</p>
          <div class="-mt-2 flex text-gray-800"><p v-for="dollar in price">$</p></div>
          
        </div>
        <div id="reviewContainer">
          <p class="font-megan text-xl text-gray-800">Reviews</p>
          <div class="flex -mt-2">
            <StarFilled v-for="star in starsFilled" style="width: 1em; height: 1.5em; color:#ffcd3c"/>
            <StarFilled v-for="star in starsEmpty" style="width: 1em; height: 1.5em; color:black"/>
          </div>
          <p id="nbReviews" class="text-gray-800 text-sm">({{place.review_count}})</p>
        </div>
       
    </div>
    </div>
    
    </div>
    <div id="mapContainer" class="py-4 h-[400px] w-[500px] min-w-[250px] min-h-[150px] rounded-lg bg-gray-200 flex justify-center flex-col items-center">
      <h3 class="text-base text-red-600 font-semibold tracking-wide uppercase my-5">Directions</h3>
      <Map class="w-full h-full border-2" :lat="place.coordinates.latitude" :lng="place.coordinates.longitude"></Map>
    </div>
 
</div>
</template>
