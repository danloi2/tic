<script setup lang="ts">
const props = defineProps({
  class: { type: String },
})
</script>

<template>
  <div class="slidev-layout two-cols-header w-full h-full flex flex-col" :class="props.class">
    <div class="w-full mb-8">
      <slot />
    </div>
    <div class="w-full flex-1 grid grid-cols-2 gap-8">
      <div class="col-left w-full h-full">
        <slot name="left" />
      </div>
      <div class="col-right w-full h-full">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
