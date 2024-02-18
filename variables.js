export
const css_vars = {
  /** font size */
  fs: 'var(--fs)',
  fs_sm: 'var(--fs-sm)',
  fs_xs: 'var(--fs-xs)',
  /** unit size */
  us: (num = 1) => `calc(var(--us) * ${num})`,

  /** foreground color */
  fc: (opacity = 1) => `rgba(var(--fc), ${opacity})`,
  /** background color */
  bc: (opacity = 1) => `rgba(var(--bc), ${opacity})`,
}
