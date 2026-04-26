<template>
  <div class="slidev-layout cover bg-gradient-to-br from-[#00D88C] to-[#00b072] relative overflow-hidden">
    <!-- Decorative white squares/elements for a more modern look -->
    <div class="absolute -top-10 -right-10 w-96 h-96 bg-white opacity-10 transform rotate-45 rounded-3xl"></div>
    <div class="absolute top-1/4 -right-20 w-64 h-64 border-8 border-white opacity-10 transform -rotate-12 rounded-full"></div>
    <div class="absolute bottom-20 right-20 w-32 h-32 bg-white opacity-20 transform rotate-12"></div>
    <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-white opacity-10 transform rotate-12 rounded-full"></div>
    
    <div class="absolute top-10 right-10 flex gap-2">
      <div class="w-8 h-8 bg-white"></div>
      <div class="w-8 h-8 bg-white opacity-50"></div>
      <div class="w-8 h-8 bg-white opacity-80"></div>
    </div>

    <!-- El logo corporativo sobre fondo blanco, pegado arriba -->
    <div class="absolute top-0 left-10 bg-white p-4 shadow-md w-48 z-20 rounded-b-lg">
      <img :src="logoUrl" class="w-full block" alt="EHU Logo" />
    </div>
    
    <!-- El texto de la portada empieza horizontalmente donde termina el logo (left-60) -->
    <div class="absolute bottom-10 left-60 bg-white p-10 w-fit max-w-[calc(100%-17rem)] shadow-2xl z-20 border-l-[12px] border-[#131313] max-h-[calc(100%-10rem)] overflow-y-auto hide-scrollbar">
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
  @apply text-5xl font-black leading-tight;
  color: #131313;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.slidev-layout.cover h2 {
  @apply text-3xl font-bold;
  color: #131313;
  opacity: 0.9;
  margin-top: 0.5rem;
}

.slidev-layout.cover p {
  font-size: 1.25rem;
  color: #131313;
  font-weight: 500;
  opacity: 0.9;
}

/* Ocultar barra de desplazamiento manteniendo funcionalidad */
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
