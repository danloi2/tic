<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  image: { type: String },
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
  <div class="slidev-layout image w-full h-full p-0 relative" :style="style">

    
    <div class="h-full w-full p-16 flex flex-col justify-end items-start relative z-10">
       <div class="bg-white/90 backdrop-blur-md p-10 shadow-2xl border-l-[8px] border-[#00D88C] max-w-2xl">
          <slot />
       </div>
    </div>
  </div>
</template>
