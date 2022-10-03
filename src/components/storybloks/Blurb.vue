<template>
  <div v-editable="blok" class="py-8 mb-6 text-5xl font-bold text-center blurb">
    {{ blok.main }}
  </div>
</template>
 
<script setup>
const props = defineProps({
  blok: Object
});
</script>

<style scoped>
.blurb {
  margin: 10px 0;
  font-style: italic;
  font-weight: bold;
  font-size: 1.2em;
}
</style>