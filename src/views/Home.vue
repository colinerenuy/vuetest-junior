<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <!-- The Container -->
  <div class="mx-52">
    <TheWelcome />
  </div>
  <TheFooter />
</template>
