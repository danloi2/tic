<script setup lang="ts">
import { computed, nextTick, onMounted, onUpdated, ref } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter } = useSlideContext()

const type = computed<string>(() => ($frontmatter.alertType ?? 'note').toLowerCase())
const customTitle = computed<string | undefined>(() => $frontmatter.alertTitle)

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
const title = computed(() => customTitle.value ?? meta.value.label)

const MAX_FONT_PX = 26
const MIN_FONT_PX = 11

const wrapperRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)
const bodyRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)

function shrinkToFit() {
  const wrapper = wrapperRef.value
  const card = cardRef.value
  const body = bodyRef.value
  const header = headerRef.value
  if (!wrapper || !card || !body || !header) return

  let size = MAX_FONT_PX

  // Apply initial size directly to DOM for accurate layout measurement
  body.style.fontSize = `${size}px`
  header.style.fontSize = `${size * 1.5}px`

  // Compare card natural height against wrapper available height
  const availableHeight = wrapper.clientHeight

  while (size > MIN_FONT_PX && card.offsetHeight > availableHeight) {
    size -= 0.5
    body.style.fontSize = `${size}px`
    header.style.fontSize = `${size * 1.5}px`
  }
}

onMounted(() => nextTick(shrinkToFit))
onUpdated(() => nextTick(shrinkToFit))
</script>

<template>
  <!-- Outer wrapper: full slide height, used as reference for overflow detection -->
  <div
    ref="wrapperRef"
    class="slidev-layout alert-layout h-full w-full flex flex-col justify-center items-center p-12"
    :style="{ background: '#fff' }"
  >
    <!-- Card: NO overflow:hidden — natural height so all content is visible and measurable -->
    <div
      ref="cardRef"
      class="alert-card w-full rounded-xl shadow-md"
      :style="{
        borderLeft: `8px solid ${meta.border}`,
        backgroundColor: meta.bg,
        color: meta.text,
        padding: '2rem 2.5rem',
      }"
    >
      <!-- Header -->
      <div
        ref="headerRef"
        class="alert-card-header flex items-center gap-3 mb-4 font-bold tracking-tight"
        :style="{ color: meta.header, fontSize: `${MAX_FONT_PX * 1.5}px` }"
      >
        <span>{{ meta.icon }}</span>
        <span>{{ title }}</span>
      </div>

      <!-- Content body -->
      <div
        ref="bodyRef"
        class="alert-card-body"
        :style="{ fontSize: `${MAX_FONT_PX}px`, lineHeight: '1.6' }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.slidev-layout.alert-layout .alert-card-body p {
  margin-bottom: 0.5em;
}

.slidev-layout.alert-layout .alert-card-body ul,
.slidev-layout.alert-layout .alert-card-body ol {
  padding-left: 1.4em;
  margin-bottom: 0.5em;
}

.slidev-layout.alert-layout .alert-card-body li {
  margin-bottom: 0.2em;
}

.slidev-layout.alert-layout .alert-card-body h1,
.slidev-layout.alert-layout .alert-card-body h2,
.slidev-layout.alert-layout .alert-card-body h3 {
  font-weight: 700;
  margin-bottom: 0.5em;
  border: none !important;
}

.slidev-layout.alert-layout .alert-card-body strong {
  font-weight: 700;
}

.slidev-layout.alert-layout .alert-card-body code {
  padding: 0.1em 0.4em;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.08);
}
</style>
