<template>
  <div class="relative h-full w-full">
    <div class="absolute w-full h-full min-h-[350px]" ref="mapContainer"></div>
  </div>
</template>

<script>
import { Map } from 'maplibre-gl';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';

export default {
  name: "Map",
  props: ['lng', 'lat'],
  setup () {
    const mapContainer = shallowRef(null);
    const map = shallowRef(null);

    onMounted(() => {
      const apiKey = 'stv9ki5dZyueRQnWGSwd';
      const initialState = { lng: -73.971321, lat:40.776676, zoom: 15 };

      map.value = markRaw(new Map({
        container: mapContainer.value,
        style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
      }));

    }),
    onUnmounted(() => {
      map.value?.remove();
    })

    return {
      map, mapContainer
    };
  }
};
</script>