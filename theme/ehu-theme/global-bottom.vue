<script setup lang="ts">
import { useNav } from '@slidev/client'
const { currentLayout } = useNav()
</script>

<template>

  <!-- Mostramos el número de diapositiva en todas excepto en la portada (cover) -->
  <page-number
    v-if="!['cover', 'index', 'section', 'end', 'fact', 'statement'].includes(currentLayout)"
  />
</template>
