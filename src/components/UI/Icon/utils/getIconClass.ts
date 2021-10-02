import { iconClasses, Icon } from './icon'

export const getIconClass = (icon: Icon): string => {
  const iconClass = iconClasses[icon]
  return iconClass
}
