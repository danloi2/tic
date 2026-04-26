declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $slidev: {
      nav: {
        currentPage: number
        currentLayout: string
        total: number
        [key: string]: any
      }
      configs: any
      themeConfigs: any
      [key: string]: any
    }
  }
}

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

export {}
