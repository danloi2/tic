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

export {}
