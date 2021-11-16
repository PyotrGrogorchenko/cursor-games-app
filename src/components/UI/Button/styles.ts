import { Palette, Theme } from '@theme'
import styled from 'styled-components'
import { Props } from './types'

const getColorPrimary = (props: Props, palette: Palette) => {
  const { disabled, color } = props

  if (disabled) return palette.shadow
  return color ? palette[color] : palette.primary
}

const getStyles = ((props: Props, theme: Theme) => {
  const { disabled, variant } = props
  const { palette, sizing } = theme

  const colorPrimary = getColorPrimary(props, palette)
  const colorSecondary = palette.secondary
  const colorHover = disabled ? palette.shadow : palette.common
  const isOutlined = variant && variant === 'outlined'
  const isContained = variant && variant === 'contained'

  return `
    ${theme.mixins.fontFamily}
    padding: ${isOutlined ? '3px 5px 3px 5px' : '5px 7px 5px 7px'};
    font-size: ${sizing.button[props.size || 'm']};
    border-radius: 5px; 
    border: ${isOutlined ? `2px solid ${colorPrimary}` : 'none'};
    background-color: ${isContained ? `${colorPrimary}` : 'transparent'};
    color: ${isContained ? `${colorSecondary}` : `${colorPrimary}`};
    ${disabled ? 'pointer-events: none' : 'cursor: pointer'};
    transition-duration: 300ms;
    &:hover {
      ${isContained ? 'background-color' : 'color'}: ${colorHover};
      border-color: ${colorHover};
    } 
  `
})

export const ButtonStyled = styled.button<Props>((props) => getStyles(props, props.theme))
export const AnchorStyled = styled.a<Props>((props) => `text-decoration:none; ${getStyles(props, props.theme)}`)
