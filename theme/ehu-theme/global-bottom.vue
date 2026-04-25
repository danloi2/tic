<template>
  <!-- Mostramos el número de diapositiva en todas excepto en la portada (cover) -->
  <div
    v-if="!['cover', 'index', 'section', 'end', 'fact', 'statement'].includes($slidev.nav.currentLayout)"
    class="absolute bottom-6 right-6 bg-[#131313] text-white text-[11px] px-3 py-1 font-bold z-50 min-w-[50px] text-center"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </div>
</template>
