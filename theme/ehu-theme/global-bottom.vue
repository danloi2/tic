<script setup lang="ts">
import { useNav } from '@slidev/client'
const { currentLayout } = useNav()
</script>

<template>
  <!-- Menú de descargas (sustituye al nativo de Slidev) -->
  <div class="absolute bottom-6 left-6 flex gap-4 z-50 text-[#131313]/40">
    <a href="slides.pdf" download title="Descargar en PDF" class="hover:text-[#00D88C] transition-colors">
      <div class="i-carbon:document-pdf text-xl" />
    </a>
    <a href="slides.pptx" download title="Descargar en PowerPoint" class="hover:text-[#00D88C] transition-colors">
      <div class="i-carbon:presentation-file text-xl" />
    </a>
    <a href="imagenes.zip" download title="Descargar imágenes (ZIP)" class="hover:text-[#00D88C] transition-colors">
      <div class="i-carbon:image text-xl" />
    </a>
  </div>

  <!-- Mostramos el número de diapositiva en todas excepto en la portada (cover) -->
  <page-number
    v-if="!['cover', 'index', 'section', 'end', 'fact', 'statement'].includes(currentLayout)"
  />
</template>
