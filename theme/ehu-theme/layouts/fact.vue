<template>
  <div class="slidev-layout fact bg-[#00D88C] h-full flex flex-col justify-center items-center text-center">
    <div class="bg-white p-20 w-[580px] h-[580px] flex flex-col justify-center items-center shadow-2xl border-[20px] border-[#131313]">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.fact h1 {
  @apply text-4xl font-bold text-[#131313] mb-2;
}
.slidev-layout.fact p {
  @apply text-2xl text-[#131313] font-medium max-w-sm;
}
</style>
