<script setup lang="ts">
const props = defineProps<{ url: string }>()
</script>
<template>
  <div class="slidev-layout iframe w-full h-full p-0">
    <iframe :src="props.url" class="w-full h-full border-none" />
  </div>
</template>
