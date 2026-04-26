<script setup lang="ts">
import { useNav } from '@slidev/client'

const { currentPage, total } = useNav()

defineProps({
  absolute: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div
    class="ehu-page-number bg-[#131313] text-white text-[11px] px-3 py-1 font-bold z-50 min-w-[50px] text-center"
    :class="{ 'absolute bottom-6 right-6': absolute }"
  >
    {{ currentPage }} / {{ total }}
  </div>
</template>
