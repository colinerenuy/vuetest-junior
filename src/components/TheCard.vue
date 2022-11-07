<script>
export default {
    props: ['name', 'address', 'phone', 'src', 'id', 'price', 'rating', 'tags', 'reviews', 'url', 'distance'],
    template: '<div>Place{{ id }}</div>'
}

</script>

<template>
  
  <div class="flex justify-center">
  <div class="rounded-lg shadow-lg max-w-sm">
      <a :href="'/place/' + id" :id="id">
        <div class="max-h-[260px] overflow-hidden flex">
          <img class="rounded-t-lg object-cover" :src="src" alt="Restaurant photo"/>
        </div>
       </a>
    <div class="p-6">
      <div id="infosheader" class="mb-7">
        <h5 class="text-gray-900 text-3xl font-megan">{{name}}</h5>
        <div class="flex justify-between align-end mt-3"> 
          <p class="font-poppins text-base mb-3 text-mg text-red-400 font-semibold tracking-wide uppercase">{{address}}</p>
          <p class="underline">{{phone}}</p>
        </div>
       
        <p class="bg-gray-200 flex p-1 text-xs w-3/6 rounded-lg"> <Place class="mx-2 text-red-600 w-[1.3em] h-[1.3e]"/> {{distance}}m from your position.</p>
      </div>
      <div id="infosCard" class="flex flex-row">
        
        <div id="tagContainerLeft" class="w-2/5 flex align-center flex-col mr-3">
          <p class="font-poppins text-gray-700 text-base underline">Categories:</p>
          <span v-for = "(tag,i) in tags">
            <span class="text-sm">{{tag.title}}</span>
            <span v-if="i+1 < tags.length">, </span>
          </span>
        </div>

          <div id="rightContainer" class="flex flex-col">
            <div id="ratingsContainer" class="flex align-center">
              <p class="font-poppins text-gray-700 text-base mb-4 mr-2">Rating:</p>
              <StarFilled v-for="star in Math.floor(rating)" style="width: 1.5em; height: 1.5em; color:#ffcd3c"/>
              <StarFilled v-for="star in 5-Math.floor(rating)" style="width: 1.5em; height: 1.5em; color:grey"/>
            </div>
            <p class="text-xs text-right -mt-3">({{reviews}} reviews)</p>

        <div id="priceContainer" class="flex align-center mt-5">
          <p class="font-poppins text-gray-700 text-base mb-4 mr-2">Price Range:</p>
          <p v-if="!price">Unknown</p>
          <p class="font-poppins text-gray-700 text-base mb-4" v-if="price.length" v-for="dollar in price.length">$</p>
        </div>
      </div>

      </div>

      <div id="buttonContainer" class="mt-7">
        <button type="button" class=" mr-10 inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-200 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">See more</button>
      <button type="button" class=" inline-block px-4 py-2.5 bg-red-200 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
        <a :href="url" :url="url">Go to Yelp</a>
      </button>
      </div>
    </div>
  </div>
</div>
</template>

