<template>
  <div class="slidev-layout section bg-gradient-to-br from-[#00D88C] to-[#00b072] relative flex justify-center items-center">
    <div class="absolute top-0 left-0 w-[140px] h-[140px] bg-white z-20" :style="{ backgroundImage: `url(${logoUrl})`, backgroundSize: '100px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"></div>
    
    <div class="z-10 relative bg-white w-3/4 p-12 flex flex-col justify-center items-center text-center shadow-2xl mt-16">
      <slot />
    </div>
  </div>
</template>

<script setup>
import logoUrl from '../public/logo.svg'
</script>

<style lang="postcss">
.slidev-layout.section h1, .slidev-layout.section h2 {
  color: #131313;
}

.slidev-layout.section h1 {
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: inline-block;
  border-bottom: 12px solid #00D88C;
  padding-bottom: 0.5rem;
}

.slidev-layout.section h2 {
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
}

.slidev-layout.section p {
  font-size: 1.875rem;
  line-height: 1.625;
  color: #131313;
}
</style>
