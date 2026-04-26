<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'note'
  },
  title: {
    type: String,
    default: ''
  },
  autofit: {
    type: Boolean,
    default: true
  }
})

const type = computed(() => props.type.toLowerCase())

const TYPES: Record<string, { icon: string; label: string; border: string; bg: string; text: string; header: string }> = {
  note: {
    icon: 'ℹ️',
    label: 'Nota',
    border: '#3b82f6',
    bg: 'rgba(59,130,246,0.07)',
    text: '#1e3a5f',
    header: '#2563eb',
  },
  tip: {
    icon: '💡',
    label: 'Consejo',
    border: '#00D88C',
    bg: 'rgba(0,216,140,0.07)',
    text: '#064e3b',
    header: '#006B3D',
  },
  important: {
    icon: '❗',
    label: 'Importante',
    border: '#8b5cf6',
    bg: 'rgba(139,92,246,0.07)',
    text: '#3b0764',
    header: '#7c3aed',
  },
  warning: {
    icon: '⚠️',
    label: 'Aviso',
    border: '#f59e0b',
    bg: 'rgba(245,158,11,0.07)',
    text: '#78350f',
    header: '#d97706',
  },
  caution: {
    icon: '🚨',
    label: 'Atención',
    border: '#ef4444',
    bg: 'rgba(239,68,68,0.07)',
    text: '#7f1d1d',
    header: '#dc2626',
  },
}

const meta = computed(() => TYPES[type.value] ?? TYPES.note)
const displayTitle = computed(() => props.title || meta.value.label)

const MAX_FONT_PX = 26
const MIN_FONT_PX = 12

const wrapperRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)
const bodyRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)

const currentFontSize = ref(MAX_FONT_PX)

function shrinkToFit() {
  if (!props.autofit) return
  
  const wrapper = wrapperRef.value
  const card = cardRef.value
  const body = bodyRef.value
  const header = headerRef.value
  if (!wrapper || !card || !body || !header) return

  if (wrapper.clientHeight === 0) return

  const originalTransition = card.style.transition
  card.style.transition = 'none'

  let size = MAX_FONT_PX
  body.style.fontSize = `${size}px`
  header.style.fontSize = `${size * 1.3}px`

  nextTick(() => {
    const availableHeight = wrapper.clientHeight - 40

    if (availableHeight <= 0) {
      card.style.transition = originalTransition
      return
    }
    
    while (size > MIN_FONT_PX && card.offsetHeight > availableHeight) {
      size -= 1
      body.style.fontSize = `${size}px`
      header.style.fontSize = `${size * 1.3}px`
    }
    
    if (currentFontSize.value !== size) {
      currentFontSize.value = size
    }

    setTimeout(() => {
      if (card) card.style.transition = originalTransition
    }, 50)
  })
}

onMounted(() => {
  shrinkToFit()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', shrinkToFit)
  }
  setTimeout(shrinkToFit, 300)
  setTimeout(shrinkToFit, 800)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', shrinkToFit)
  }
})
</script>

<template>
  <div ref="wrapperRef" class="ehu-alert-wrapper w-full my-4">
    <div
      ref="cardRef"
      class="ehu-alert-card w-full rounded-xl shadow-md transition-all duration-200"
      :style="{
        borderLeft: `8px solid ${meta.border}`,
        backgroundColor: meta.bg,
        color: meta.text,
        padding: '1.5rem 2rem',
      }"
    >
      <div
        ref="headerRef"
        class="ehu-alert-header flex items-center gap-3 mb-3 font-bold tracking-tight"
        :style="{ color: meta.header, fontSize: `${currentFontSize * 1.2}px` }"
      >
        <span>{{ meta.icon }}</span>
        <span>{{ displayTitle }}</span>
      </div>

      <div
        ref="bodyRef"
        class="ehu-alert-body"
        :style="{ fontSize: `${currentFontSize}px`, lineHeight: '1.5' }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.ehu-alert-body :deep(p) {
  margin-bottom: 0.5em;
}

.ehu-alert-body :deep(ul),
.ehu-alert-body :deep(ol) {
  padding-left: 1.4em;
  margin-bottom: 0.5em;
}

.ehu-alert-body :deep(li) {
  margin-bottom: 0.2em;
}

.ehu-alert-body :deep(blockquote) {
  border-left: 4px solid currentColor;
  padding-left: 1rem;
  font-style: italic;
  margin: 1rem 0;
  opacity: 0.8;
  font-size: 1.05em;
}

.ehu-alert-body :deep(strong) {
  font-weight: 700;
}

.ehu-alert-body :deep(code) {
  padding: 0.1em 0.4em;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.08);
}
</style>
