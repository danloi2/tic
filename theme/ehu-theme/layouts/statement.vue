<template>
  <div class="slidev-layout statement bg-[#00D88C] h-full flex flex-col justify-center items-center text-center p-12">
    <div class="z-10 relative bg-white w-full p-16 shadow-2xl rounded-sm border-l-[12px] border-[#131313]">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.statement h1 {
  @apply text-6xl font-bold text-[#131313] inline-block border-b-8 border-[#00D88C] pb-2 mb-4;
}
.slidev-layout.statement p {
  @apply text-3xl text-[#131313] mt-4;
}
</style>
