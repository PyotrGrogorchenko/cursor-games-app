import { memo } from 'react'
import { MainProviderTSX, useMainContext } from './MainProvider'

export const MainProvider = memo(MainProviderTSX)
export { useMainContext }
