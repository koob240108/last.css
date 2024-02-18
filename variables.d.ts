type css_vars = {
  /** font size */
  fs: string
  fs_sm: string
  fs_xs: string
  /** unit size */
  us: (num: number) => string

  /** foreground color */
  fc: (opacity: number) => string
  /** background color */
  bc: (opacity: number) => string
}

export
const css_vars: css_vars
