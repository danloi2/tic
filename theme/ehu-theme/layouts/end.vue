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

<style lang="postcss">
.slidev-layout.end h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border-bottom: 6px solid #00D88C;
  padding-bottom: 0.25rem;
  display: inline-block !important;
  color: #131313 !important;
}

.slidev-layout.end h2 {
  font-size: 1.875rem;
  font-weight: 600;
  font-style: italic;
  color: #4b5563;
  margin-bottom: 0.5rem;
  margin-top: 0 !important;
}

.slidev-layout.end h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #006B3D !important;
}

.slidev-layout.end p {
  font-size: 1.25rem;
  color: #131313;
  line-height: 1.5;
}
</style>
