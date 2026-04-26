import { CSSProperties } from 'vue'

/**
 * Resolve background styles for layouts
 */
export function handleBackground(background?: string, dim = false, backgroundSize = 'cover'): CSSProperties {
  const isColor = background && (background[0] === '#' || background.startsWith('rgb'))

  const style: CSSProperties = {
    backgroundSize,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: isColor
      ? undefined
      : dim
        ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`
        : `url("${background}")`,
    backgroundColor: isColor ? background : undefined,
  }

  if (!background) {
    delete style.backgroundImage
    delete style.backgroundColor
  }

  return style
}
