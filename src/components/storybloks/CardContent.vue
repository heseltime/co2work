<template>
  <div v-editable="blok" class="py-2">
    <span class="blog-slider__code">{{ blok.unit }}</span>
    <div class="blog-slider__title">{{ blok.headline }}</div>
    <div class="blog-slider__text">{{ blok.main }}</div>
    
  </div>
</template>
 
<script setup>
const props = defineProps({
  blok: Object
});
</script>