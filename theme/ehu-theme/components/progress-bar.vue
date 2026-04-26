<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import { slides } from '#slidev/slides'

const { currentPage, total, currentLayout } = useNav()

const progress = computed(() => {
  if (total.value <= 1) return 0
  return ((currentPage.value - 1) / (total.value - 1)) * 100
})

const getSlideTitle = (index: number) => {
  // En las versiones recientes de Slidev, las rutas de las diapositivas contienen los metadatos
  const slide = slides.value[index]
  const title = slide?.meta?.slide?.title || slide?.meta?.title
  return title ? title : `Diapositiva ${index + 1}`
}
</script>

<template>
  <!-- Ocultamos la barra en la portada y la última diapositiva -->
  <div 
    v-if="!['cover', 'end'].includes(currentLayout)"
    class="absolute top-0 left-0 right-0 h-[4px] bg-[#00D88C]/20 z-[1000]"
  >
    <!-- Barra de progreso visual -->
    <div 
      class="absolute top-0 left-0 bottom-0 bg-[#00D88C] transition-all duration-300 ease-out"
      :style="{ width: `${progress}%` }"
    />
    
    <!-- Capa interactiva: dividimos la barra en segmentos iguales, uno por diapositiva -->
    <div class="absolute top-0 left-0 w-full flex h-[16px]">
      <router-link
        v-for="i in total"
        :key="i"
        :to="`/${i}`"
        class="flex-1 h-full relative group cursor-pointer"
      >
        <!-- Marcador visual constante para cada diapositiva (puntos negros/blancos) -->
        <div 
          class="absolute top-[2px] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-30"
          :class="[
            i === currentPage ? 'w-[8px] h-[8px] bg-[#131313] rounded-full ring-2 ring-white shadow-md' : 
            i < currentPage ? 'w-[4px] h-[4px] bg-[#131313] rounded-full opacity-60' : 
            'w-[4px] h-[4px] bg-[#131313]/20 rounded-full'
          ]"
        />

        <!-- Cuadradito de hover (el que ya existía, pero mejorado) -->
        <div class="absolute top-[2px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-[#00D88C] border-2 border-white rounded-[2px] opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-md z-40" />

        <!-- Tooltip con el título de la diapositiva -->
        <div class="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-3 py-1.5 bg-[#131313] text-white text-[12px] font-bold whitespace-nowrap rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
          {{ getSlideTitle(i - 1) }}
        </div>
      </router-link>
    </div>
  </div>
</template>
