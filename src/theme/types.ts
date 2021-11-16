export type ColorsList = 'primary' | 'secondary' | 'tertiary' | 'common' | 'shadow' | 'error' | 'warning' | 'success' | 'dark' | 'light'
export type ColorsReadonly = Exclude<ColorsList, 'primary' | 'secondary' | 'tertiary' | 'shadow'>
export type ColorsOpen = Exclude<ColorsList, ColorsReadonly>
export type Colors = ColorsOpen | ColorsReadonly
export type Palette = Record<ColorsOpen, string> & Readonly<Record<ColorsReadonly, string>>

export type Sizes = 's' | 'm' | 'l'
export type Sizing = Readonly<Record<Sizes, string>>

export type TextSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type TextSizing = Readonly<Record<TextSizes, string>>

export type BreakpointsSizes = 'mobileLandscape' | 'tabletPortrait' | 'tabletLandscape' | 'laptop' | 'desktop'
export type BreakpointsSizing = Readonly<Record<BreakpointsSizes, string>>

export type MixinsList = 'fontFamily'
export type Mixins = Record<MixinsList, string>

export type Theme = Readonly<{
  palette: Palette,
  sizing: {
    text: TextSizing,
    button: Sizing,
    input: Sizing
  },
  breakpoints: BreakpointsSizing,
  mixins: Mixins
}>
