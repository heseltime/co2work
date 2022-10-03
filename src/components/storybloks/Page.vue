<template>
  <div v-editable="blok" class="px-6">
    <h1>{{ blok.title }}</h1>
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    />
  </div>
</template>
 
<script setup>
const props = defineProps({
  blok: Object
});
</script>

<style scoped>
</style>