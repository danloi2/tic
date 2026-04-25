<template>
  <!-- 
    Esta es la plantilla por defecto. 
    Nota: La columna verde y el logo se aplican automáticamente a esta diapositiva 
    desde el archivo `styles/layout.css`.
  -->
  <div class="slidev-layout default">
    <div class="w-full h-full">
      <slot />
    </div>
  </div>
</template>

<style>
/* Aquí puedes añadir estilos que apliquen SOLO a las diapositivas de tipo default */
.slidev-layout.default {
  @apply text-left;
}
</style>
