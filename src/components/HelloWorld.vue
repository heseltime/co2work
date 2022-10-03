<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

import TheHeader from "@/components/storybloks/TheHeader.vue";
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <Suspense>
        <template #default>
          <TheHeader />
        </template>
    
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
