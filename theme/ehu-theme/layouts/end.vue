<template>
  <div class="slidev-layout end bg-[#00D88C] relative flex flex-col justify-center items-center text-center">
    
    <!-- Logo UPV arriba a la derecha en caja blanca -->
    <div class="absolute top-0 right-10 bg-white p-4 shadow-md w-48 z-20">
      <img :src="logoUrl" class="w-full block" alt="EHU Logo" />
    </div>
    
    <!-- Texto principal en caja en blanco pegado abajo para asegurar espacio verde -->
    <div class="absolute bottom-12 left-10 bg-white p-12 w-[60%] max-w-2xl shadow-xl z-20 text-left border-l-[16px] border-[#131313]">
      <slot />
    </div>

  </div>
</template>

<script setup>
import logoUrl from '../public/logo.svg'
</script>

<style>
.slidev-layout.end h1 {
  @apply text-5xl font-bold mb-4 border-b-6 border-[#00D88C] pb-1 inline-block !important;
  color: #131313 !important;
}

.slidev-layout.end h2 {
  @apply text-3xl font-semibold italic text-gray-600 mb-2 mt-0 !important;
}

.slidev-layout.end h3 {
  @apply text-2xl font-bold text-[#006B3D] !important;
}

.slidev-layout.end p {
  @apply text-xl text-[#131313] leading-snug;
}
</style>
