<script setup>
import { onMounted, ref } from 'vue';
import { useStoryblokBridge, useStoryblokApi } from '@storyblok/vue';
 
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/about', {
  version: 'draft',
});
 
const story = ref(null);
story.value = data.story;

onMounted(() => {
  useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
});
</script>
 
<template>
  <Page
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  />
</template>