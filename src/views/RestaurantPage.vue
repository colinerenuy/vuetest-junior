<script setup>
import TheRestaurant from '@/components/TheRestaurant.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

</script>

<template>
  <TheHeader />
  <!-- The Container -->
  <div class="mx-39">
    <Suspense>
      <TheRestaurant />
      <template #fallback>
        <div class="h-[30rem] flex flex-col items-center p-10">
          <Text class="font-megan text-3xl text-indigo-600 h-500">Loading...</Text>
          <img src="/images/Spinner-1.1s-341px.gif" alt="Loading" />
        </div>
      </template>
    </Suspense>
  </div>
  <TheFooter />
</template>
