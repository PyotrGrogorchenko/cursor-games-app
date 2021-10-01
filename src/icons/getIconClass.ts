import { iconsClasses, Icons } from './icons'



export const getIconClass = (icon: Icons): string => {
  const iconClass = iconsClasses[icon]
  return iconClass
}
