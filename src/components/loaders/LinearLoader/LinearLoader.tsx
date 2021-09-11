import React, { FC } from 'react'
import { withStyles } from '@material-ui/core'
import { conditionRequestSelector, loaderSelector } from '@store/selectors'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Props } from './types'
import { styles } from './styles'

const LinearLoader: FC<Props> = (props) => {
  const { classes } = props
  const isRequest = conditionRequestSelector()
  const isLoader = loaderSelector()
  return (
    <>
      {(isRequest || isLoader) && <LinearProgress className={classes.root} color='secondary'/>}
    </>
  )
}
export const LinearLoaderTSX = withStyles(styles)(LinearLoader)
