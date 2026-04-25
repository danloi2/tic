import { defineTransformersSetup } from '@slidev/types'

// Alert admonitions are now implemented as the `alert` layout.
// See: layouts/alert.vue
export default defineTransformersSetup(() => {
  return {
    pre: [],
    preCodeblock: [],
    postCodeblock: [],
    post: [],
  }
})
