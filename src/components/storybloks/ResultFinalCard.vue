<script setup>
import { onMounted, ref } from 'vue';
import { useStoryblokBridge, useStoryblokApi } from '@storyblok/vue';

import CardContent from "@/components/storybloks/CardContent.vue";
 
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/card-final', {
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
</template>
