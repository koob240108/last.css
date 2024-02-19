export
const css_vars: {
  /** font size */
  fs: string
  fs_sm: string
  fs_xs: string
  /** unit size */
  us: (num?: number) => string

  /** foreground color */
  fc: (opacity?: number) => string
  /** background color */
  bc: (opacity?: number) => string
}

/** >= 0 */
export
const at_xs: string

/** >= 576 */
export
const at_sm: string

/** >= 768 */
export
const at_md: string

/** >= 992 */
export
const at_lg: string

/** >= 1200 */
export
const at_xl: string

/** >= 1400 */
export
const at_xxl: string

/** light mode */
export
const at_light: string

/** dark mode */
export
const at_dark: string
