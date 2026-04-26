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

<style lang="postcss">
.slidev-layout.cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.slidev-layout.cover h1 {
  font-size: 3.75rem;
  font-weight: 700;
  color: #131313;
  margin-bottom: 1rem;
}

.slidev-layout.cover h2 {
  font-size: 1.875rem;
  font-weight: 500;
  color: #131313;
  opacity: 0.8;
  margin-top: 0.5rem;
}

.slidev-layout.cover p {
  font-size: 1.25rem;
  color: #131313;
  font-weight: 500;
  opacity: 0.9;
}
</style>
