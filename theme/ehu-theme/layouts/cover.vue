<template>
  <div class="slidev-layout cover bg-[#00D88C] relative overflow-hidden">
    <!-- Decorative white squares -->
    <div class="absolute -top-10 -right-10 w-64 h-64 bg-white opacity-20 transform rotate-12"></div>
    <div class="absolute top-20 right-20 w-32 h-32 bg-white opacity-40"></div>
    <div class="absolute bottom-10 right-32 w-16 h-16 bg-white opacity-60"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10"></div>
    
    <div class="absolute top-10 right-10 flex gap-2">
      <div class="w-8 h-8 bg-white"></div>
      <div class="w-8 h-8 bg-white opacity-50"></div>
      <div class="w-8 h-8 bg-white opacity-80"></div>
    </div>

    <!-- El logo corporativo sobre fondo blanco, pegado completamente arriba (top-0) -->
    <div class="absolute top-0 left-10 bg-white p-4 shadow-md w-48 z-20">
      <img :src="logoUrl" class="w-full block" alt="EHU Logo" />
    </div>
    
    <!-- El texto de la portada pegado abajo (bottom-10), garantizando el espacio verde en medio -->
    <div class="absolute bottom-10 left-10 bg-white p-10 w-[80%] max-w-4xl shadow-xl z-20">
      <slot />
    </div>
  </div>
</template>

<script setup>
import logoUrl from '../public/logo.svg'
</script>

<style>
.slidev-layout.cover {
  @apply flex flex-col justify-center text-left;
}

.slidev-layout.cover h1 {
  @apply text-6xl font-bold text-[#131313] mb-4;
}

.slidev-layout.cover h2 {
  @apply text-3xl font-medium text-[#131313] opacity-80 mt-2;
}

.slidev-layout.cover p {
  @apply text-xl text-[#131313] font-medium opacity-90;
}
</style>
