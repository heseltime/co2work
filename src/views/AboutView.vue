<script setup>
import TheAbout from "@/components/storybloks/TheAbout.vue";
</script>

<template>
  <div class="about">
    <Suspense>
      <template #default>
        <TheAbout />

      </template>
  
      <template #fallback>
        <div>Loading...</div>
        
      </template>
    </Suspense>
    <p><a href="https://www.linkedin.com/company/cowork-ooe" alt="Linkedin" target="blank">Cowork OÖ auf LinkedIn</a></p>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

p {
  clear: both;
  display: block;
  padding: 20px;
  margin: 10px;
  background: #eee;
}
</style>
