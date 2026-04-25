<script setup lang="ts">
const props = defineProps<{ url: string; class?: string }>()
</script>
<template>
  <div class="slidev-layout iframe-right w-full h-full grid grid-cols-2">
    <div class="h-full w-full p-10 flex flex-col justify-center" :class="props.class">
      <slot />
    </div>
    <div class="h-full w-full">
      <iframe :src="props.url" class="w-full h-full border-none" />
    </div>
  </div>
</template>
