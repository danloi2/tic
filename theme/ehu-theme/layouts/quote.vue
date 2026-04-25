<template>
  <div class="slidev-layout quote h-full flex flex-col justify-center items-center text-center">
    <blockquote class="text-4xl italic font-serif border-none text-[#131313] p-12 bg-[#E6FAF2] rounded-lg shadow-sm leading-tight border-l-8 border-[#00D88C]">
      <slot />
    </blockquote>
  </div>
</template>

<style>
/* Forzar que el texto principal de la cita herede el tamaño grande y tipografía serif */
.slidev-layout.quote blockquote p {
  @apply text-4xl font-serif italic text-[#131313] leading-tight mb-8;
}

/* El último párrafo (que normalmente es el autor) lo hacemos más pequeño, sin cursiva y con la fuente normal EHUSans */
.slidev-layout.quote blockquote p:last-child:not(:first-child) {
  @apply text-2xl text-[#006B3D] mt-8 not-italic font-bold font-sans block text-right;
}
</style>
