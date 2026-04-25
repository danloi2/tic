<template>
  <div class="slidev-layout section bg-[#00D88C] relative flex justify-center items-center">
    <div class="absolute top-0 left-0 w-[140px] h-[140px] bg-white z-20" :style="{ backgroundImage: `url(${logoUrl})`, backgroundSize: '100px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"></div>
    
    <div class="z-10 relative bg-white w-3/4 p-12 flex flex-col justify-center items-center text-center shadow-2xl mt-16">
      <slot />
    </div>
  </div>
</template>

<script setup>
import logoUrl from '../public/logo.svg'
</script>

<style>
.slidev-layout.section h1, .slidev-layout.section h2 {
  @apply text-[#131313];
}

.slidev-layout.section h1 {
  @apply text-7xl font-bold mb-2 inline-block border-b-[12px] border-[#00D88C] pb-2;
}

.slidev-layout.section h2 {
  @apply text-4xl mb-6;
}

.slidev-layout.section p {
  @apply text-3xl leading-snug text-[#131313];
}
</style>
