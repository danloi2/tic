<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  image: { type: String },
  class: { type: String },
  backgroundSize: { type: String, default: 'cover' },
})

const style = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: props.backgroundSize,
}))
</script>

<template>
  <div class="slidev-layout image-left w-full h-full grid grid-cols-2">
    <div class="h-full w-full" :style="style" />
    <div class="h-full w-full p-16 flex flex-col justify-center bg-white border-l-[12px] border-[#00D88C]" :class="props.class">
      <slot />
    </div>
  </div>
</template>
