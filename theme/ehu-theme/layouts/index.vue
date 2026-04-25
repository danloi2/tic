<template>
  <div class="slidev-layout index bg-[#00D88C] relative flex justify-center items-center">
    <!-- Logo en bloque blanco arriba a la izquierda (consistente con el resto) -->
    <div class="absolute top-0 left-0 w-[140px] h-[140px] bg-white z-20" :style="{ backgroundImage: `url(${logoUrl})`, backgroundSize: '100px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"></div>

    <div class="z-10 relative bg-white min-w-[90%] max-w-[98%] h-auto min-h-[70%] max-h-[92%] pt-8 pb-8 px-16 shadow-2xl flex flex-col items-start border-l-[16px] border-[#131313] transition-all duration-300 mt-16">
      <div class="w-full flex-1">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import logoUrl from '../public/logo.svg'
</script>

<style>
/* Estilos específicos para el título dentro del índice para que no ocupe tanto espacio */
.slidev-layout.index h1 {
  @apply text-4xl mb-4 border-b-4 pb-1 !important;
}
.slidev-layout.index ol {
  @apply p-0 m-0 grid grid-cols-2 gap-x-8 gap-y-2 items-start;
  counter-reset: index-counter;
  list-style: none;
}

.slidev-layout.index ol > li {
  counter-increment: index-counter;
  @apply text-2xl text-[#131313] font-semibold flex items-start;
}

.slidev-layout.index ol > li::before {
  content: counter(index-counter, decimal-leading-zero);
  @apply w-9 h-9 bg-[#131313] text-white flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold;
}

/* Estilos para sub-listas dentro del índice */
.slidev-layout.index li ul {
  @apply mt-1 ml-4 space-y-0.5 opacity-70;
  list-style: none;
}

.slidev-layout.index li ul li {
  @apply text-base font-medium flex items-center;
}

.slidev-layout.index li ul li::before {
  content: "";
  @apply w-2 h-0.5 bg-[#00D88C] mr-2;
}
</style>
