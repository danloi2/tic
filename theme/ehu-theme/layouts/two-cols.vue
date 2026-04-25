<script setup lang="ts">
const props = defineProps({
  class: { type: String },
})
</script>

<template>
  <div class="slidev-layout two-cols w-full h-full grid grid-cols-2 gap-8" :class="props.class">
    <div class="col-left w-full h-full">
      <slot />
    </div>
    <div class="col-right w-full h-full">
      <slot name="right" />
    </div>
  </div>
</template>
