<template>
  <div class="ehu-table-container" :class="{ 'has-shadow': shadow }">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  shadow: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.ehu-table-container {
  margin-top: 1rem;
  font-size: 1.15rem;
  margin-bottom: 1.5rem;
  width: 100%;
}

.ehu-table-container.has-shadow :deep(table) {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Extra punch for the component version */
.ehu-table-container :deep(table) {
  transition: transform 300ms ease;
}

.ehu-table-container:hover :deep(table) {
  transform: translateY(-2px);
}

/* Ensure markdown tables inside are styled even if global styles aren't applied */
.ehu-table-container :deep(table) {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.ehu-table-container :deep(th) {
  background-color: #00D88C;
  color: white;
  font-weight: 700;
  text-align: left;
  padding: 1rem;
  border-bottom: 4px solid #006B3D;
  font-size: 1.1rem;
}

.ehu-table-container :deep(td) {
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
</style>
