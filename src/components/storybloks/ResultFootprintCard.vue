<script setup>
import { onMounted, ref } from 'vue';
import { useStoryblokBridge, useStoryblokApi } from '@storyblok/vue';

import CardContent from "@/components/storybloks/CardContent.vue";
 
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/result-footprint', {
  version: 'draft',
});
 
const story = ref(null);
story.value = data.story;

onMounted(() => {
  useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
});
</script>

<template>
  <CardContent
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  />
  <a class="swipe-button green">Wischen zum Vergleichen</a>
</template>

<style lang="scss">

.swipe-button {
        display: inline-flex;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    padding: 15px 35px;
    border-radius: 50px;
    color: #fff;
    box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
    text-decoration: none;
    font-weight: 500;
        justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    @media screen and (max-width: 576px) {
      width: 100%;
    }
}
</style>