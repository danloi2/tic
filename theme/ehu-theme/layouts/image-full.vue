<template>
  <div class="slidev-layout image-full h-full w-full relative p-0 overflow-hidden">
    <!-- Main Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
      :style="style"
    ></div>
    
    <!-- Dark Gradient Overlay for readability -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

    <!-- Glassmorphism Content Box -->
    <div class="absolute bottom-12 left-12 right-12 z-10 backdrop-blur-md bg-white/10 border border-white/20 p-10 rounded-2xl shadow-2xl animate-fade-in-up">
      <div class="prose prose-invert max-w-none">
        <slot />
      </div>
    </div>

    <!-- Institutional Logo (Glass style) -->
    <div class="absolute top-8 left-8 backdrop-blur-sm bg-white/80 p-3 rounded-lg shadow-lg w-40">
      <img :src="logoUrl" class="w-full" alt="EHU Logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import logoUrl from '../public/logo.svg'

const props = defineProps({
  image: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
})

const style = computed(() => handleBackground(props.image, false, props.backgroundSize))
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

:deep(h1) {
  @apply text-5xl font-bold text-white mb-4 border-none !important;
}

:deep(p) {
  @apply text-2xl text-white/90 leading-relaxed;
}

:deep(strong) {
  @apply text-[#00D88C] font-bold;
}
</style>
