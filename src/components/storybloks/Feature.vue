<template>
  <div v-editable="blok" class="py-2">
    <h2 class="text-lg">{{ blok.name }}</h2>
  </div>
</template>
 
<script setup>
const props = defineProps({
  blok: Object
});
</script>